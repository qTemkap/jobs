<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use App\User;
use App\OfferCategory as OfferCategoryModel;

class OfferCategory extends Mailable
{
    public $offerCategory;
    public $user;

    public function __construct(OfferCategoryModel $offerCategory, $user)
    {
        $this->offerCategory = $offerCategory;
        $this->user = $user;
    }

    public function getFromAddress():string
    {
        return config('mail.send_offer_category_from', 'info.edhh@gmail.com');
    }

    public function getFromName():string
    {
        return config('app.url', 'EDHunter');
    }

    public function getSubject():string
    {
        return 'Запрос на добавление категории: (ID: '.$this->offerCategory->id.')';
    }


    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($this->getFromAddress(), $this->getFromName())
            ->subject($this->getSubject())
            ->view('email_templates.offer_category')
            ->with([
                'id'       => $this->offerCategory->id,
                'email'    => $this->user->email ?? null,
                'category' => $this->offerCategory->getAttribute('category'),
                'comment'  => $this->offerCategory->getAttribute('comment'),
            ]);
    }
}
