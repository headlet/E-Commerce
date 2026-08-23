<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use App\Mail\VerifyEmailMail;
use App\Mail\WelcomeMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendUserRegistrationEmails implements ShouldQueue
{
    public int $tries = 3;

    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }


    public function handle(UserRegistered $event): void
    {
        $user = $event->user;

        Mail::to($user->email)
            ->send(new WelcomeMail($user));

        Mail::to($user->email)
            ->send(
                new VerifyEmailMail(
                    $user,
                    $event->verificationToken
                )
            );
    }
}
