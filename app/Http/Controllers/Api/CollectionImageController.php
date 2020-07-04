<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CollectionImage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CollectionImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, int $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'image_id' => 'required|numeric|min:1',
            'grayscale' => 'boolean',
            'blur' => 'numeric|min:1|max:5'
        ]);

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        return response()->json([], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CollectionImage  $collectionImage
     * @return \Illuminate\Http\Response
     */
    public function show(CollectionImage $collectionImage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CollectionImage  $collectionImage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CollectionImage $collectionImage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CollectionImage  $collectionImage
     * @return \Illuminate\Http\Response
     */
    public function destroy(CollectionImage $collectionImage)
    {
        //
    }
}
