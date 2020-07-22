@extends('layouts.default')





@section('content')

     <form action="{{ route('articles.store') }}" method="POST" style="width: 100%;">

          {{ csrf_field() }}  

          @include('articles._form', ['submitButtonText' => 'créer un article'])

     </form>

@endsection
 
