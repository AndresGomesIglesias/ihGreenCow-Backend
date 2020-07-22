<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->longText('brand');
            $table->string('color');
            $table->string('madeIn');
            $table->longText('location');
            $table->text('description');
            $table->integer('categories_id')->unsigned()->index();
            $table->integer('user_id')->unsigned()->index();
            $table->integer('vote');
            $table->integer('price');
            $table->integer('status');
            $table->string('slug')->unique();
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
        Schema::dropIfExists('articles');
    }
}
