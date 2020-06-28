<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
    	'name', 'user_id',
    ];

    public function user()
    {
    	return $this->belongsTo('User')->withDefault();
    }
}
