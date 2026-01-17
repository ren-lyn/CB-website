<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Machinery extends Model
{
    protected $fillable = ['name', 'type', 'plate_number', 'is_decommissioned', 'image_url'];

    protected $casts = [
        'is_decommissioned' => 'boolean',
    ];

    //
}
