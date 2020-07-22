<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProfileResouceCollection;
use App\Http\Resources\ProfileResource;
use App\models\Profile;
use App\models\User;
use App\Post;
use Faker\Provider\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ProfilesController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return ProfileResouceCollection
     */
    public function index (): ProfileResouceCollection
    {

        return new ProfileResouceCollection(Profile::paginate());
        //return view('profiles.index', compact('user'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param User $user
     * @return ProfileResource
     */
    public function store(Request $request, User $user)
    {
        $request->validate([
           'user_id'=>'', //$user->id,
            'firstname' => '',
            'lastname'=> '',
            'adress'=> '',
            'number'=> '',
            'npa'=> '',
            'city'=> '',
            'state'=> '',
            'picture'=> 'image',

        ]);

        $profile = Profile::create($request->all());

        return new ProfileResource($profile);

    }

    /**
     * Display the specified resource.
     *
     * @param  Profile $profile
     * @return ProfileResource
     */
    public function show(Profile $profile): ProfileResource
    {
        return new ProfileResource($profile);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function edit(User $user)
    {

       // $this->authorize('update', $user->profile);
        return view('profiles.edit', compact('user'));

       /* $profile = Profile::find($id);
        return view('profile.edit')->with('profile', $profile);
       $this->authorize('update', $user->profile);*/
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Profile $profile
     * @return ProfileResource
     */
    public function update(Profile $profile, Request $request, $id):ProfileResource
    {
  /*     $this->validate($request, [
            'firstname' => '',
            'lastname'=> '',
            'adress'=> '',
            'number'=> '',
            'npa'=> '',
            'city'=> '',
            'state'=> '',
            'picture'=> 'image',
        ]);

        $featured = $request->picture;
        $featured_new_name = 'asd.jpg';

        $featured->move('uploads/profiles', $featured_new_name);

       dd($request->all());
      if(request('picture')){
          $imagePath = request('')->store ('profile', 'publics');


          $image = Image::make(public_path("storage/{imagePath}"))->fit(150,150);
          $image-> save();
      }

      Profile::create(['user_id'=> $request->user_id, 'firstname' => $request->firstname, 'lastname' => $request->lastname]);
        $request = request()->validate([
            'username'=> 'username',
      $this->validate($request, [
          'firstname' => '',
          'lastname'=> '',
      ]);
        ]);
        $user->profile->update($request);
        $user->update($udata);

        $user->profile->update(array_merge($data,
        ['picture'=> $imagePath]
        ));

        $post = Profile::create([
            'firstname'=> $request->firstname,
            'lastname'=> $request->lastname,
            'adress'=> $request->lastname,
            'number'=> $request->lastname,
            'npa'=> $request->lastname,
            'city'=> $request->lastname,
            'state'=> $request->lastname,
            'picture'=> 'uploads/profiles/'. $featured_new_name,

        ]);


        return redirect("/profile/{$user->id}");*/

        $fileName = "user.jpg";
        $path = $request->file('photo')->move(public_path("/"), $fileName);
        $photoURL = url('/'.$fileName);
        return response()->json(['url'=> $photoURL],200);

/*         $data = $profile->update([
             'firstname' => 'aaaaa',
             'lastname'=> 'ddddddd',
             'adress'=> 'aaaaddddd',
             'number'=> '',
             'npa'=> '',
             'city'=> '',
             'state'=> '',
             'picture'=> 'http://google.com',
         ]);

        $featured = $request->picture;
         dd($data);


        return new ProfileResource($profile);*/
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Profile $profile, Request $request)
    {
         //$user = User::deleted());
         $profile->delete();
         //$user->delete();

        return response()->json();
    }

    public function save (Request $request){
        $fileName = "user.jpg";
        $request->file('photo')->move(public_path("/"), $fileName);
        $photoURL = url('/'.$fileName);

        return response()->json(['url'=> $photoURL],200);

    }

}
