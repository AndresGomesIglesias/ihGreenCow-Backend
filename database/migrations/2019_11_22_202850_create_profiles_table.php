<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) 
        {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->index();
            $table->string('firstname')->nullable();
            $table->string('lastname')->nullable();
            $table->text('adress')->nullable();
            $table->string('number')->nullable();
            $table->string('npa')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->text('about')->nullable();
            $table->text('hobbies')->nullable();
            $table->string('country')->nullable();
            $table->tinyInteger('rating')->nullable();
            $table->string('picture')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
