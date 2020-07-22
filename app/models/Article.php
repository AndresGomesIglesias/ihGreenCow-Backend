<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use App\models\Categories;
use App\models\User;

class Article extends Model
{
    protected $fillable = [
        'title', 'brand' , 'color' , 'madeIn' ,'location', 'categories_id', 'user_id' , 'vote' , 'price' , 'status'
    ];

    public function categories()
    {
        return $this->belongsTo(Categories::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
