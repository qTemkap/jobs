<?php

namespace App\Http\Controllers\Image;

use App\ImageModel;
use App\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Cache;
use Image;

class CompanyController extends Controller
{

    protected function getImageModel($type, $model_id){
        return ImageModel::where([
            ['model_type', '=', Company::class],
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
            'image'       => 'image|nullable|mimes:jpeg,png,jpg',
        ]);
    }

    public function delete(Request $request){

        $user = Auth::user();
        $company = Auth::user()->employer->company()->firstOrFail();
        $model_id = $company->id;

        $imagesToNeedDelete = [ImageModel::TYPE_COMPANY_LOGO_THUMB, ImageModel::TYPE_COMPANY_LOGO, ImageModel::TYPE_COMPANY_LOGO_LARGE];

        foreach ($imagesToNeedDelete as $type){

            $existingAvatar = $this->getImageModel($type, $model_id); //Находим аватарку в базе з с переданым типом

            if(!is_null($existingAvatar)){
                $removalPath = $existingAvatar->getStoragePath(); // Save path for deletion if you have to delete
                Storage::delete($removalPath);
                $existingAvatar->delete();
            }

            $cacheKey = $company->getKeyForCachingLogos($type);
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

        $user_id =  Auth::user()->id;
        $company = Auth::user()->employer->company()->firstOrFail();
        $model_id = $company->id;

        $imagesToNeedCreate = [ImageModel::TYPE_COMPANY_LOGO_THUMB, ImageModel::TYPE_COMPANY_LOGO, ImageModel::TYPE_COMPANY_LOGO_LARGE];

        foreach ($imagesToNeedCreate as $type){

            $existingLogo = $this->getImageModel($type, $model_id); //Находим аватарку в базе з с переданым типом

            $isNewLogo = is_null($existingLogo);

            // Если аватар уже сущевствует, то удаляим
            if(!$isNewLogo) {
                $removalPath = $existingLogo->getStoragePath(); // Save path for deletion if you have to delete
                Storage::delete($removalPath);
            }

            $logo = ($isNewLogo) ? $avatar = new ImageModel() : $existingLogo;

            $logo->loadFileToModel($request->file('image'), $user_id, $model_id, $type);

            $directoryForThisFile = $logo->getStorageDirectory();

            if(!Storage::exists($directoryForThisFile)) {
                Storage::makeDirectory($directoryForThisFile); //creates directory
            }

            $image = Image::make($request->file('image'));

            $image->fit($logo->getWidth(), $logo->getHeight(), function ($constraint) {
                $constraint->aspectRatio();
            });

            $recordPath = $logo->createStoragePath();
            if(Storage::put($recordPath, (string) $image->encode())){
                $logo->save();
            }

        }

        foreach ($imagesToNeedCreate as $type) {
            //We remove the all old paths to the avatars from the cache
            $cacheKey = $company->getKeyForCachingLogos($type);
            Cache::forget($cacheKey);
            //And we get a new avatar which is added to the cache
        }
        $logo = $company->logo(ImageModel::TYPE_COMPANY_LOGO_LARGE);

        return response()->json([
            'data' => $logo
        ], 200)->withHeaders([
            'X-redirect' => 'User updated',
        ]);
    }
}
