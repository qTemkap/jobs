<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Response;
use Illuminate\Routing\Redirector;

class VerificationController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Email Verification Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling email verification for any
    | user that recently registered with the application. Emails may also
    | be re-sent if the user didn't receive the original email message.
    |
    */

    use VerifiesEmails;

    /**
     * Show the email verification notice.
     *
     * @param Request $request
     * @return Response
     */
    public function show(Request $request)
    {
        $request->user();

        if($request->user()->hasVerifiedEmail()){
            redirect($this->redirectPath());
        } else {
            if(!is_null($request->user()->email)){
                $email = $request->user()->email;
            } else {
                $email = 'youremail@mail.com';
            }

            return view('auth.verify')->with(['email' => $email]);
        }
    }

    /**
     * Where to redirect users after verification.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }


    /**
     * Mark the authenticated user's email address as verified.
     *
     * @param Request $request
     * @return RedirectResponse|Redirector
     * @throws AuthorizationException
     */
    public function verify(Request $request)
    {
        if ($request->route('id') != $request->user()->getKey()) {
            throw new AuthorizationException;
        }

        if ($request->user()->hasVerifiedEmail()) {
            return redirect($request->user()->getRouteToProfileDependingRole());
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return redirect($request->user()->getRouteAfterVerify())->with('verified', true);
    }
}
