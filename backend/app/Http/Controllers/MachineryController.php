<?php

namespace App\Http\Controllers;

use App\Models\Machinery;
use Illuminate\Http\Request;

class MachineryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Admin View: Return everything
        if (auth('sanctum')->check()) {
            return Machinery::all();
        }

        // Public View: Hide decommissioned
        $query = Machinery::where('is_decommissioned', false);

        // Check display settings
        $settings = \App\Models\PageContent::where('page_name', 'resources')
            ->where('section_name', 'display_settings')
            ->first();

        $showPlates = false;
        if ($settings) {
            $config = json_decode($settings->content, true);
            $showPlates = $config['show_plate_numbers'] ?? false;
        }

        if ($showPlates) {
            return $query->get();
        } else {
            // Group by Name + Type and return unique items
            // Also hide plate_number to prevent leakage
            $all = $query->get();
            $unique = $all->unique(function ($item) {
                return $item->name . '|' . $item->type;
            });

            $unique->each(function ($item) {
                $item->makeHidden('plate_number');
            });

            return $unique->values();
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'type' => 'required|string',
            'plate_number' => 'nullable|string',
            'is_decommissioned' => 'boolean',
            'image_url' => 'nullable|string',
        ]);

        $machinery = Machinery::create($validated);
        return response()->json($machinery, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Machinery::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $machinery = Machinery::findOrFail($id);

        $validated = $request->validate([
            'name' => 'string',
            'type' => 'string',
            'plate_number' => 'nullable|string',
            'is_decommissioned' => 'boolean',
            'image_url' => 'nullable|string',
        ]);

        $machinery->update($validated);
        return response()->json($machinery);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Machinery::destroy($id);
        return response()->json(['message' => 'Deleted successfully']);
    }
}
