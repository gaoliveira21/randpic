<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CollectionImage extends Model
{
    protected $table = 'collections_images';
	 /**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
    protected $fillable = [
        'image_id', 'blur', 'grayscale', 'collection_id', 'download_url'
    ];

    public function collection()
    {
        return $this->belongsTo('App\Models\Collection');
    }
}
