@extends('layouts.default')



@section('content')
    <div class="container">
        <div class="row my-2">
            <div class="col-lg-8 order-lg-2">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a data-toggle="tab" class="nav-link active">Profile</a>
                    </li>
                </ul>
                <div class="tab-content py-4">
                    {{--@can('update', $user->profile)--}}
                    <div class="float-right">
                        <a href="/profile/{{$user->id}}/edit" class="btn btn-xm btn-primary">Edit Profile</a>
                    </div>
                    {{--@endcan--}}
                    <div class="tab-pane active" id="profile">
                        <h1 class="mb-3">{{$user->username}}</h1>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>About</h4>
                                <p>
                                   {{$user->profile->about}}
                                </p>
                                <h4>Hobbies</h4>
                                <p>
                                    {{$user->profile->hobbies}}
                                </p>
                                <h4>E-mail</h4>
                                <p>
                                    {{$user->email}}
                                </p>
                            </div>
                            <div class="col-md-6 float-right">
                                <h3>{{$user->profile->firstname}} {{$user->profile->lastname}}</h3>
                                <h5>{{$user->profile->adress}} {{$user->profile->number}}</h5>
                                <h5>{{$user->profile->npa}} {{$user->profile->city}} {{$user->profile->state}}</h5>

                            </div>
                            <div class="col-md-6">

                            </div>
                            <div class="col-md-12">
                                <h4>Skills</h4>
                                <a href="#" class="badge badge-dark badge-pill">html5</a>
                                <a href="#" class="badge badge-dark badge-pill">react</a>
                                <a href="#" class="badge badge-dark badge-pill">codeply</a>
                                <a href="#" class="badge badge-dark badge-pill">angularjs</a>
                                <a href="#" class="badge badge-dark badge-pill">css3</a>
                                <a href="#" class="badge badge-dark badge-pill">jquery</a>
                                <a href="#" class="badge badge-dark badge-pill">bootstrap</a>
                                <a href="#" class="badge badge-dark badge-pill">responsive-design</a>
                                <hr>
                                <span class="badge badge-primary"><i class="fa fa-user"></i> 900 Followers</span>
                                <span class="badge badge-success"><i class="fa fa-cog"></i> 43 Forks</span>
                                <span class="badge badge-danger"><i class="fa fa-eye"></i> 245 Views</span>
                            </div>
                            <div class="col-md-12">
                                <h5 class="mt-2"><span class="fa fa-clock-o ion-clock float-right"></span> Recent Activity</h5>
                                <table class="table table-sm table-hover table-striped">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!--/row-->
                    </div>
                </div>
            </div>
            <div class="col-lg-4 order-lg-1 text-center">
                <img src="/storage/{{$user->profile->picture}}" class="mx-auto img-fluid img-circle d-block" alt="avatar">

            </div>
        </div>
    </div>
@endsection

