<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('topup_list')->insert([
            'name' => '8.000 Koin',
            'price' => '20000',
            'cash' => '8000'
        ]);
        DB::table('topup_list')->insert([
            'name' => '12.750 Koin',
            'price' => '30000',
            'cash' => '12750'
        ]);
        DB::table('topup_list')->insert([
            'name' => '25.000 Koin',
            'price' => '50000',
            'cash' => '25000'
        ]);
        DB::table('topup_list')->insert([
            'name' => '50.000 Koin',
            'price' => '100000',
            'cash' => '50000'
        ]);
    }
}
