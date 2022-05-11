<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use App\Question as QuestionModel;

class Question extends Mailable
{
    public $question;

    public function __construct(QuestionModel $question)
    {
        $this->question = $question;
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
        return 'Поступил новый вопрос: (ID: '.$this->question->id.')';
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
            ->view('email_templates.question')
            ->with([
                'id'       => $this->question->id,
                'email' => $this->question->getAttribute('email'),
                'comment'  => $this->question->getAttribute('comment'),
            ]);
    }
}
