<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NewsController extends Controller
{
    public function store(Request $request)
    {

        $imagesName = [];
        $response = [];
        
        $validator = Validator::make($request->all(),
            [
                'judul' => 'required',
                'berita' => 'required',
                'images' => 'required',
                'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048'
            ]
        );

        if($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if($request->has('images')) {
            foreach($request->file('images') as $image) {
                $filename = time().rand(1, 10). '.'.$image->getClientOriginalExtension();
                $image->move('uploads/', $filename);

                $newNews = News::create([
                    'judul' => $request->judul,
                    'berita' => $request->berita,
                    'image_name' => $filename
                ]);
                if($newNews){
                    return response()->json(["status" => 200]);
                }
            }

            $response["status"] = "successs";
            $response["message"] = "Success! image(s) uploaded";
        }
    }


    public function index()
    {
        return News::paginate(4);
    }

    public function show($id)
    {
        $news = News::find($id);
        return response()->json(['status' => 200, 'posts' => $news]);
    }

    public function update(Request $request, $id)
    {
        
        $response = [];
        
        $validator = Validator::make($request->all(),
            [
                'judul' => 'required',
                'berita' => 'required',
                'images' => 'required',
                'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048'
            ]
        );

        if($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if($request->has('images')) {
            foreach($request->file('images') as $image) {
                $filename = time().rand(1, 10). '.'.$image->getClientOriginalExtension();
                $image->move('uploads/', $filename);

                $newNews = News::where($id)->update([
                    'judul' => $request->judul,
                    'berita' => $request->berita,
                    'image_name' => $filename
                ]);
                if($newNews->save()){
                    return response()->json(["status" => 200]);
                }
            }

            $response["status"] = "successs";
            $response["message"] = "Success! image(s) uploaded";
        }
    }

    public function destroy($id)
    {
        $news = News::find($id);
        if($news -> delete()){
            return response()->json(["status" => 200]);
        }
    }
}