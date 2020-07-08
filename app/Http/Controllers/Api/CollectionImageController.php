<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CollectionImage;
use App\Models\Collection;
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
    public function index(Request $request, int $id): JsonResponse
    {
        $userId = $request->attributes->get('loggedUserID');
        $collection = Collection::find($id);

        if($collection->user_id !== $userId) {
            return response()->json(['error' => 'This user does not have permission to do this operation'], 403);
        }

        return response()->json($collection->images, 200);
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
            'blur' => 'numeric|min:0|max:5',
            'download_url' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        if(!$collection = Collection::find($id)) {
            return response()->json(['error' => 'Collection not found'], 400);
        }

        if($collection->user_id !== $request->attributes->get('loggedUserID')) {
            return response()->json(['error' => 'This user does not have permission to do this operation'], 403);
        }

        if(CollectionImage::where(['collection_id' => $id, 'image_id' => $request->image_id])->first()) {
            return response()->json(['error' => 'Image already in collection'], 400);
        }

        $data = array_merge($request->all(), ['collection_id' => $id]);

        $collectionImage = CollectionImage::create($data);

        return response()->json($collectionImage, 201);
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
    public function destroy(Request $request, int $id, int $img_id): JsonResponse
    {
        $collectionImage = CollectionImage::where(['collection_id' => $id, 'image_id' => $img_id])->first();
        $collection = Collection::find($id);

        if(!$collection) {
            return response()->json(['error' => 'Collection not found'], 404);
        }

        if($collection->user_id !== $request->attributes->get('loggedUserID')) {
            return response()->json(['error' => 'This user does not have permission to do this operation'], 403);
        }

        if(!$collectionImage) {
            return response()->json(['error' => 'Image not found in collection'], 404);
        }

        $collectionImage->delete();

        return response()->json([], 204);
    }
}
