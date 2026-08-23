<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
</head>

<body>

    <h1>
        Welcome {{ $user->first_name }}!
    </h1>

    <p>
        Your account has been successfully created.
    </p>

    <p>
        Thank you for joining {{ config('app.name') }}.
    </p>

</body>
</html>