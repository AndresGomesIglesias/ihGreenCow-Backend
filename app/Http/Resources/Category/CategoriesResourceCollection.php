<?php

namespace App\Http\Resources\Category;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\models\Categories;

class CategoriesResourceCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
