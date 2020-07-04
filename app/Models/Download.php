<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Download extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
    	'download_url', 'user_id',
    ];

    public function user()
    {
    	return $this->belongsTo('App\Models\User')->withDefault();
    }

}
