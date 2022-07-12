<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Midtrans;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Psy\Command\WhereamiCommand;
use Tymon\JWTAuth\Facades\JWTAuth;

class WebController extends Controller
{
    public function payment(Request $request)
    {
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = env('MIDTRANS_SERVER_KEY');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $order = new Midtrans;
        $order->username = $request->input('username');
        $order->product_id = $request->input('product_id');
        $order->snap_token = $request->input('snap_token');
        $order->order_id = rand();
        $order->save();

        $itemid = $order->product_id;
        $items = DB::table('topup_list')->where('id', $itemid)->first();

        $params = array(
            'transaction_details' => array(
                'order_id' => $order->order_id,
                'gross_amount' => 18000,
            ),
            'item_details' => array(
                [
                    'id' => $itemid,
                    'price' => $items->price,
                    'quantity' => 1,
                    'name' => $items->name,
                ]
            ),
        );

        $snapToken = \Midtrans\Snap::getSnapToken($params);
        return response()->json(['snap_token' => $snapToken]);
    }

    public function payment_post(Request $request)
    {
        $json = json_decode($request->getContent());
        $order = DB::table('midtrans')->where('order_id', $json->order_id)
            ->update([
                'status' => $json->transaction_status,
                'payment_type' => $json->payment_type,
                'payment_code' => isset($json->payment_code) ? $json->payment_code : null,
                'pdf' => isset($json->pdf_url) ? $json->pdf_url : null
            ]);
        return response()->json($order);
    }

    public function payment_history()
    {
        $user = JWTAuth::user();
        $order_list = DB::table('midtrans')->where('username',$user->username)->orderBy('created_at','asc')->get();
        return response()->json($order_list);
    }
}
