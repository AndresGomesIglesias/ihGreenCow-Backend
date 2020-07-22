@extends('layouts.default')
@section('content')
    <div class="container">
        <div class="row my-2">
            <div class="col-lg-8 order-lg-2">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a data-toggle="tab" class="nav-link active">Edit Profile</a>
                    </li>
                </ul>
                <div class="tab-content py-4">
                    <div class="tab-pane active" id="EditProfile">
                        <form action="/profile/{{$user->id}}" enctype="multipart/form-data" method="post" role="form">
                            @csrf
                            @method('PATCH')
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">First name</label>
                                <div class="col-lg-9">
                                    <input id="firstname"
                                           type="text"
                                           class="form-control{{ $errors->has('firstname') ? ' is-invalid' : '' }}"
                                           name="firstname"
                                           value="{{ old('firstname') ?? $user->profile->firstname }}"
                                           autocomplete="firstname" autofocus>

                                    @if ($errors->has('firstname'))
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('firstname') }}</strong>
                                            </span>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                                <div class="col-lg-9">
                                    <input id="lastname"
                                           type="text"
                                           class="form-control{{ $errors->has('lastname') ? ' is-invalid' : '' }}"
                                           name="lastname"
                                           value="{{ old('lastname') ?? $user->profile->lastname }}"
                                           autocomplete="lastname" autofocus>

                                    @if ($errors->has('firstname'))
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('firstname') }}</strong>
                                            </span>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                <div class="col-lg-9">
                                    <input id="email"
                                           type="text"
                                           class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}"
                                           name="email"
                                           value="{{ old('email') ?? $user->email }}"
                                           autocomplete="email" autofocus>

                                    @if ($errors->has('email'))
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('email') }}</strong>
                                            </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Address</label>
                                <div class="col-lg-7">
                                    <input id="adress"
                                           type="text"
                                           class="form-control{{ $errors->has('adress') ? ' is-invalid' : '' }}"
                                           name="adress"
                                           placeholder="Adress"
                                           value="{{ old('adress') ?? $user->profile->adress }}"
                                           autocomplete="adress" autofocus>

                                    @if ($errors->has('adress'))
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('adress') }}</strong>
                                            </span>
                                    @endif
                                </div>
                                <div class="col-lg-2">
                                    <input id="number"
                                           type="text"
                                           class="form-control{{ $errors->has('number') ? ' is-invalid' : '' }}"
                                           name="number"
                                           placeholder="Number"
                                           value="{{ old('number') ?? $user->profile->number }}"
                                           autocomplete="number" autofocus>

                                    @if ($errors->has('state'))
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('state') }}</strong>
                                            </span>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label"></label>
                                <div class="col-lg-3">
                                    <input id="npa"
                                           type="text"
                                           class="form-control{{ $errors->has('npa') ? ' is-invalid' : '' }}"
                                           name="npa"
                                           placeholder="NPA"
                                           value="{{ old('npa') ?? $user->profile->npa }}"
                                           autocomplete="npa" autofocus>

                                    @if ($errors->has('city'))
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('city') }}</strong>
                                            </span>
                                    @endif
                                </div>
                                <div class="col-lg-3">
                                    <input id="city"
                                           type="text"
                                           class="form-control{{ $errors->has('city') ? ' is-invalid' : '' }}"
                                           name="city"
                                           placeholder="City"
                                           value="{{ old('city') ?? $user->profile->state }}"
                                           autocomplete="city" autofocus>

                                    @if ($errors->has('state'))
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('state') }}</strong>
                                            </span>
                                    @endif
                                </div>
                                <div class="col-lg-3">
                                    <input id="state"
                                           type="text"
                                           class="form-control{{ $errors->has('city') ? ' is-invalid' : '' }}"
                                           name="state"
                                           placeholder="State"
                                           value="{{ old('state') ?? $user->profile->state }}"
                                           autocomplete="state" autofocus>

                                    @if ($errors->has('state'))
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('state') }}</strong>
                                            </span>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Username</label>
                                <div class="col-lg-9">
                                    <input id="username"
                                           type="text"
                                           class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }}"
                                           name="username"
                                           value="{{ old('username') ?? $user->username }}"
                                           autocomplete="username" autofocus>

                                    @if ($errors->has('username'))
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('username') }}</strong>
                                            </span>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Password</label>
                                <div class="col-lg-9">
                                    <input id="password"
                                           type="password"
                                           class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                           name="password"
                                           value="{{ old('password') ?? $user->password }}"
                                           autocomplete="password" autofocus>

                                    @if ($errors->has('password'))
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Confirm password</label>
                                <div class="col-lg-9">
                                    <input id="password"
                                           type="password"
                                           class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                           name="password"
                                           value="{{ old('password') ?? $user->password }}"
                                           autocomplete="password" autofocus>

                                    @if ($errors->has('password'))
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                    @endif
                                </div>
                            </div>

                            {{-- <div class="form-group row">
                                 <label class="col-lg-3 col-form-label form-control-label">Password</label>
                                 <div class="col-lg-9">
                                     <input class="form-control" type="password" value="11111122333">
                                 </div>
                             </div>
                             <div class="form-group row">
                                 <label class="col-lg-3 col-form-label form-control-label">Confirm password</label>
                                 <div class="col-lg-9">
                                     <input class="form-control" type="password" value="11111122333">
                                 </div>
                             </div>--}}
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label"></label>
                                <div class="col-lg-9">
                                    <input type="reset" class="btn btn-secondary" value="Cancel">
                                    {{--<input type="button" class="btn btn-primary" value="Save Changes">--}}
                                    <button type="submit" class="btn btn-primary">
                                        Save Changes
                                    </button>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
            <div class="col-lg-4 order-lg-1 text-center">
                <img src="/storage/{{$user->profile->picture}}" class="mx-auto img-fluid img-circle d-block" alt="avatar">
                <label for="picture" class="custom-file">
                    <input type="file" id="picture" class="custom-file-input">
                    <span class="custom-file-control">Change your Profile picture</span>
                </label>
            </div>

            <div class="row">
                <label for="picture" class="col-md-4 col-form-label">Profile Image</label>

                <input type="file" class="form-control-file" id="picture" name="picture">

                @if ($errors->has('picture'))
                    <strong>{{ $errors->first('picture') }}</strong>
                @endif
            </div>
            </form>
        </div>
    </div>
@endsection

