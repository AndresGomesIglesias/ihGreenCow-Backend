
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="Gomes/Panchaud" content="">
    <meta name="generator" content="">
    <title>Home page</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/starter-template/">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

      
    <!-- Scripts -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.bundle.min.js"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

</head>

<style>
    .container{
    }
</style>




<body>

{{-- @include('includes.default_nav') --}}

    <main style="margin-left: 0px;" role="main" class="">
            @if ((session()->has('notification.message')))
            <div style=""class="col-lg-12 alert alert-{{ session('notification.type') }}">
                {{ session('notification.message') }}
            </div>
            @endif
            {{-- React include --}}
            <div id="root" style="padding-left: 0px; padding-right: 0px;" >
                {{ csrf_field() }}  
            </div>
    </main>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script>window.jQuery || document.write('<script src="/docs/4.3/assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
    <script  src="{{ asset('js/app.js') }}"></script>

</body>

</html>
