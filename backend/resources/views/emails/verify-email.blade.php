<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Verify your email</title>
</head>

<body>

    <h1>
        Verify your email
    </h1>

    <p>
        Hello {{ $user->first_name }},
    </p>

    <p>
        Thank you for registering.
        Please verify your email address by clicking the button below.
    </p>

    <p>
        <a href="{{ $url }}">
            Verify Email
        </a>
    </p>

    <p>
        This verification link will expire after 60 minutes.
    </p>

    <p>
        If you did not create this account, you can ignore this email.
    </p>

</body>
</html>