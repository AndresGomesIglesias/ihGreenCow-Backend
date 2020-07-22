<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleFormRequests extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
            return [
                'title'         => 'required', 
                'brand'         => 'required',
                'color'         => 'required',
                'madeIn'        => 'required',
                'location'      => 'required',
                'category_id'   => 'required',
                'vote'          => 'required',
                'price'         => 'required',
                'slug'          => 'required',
        ];
    }
}
    
