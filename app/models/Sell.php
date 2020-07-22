<?php

namespace App;

use App\models\User;
use Illuminate\Database\Eloquent\Model;

class Sell extends Model
{
    public function user(){
        return $this->belongsTo(User::class);
    }
}
