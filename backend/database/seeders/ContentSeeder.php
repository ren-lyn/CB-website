<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContentSeeder extends Seeder
{
    public function run()
    {
        // Projects
        $projects = [
            [
                'name' => 'Project Alpha', 
                'location' => 'Calamba, Laguna',
                'year' => 2023,
                'scope' => 'Land Development, Road Construction',
                'status' => 'Completed',
                'description' => 'A major land development project involving 50 hectares of earthworks and road network construction.',
                'image' => null // Placeholder
            ],
            [
                'name' => 'Vista Heights', 
                'location' => 'Silang, Cavite',
                'year' => 2024,
                'scope' => 'Site Grading, Drainage Systems',
                'status' => 'Ongoing',
                'description' => 'Site preparation and drainage installation for a high-end residential subdivision.',
                'image' => null
            ],
            [
                'name' => 'Industrial Park Expansion', 
                'location' => 'Batangas',
                'year' => 2022,
                'scope' => 'Backfilling, Compaction',
                'status' => 'Completed',
                'description' => 'Supplied and compacted 500,000 cu.m. of backfill materials for industrial expansion.',
                'image' => null
            ]
        ];

        foreach ($projects as $project) {
            \App\Models\Project::create($project);
        }

        // Services
        $services = [
            // Primary
            [
                'title' => 'Backfill Sourcing / Land Sourcing',
                'description' => 'We source high-quality backfill materials from our strategic sites in Calamba and Silang for your land development needs.',
                'type' => 'primary',
                'image' => null
            ],
            [
                'title' => 'Land Development',
                'description' => 'Comprehensive land preparation services including clearing, grubbing, and grading.',
                'type' => 'primary',
                'image' => null
            ],
            [
                'title' => 'Site Management',
                'description' => 'Professional on-site management to ensure project timelines and safety standards are met.',
                'type' => 'primary',
                'image' => null
            ],
            [
                'title' => 'Equipment Leasing',
                'description' => 'Leasing of heavy equipment such as excavators, bulldozers, and dump trucks for construction projects.',
                'type' => 'primary',
                'image' => null
            ],
            // Secondary
            [
                'title' => 'Project Management Consultation',
                'description' => 'Expert advice and planning for complex construction and development projects.',
                'type' => 'secondary',
                'image' => null
            ],
             [
                'title' => 'General Engineering & Civil Works',
                'description' => 'Execution of civil engineering works including roads, bridges, and drainage systems.',
                'type' => 'secondary',
                'image' => null
            ],
             [
                'title' => 'Horizontal & Vertical Construction',
                'description' => 'Full-scale construction services for both horizontal infrastructures and vertical structures.',
                'type' => 'secondary',
                'image' => null
            ],
        ];

        foreach ($services as $service) {
            \App\Models\Service::create($service);
        }
    }
}
