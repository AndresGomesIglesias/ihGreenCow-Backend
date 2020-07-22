<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\models\Categories;
use App\models\Article;
use App\Http\Resources\Category\CategoriesResources;
use App\Http\Resources\Category\CategoriesResourceCollection;
use App\Http\Requests\CategorieFormRequests;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CategoriesController extends Controller
{
    /**  
     * Display a listing of the resource.
     *
     * @return ArticleResourceCollection
     */
    public function index()
    {
        return  new CategoriesResourceCollection(Categories::paginate(100));
    }


    /**
     * Display the specified resource.
     *
     * @param  Categories $categoriese
     * @return CategoriesResources
     */
    public function getBySlug(Categories $categories): CategoriesResources
    {
        $categorie_id = Categories::whereSlug($categories->slug)->firstOrFail()->id;
     
        $articles = Article::whereCategories_id($categorie_id)->get();

        return new CategoriesResources($articles);  
    }

    /**
     * Display the specified resource.
     *
     * @param  Categories $categoriese
     * @return CategoriesResources
     */
    public function show(Categories $categories): CategoriesResources
    {
        return  new CategoriesResources($categories);   
    }

 
    /**
     * Store
     *
     * @param  mixed $request
     *
     * @return void
     */
     public function store(CategorieFormRequests $request): CategoriesResources
    {
        $categorie = Categories::create($request->all());
        
        return new CategoriesResources($categorie);
    }


    /**
     * Update
     *
     * @param  mixed $article
     * @param  mixed $request
     *
     * @return ArticleResources
     */
     public function update(Categories $categories, CategorieFormRequests $request): CategoriesResources
    {
        $categories->update($request->all());
        // dd($categories)

        return new CategoriesResources($categories);
    }

 /**
     * Destroy
     *
     * @param  mixed $article
     * @return void
     */
     public function destroy(Categories $categories)
    {
        $categories->delete();

        return response()->json();
    }









}


