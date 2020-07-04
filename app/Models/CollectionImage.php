<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CollectionImage extends Model
{
	 /**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    public function collection() 
    {
        return $this->belongsTo('App\Models\Collection');
    }
}
