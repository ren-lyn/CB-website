<?php

namespace App\Http\Controllers;

use App\Models\PageContent;
use Illuminate\Http\Request;

class PageContentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = PageContent::query();

        if ($request->has('page')) {
            $query->where('page_name', $request->query('page'));
        }

        return $query->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'page_name' => 'required|string',
            'section_name' => 'required|string',
            'content' => 'required',
        ]);

        $content = PageContent::updateOrCreate(
            [
                'page_name' => $validated['page_name'],
                'section_name' => $validated['section_name']
            ],
            ['content' => $validated['content']]
        );

        return response()->json($content);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return PageContent::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $content = PageContent::findOrFail($id);
        $content->update($request->all());
        return response()->json($content);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        PageContent::destroy($id);
        return response()->json(['message' => 'Deleted successfully']);
    }
}
