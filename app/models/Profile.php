<?php

namespace App\models;

use App\models\User;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
   // protected $fillable = ['user_id','firstname', 'lastname']; //only the field names inside the array

    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
