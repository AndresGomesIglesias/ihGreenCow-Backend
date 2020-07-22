@extends('layouts.default')





@section('content')
<form action="{{ route('articles.update',  $article) }}" method="POST"style="width: 100%;">

    {{ csrf_field() }}  
    {{ method_field('PUT') }}

    @include('articles._form', ['submitButtonText' => 'éditer un article'])

</form>
@endsection
 
