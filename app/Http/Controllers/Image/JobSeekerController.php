<?php

namespace App\Http\Controllers\Image;

use App\ImageModel;
use App\JobSeeker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Cache;
use Image;

class JobSeekerController extends Controller
{

    protected function getImageModel($type, $model_id){
        return ImageModel::where([
            ['model_type', '=', JobSeeker::class],
            ['model_id', '=', $model_id],
            ['type', '=', $type],
        ])->first();
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data, $id
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validateModel(array $data)
    {
        return Validator::make($data, [
            'avatar' => 'image|nullable|mimes:jpeg,png,jpg',
        ]);
    }

    public function delete(Request $request){
        $user = Auth::user();
        $jobSeeker = $user->jobSeekerProfile;

        $imagesToNeedDelete = [ImageModel::TYPE_JOB_SEEKER_AVATAR_THUMB, ImageModel::TYPE_JOB_SEEKER_AVATAR];

        foreach ($imagesToNeedDelete as $type){

            $existingAvatar = $this->getImageModel($type, $jobSeeker->id); //Находим аватарку в базе з с переданым типом

           if(!is_null($existingAvatar)){
               $removalPath = $existingAvatar->getStoragePath(); // Save path for deletion if you have to delete
               Storage::delete($removalPath);
               $existingAvatar->delete();
           }

            //We remove the all old paths to the avatars from the cache
            $cacheKey =  $jobSeeker->getKeyForCachingAvatars($type);
            Cache::forget($cacheKey);
            //And we get a new avatar which is added to the cache
            // get unique key for user avatar thumbnail
            $cacheKey = $user->getKeyForCachingAvatarThumb();
            Cache::forget($cacheKey);
        }

        return response()->json(['status' => 'success'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function upload(Request $request)
    {
        $this->validateModel($request->all())->validate();

        $user = Auth::user();
        $user_id = $user->id;
        $jobSeeker = $user->jobSeekerProfile;

        $imagesToNeedCreate = [ImageModel::TYPE_JOB_SEEKER_AVATAR_THUMB, ImageModel::TYPE_JOB_SEEKER_AVATAR];

        foreach ($imagesToNeedCreate as $type){

            $existingAvatar = $this->getImageModel($type, $jobSeeker->id); //Находим аватарку в базе з с переданым типом

            $isNewAvatar = is_null($existingAvatar);

            // Если аватар уже сущевствует, то удаляим
            if(!$isNewAvatar) {
                $removalPath = $existingAvatar->getStoragePath(); // Save path for deletion if you have to delete
                Storage::delete($removalPath);
            }

            $avatar = ($isNewAvatar) ? $avatar = new ImageModel() : $existingAvatar;

            $avatar->loadFileToModel($request->file('avatar'), $user_id, $jobSeeker->id, $type);

            $directoryForThisFile = $avatar->getStorageDirectory();

            if(!Storage::exists($directoryForThisFile)) {
                Storage::makeDirectory($directoryForThisFile); //creates directory
            }

            $image = Image::make($request->file('avatar'));

            $image->fit($avatar->getWidth(), $avatar->getHeight(), function ($constraint) {
                $constraint->aspectRatio();
            });

            $recordPath = $avatar->createStoragePath();
            if(Storage::put($recordPath, (string) $image->encode())){
                $avatar->save();
            }

        }

        foreach ($imagesToNeedCreate as $type) {
            //We remove the all old paths to the avatars from the cache
            $cacheKey =  $jobSeeker->getKeyForCachingAvatars($type);
            Cache::forget($cacheKey);
            //And we get a new avatar which is added to the cache
        }

        $user->forgotUserAvatarThumbFromCache();

        $avatar = $jobSeeker->avatar();
        $avatarThumb = $jobSeeker->avatar(ImageModel::TYPE_JOB_SEEKER_AVATAR_THUMB);

        return response()->json([
            'data' => [
                'avatar' => $avatar,
                'avatar_thumb' => $avatarThumb,
            ]
        ], 200)->withHeaders([
            'X-redirect' => 'User updated',
        ]);
    }
}
