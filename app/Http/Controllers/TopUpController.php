<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class TopUpController extends Controller
{

    public function topup (Request $request)
    {
        $topup = DB::table('topup_list')->orderBy("id")->get('*');
        return response()->json(['topup' => $topup]);
    } 
}