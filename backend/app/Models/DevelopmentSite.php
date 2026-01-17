<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DevelopmentSite extends Model
{
    protected $fillable = ['name', 'location', 'capacity', 'description', 'image_url'];
    //
}
