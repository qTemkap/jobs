<?php
namespace App\Traits;

use App\ImageModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

trait AttachFile
{
    public function attachFile($model, Request $request, $key, $name)
    {
        $image = $key;

        if (!is_array($image)) {
            $temp = [];
            $temp[] = $image;
            $image = $temp;
        }

        if (!empty($image)) {
            foreach ($image as $value) {
                if (!empty($value)) {
                    $value->move(public_path().'/media/files/', $model->id . '.0.' . $value->getClientOriginalName());
                    $model->addMedia(public_path().'/media/files/'. $model->id . '.0.' . $value->getClientOriginalName())->toMediaCollection($name);
                }
            }
        }
    }
}
