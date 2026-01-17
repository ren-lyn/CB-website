<?php

namespace App\Http\Controllers;

use App\Models\DevelopmentSite;
use Illuminate\Http\Request;

class DevelopmentSiteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DevelopmentSite::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'location' => 'required|string',
            'capacity' => 'required|string',
            'description' => 'nullable|string',
            'image_url' => 'nullable|string',
        ]);

        $site = DevelopmentSite::create($validated);
        return response()->json($site, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return DevelopmentSite::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $site = DevelopmentSite::findOrFail($id);

        $validated = $request->validate([
            'name' => 'string',
            'location' => 'string',
            'capacity' => 'string',
            'description' => 'nullable|string',
            'image_url' => 'nullable|string',
        ]);

        $site->update($validated);
        return response()->json($site);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DevelopmentSite::destroy($id);
        return response()->json(['message' => 'Deleted successfully']);
    }
}
