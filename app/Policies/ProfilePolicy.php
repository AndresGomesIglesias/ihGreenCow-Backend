<?php

namespace App\Policies;

use App\Profile;
use App\models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProfilePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any profiles.
     *
     * @param  \App\models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the profile.
     *
     * @param  \App\models\User  $user
     * @param  \App\Profile  $profile
     * @return mixed
     */
    public function view(User $user, Profile $profile)
    {
        //
    }

    /**
     * Determine whether the user can create profiles.
     *
     * @param  \App\models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the profile.
     *
     * @param  \App\models\User  $user
     * @param  \App\Profile  $profile
     * @return mixed
     */
    public function update(User $user, Profile $profile)
    {
       // return $user->id == $profile->user_id;
    }

    /**
     * Determine whether the user can delete the profile.
     *
     * @param  \App\models\User  $user
     * @param  \App\Profile  $profile
     * @return mixed
     */
    public function delete(User $user, Profile $profile)
    {
        //
    }

    /**
     * Determine whether the user can restore the profile.
     *
     * @param  \App\models\User  $user
     * @param  \App\Profile  $profile
     * @return mixed
     */
    public function restore(User $user, Profile $profile)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the profile.
     *
     * @param  \App\models\User  $user
     * @param  \App\Profile  $profile
     * @return mixed
     */
    public function forceDelete(User $user, Profile $profile)
    {
        //
    }
}
