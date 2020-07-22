<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use App\models\Article;

class Categories extends Model
{
    protected $fillable = [
        'name' , 'status' , 'slug'
    ];

   /**
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function parent() {
        return $this->belongsTo(self::class, 'parent_id');
    }

    /**
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function children() {
        return $this->hasMany(self::class, 'parent_id','id');
    }
}
