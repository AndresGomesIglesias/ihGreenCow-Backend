<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleFormRequests;
use App\Http\Resources\Article\ArticleResources;
use App\Http\Resources\Article\ArticleResourceCollection;
use App\models\Article; 
use Auth;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
       /**  
     * Display a listing of the resource.
     *
     * @return ArticleResourceCollection
     */
     public function index(): ArticleResourceCollection
    {
        return  new ArticleResourceCollection(Article::paginate());
    }


    /**
     * Display the specified resource.
     *
     * @param  Article $article
     * @return ArticleResources
     */
     public function show(Article $article): ArticleResources
    {
        return  new ArticleResources($article);   
    }


 
    /**
     * Store
     *
     * @param  mixed $request
     *
     * @return void
     */
    public function store(ArticleFormRequests $request): ArticleResources
    {
        $article = Article::create($request->all());
        
        return new ArticleResources($article);
    }

   
    /**
     * Update
     *
     * @param  mixed $article
     * @param  mixed $request
     *
     * @return ArticleResources
     */
    public function update(Article $article, ArticleFormRequests $request): ArticleResources
    {
        $article->update($request->all());

        return new ArticleResources($article);
    }

    /**
     * Destroy
     *
     * @param  mixed $article
     * @return void
     */
    public function destroy(Article $article)
    {
        $article->delete();

        return response()->json();
    }

     /**
     * Get User_id of article
     *
     * @param  mixed $article
     * @return void
     */
    public function AuthGetName(Request $request)
    {
    dd(Auth::user()->username);

    }
}
