@extends('layouts.default')





@section('content')

  @if ($articles->isEmpty())
      <p>Il n'y pas d'article</p>
  @else
    @foreach($articles as $article)
    <div class="card col-md-3" style="width: 18rem; margin-left: 10px; margin-top: 10px; padding: 10px;">
    <img style="background: grey; width: 100%; height: 170px;" src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-text">{{ $article->color }}</h5>
          <p class="card-text">{{ $article->state }}</p>
          <p class="card-text">{{ $article->location }}</p>
          <a href=" {{ route('articles.show',  $article) }}">voir</a>
          <a href=" {{ route('articles.edit',  $article) }}">modifier</a>
          <form action="{{ route('articles.destroy', $article) }}" method="POST">

              {{ csrf_field() }} 
              {{ method_field('DELETE') }}

              <input type="submit" value="supprimer">
            </form>
        </div>
      </div>
      @endforeach
    @endif

@stop
 




