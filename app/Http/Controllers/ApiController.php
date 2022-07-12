<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    public function payment_handler(Request $request)
    {
        $json = json_decode($request->getContent());
        $signature_key = hash('sha512', $json->order_id . $json->status_code . $json->gross_amount . env('MIDTRANS_SERVER_KEY'));

        if ($signature_key != $json->signature_key) {
            return abort(404);
        }

        if ($json->transaction_status == 'settlement') {
            //status berhasil
            $items = DB::table('midtrans')->where('order_id', $json->order_id)->first();
            $item_id = DB::table('topup_list')->where('id', $items->product_id)->first();
            $users = DB::table('users')->where('username', $items->username)->first();
            $order = DB::table('midtrans')->where('order_id', $json->order_id)
                ->update(['status' => $json->transaction_status]);
            $user = DB::table('users')->where('username', $users->username)
                ->update(['cash' => $users->cash + $item_id->cash]);
            return $items;
        } else {
            $order = DB::table('midtrans')->where('order_id', $json->order_id)
                ->update(['status' => $json->transaction_status]);
            return $order;
        }
    }
}
