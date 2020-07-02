<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request): JsonResponse
    {
        $userId = $request->attributes->get('loggedUserID');
        $collections = Collection::where('user_id', $userId);
        return response()->json($collections->orderBy('name', 'asc')->get(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
        ]);

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $userId = $request->attributes->get('loggedUserID');
        $name = $request->name;

        if(Collection::where(['user_id' => $userId, 'name' => $name])->first()) {
            return response()->json(['error' => 'Collection already exists'], 400);
        }

        $collection = Collection::create(['name' => $name, 'user_id' => $userId]);

        return response()->json($collection, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, int $id): JsonResponse
    {
        $collection = Collection::find($id);
        $userId = $request->attributes->get('loggedUserID');

        if(!$collection)
            return response()->json(['error' => 'Collection not found'], 404);

        if($userId !== $collection->user->id) 
            return response()->json(['error' => 'This user does not have permission to do this operation'], 403);
        
        return response()->json($collection, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
        ]);

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $collection = Collection::find($id);
        $userId = $request->attributes->get('loggedUserID');
        $name = $request->name;

        if(!$collection)
            return response()->json(['error' => 'Collection not found'], 404);

        if($userId !== $collection->user->id) 
            return response()->json(['error' => 'This user does not have permission to do this operation'], 403);
        
        if(Collection::where(['user_id' => $userId, 'name' => $name])->first())
            return response()->json(['error' => 'Collection already exists'], 400);

        $collection->name = $name;
        $collection->save();

        return response()->json($collection, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, int $id): JsonResponse
    {
        $collection = Collection::find($id);
        $userId = $request->attributes->get('loggedUserID');

        if(!$collection)
            return response()->json(['error' => 'Collection not found'], 404);

        if($userId !== $collection->user->id) 
            return response()->json(['error' => 'This user does not have permission to do this operation'], 403);

        $collection->delete();

        return response()->json([], 204);
    }
}
