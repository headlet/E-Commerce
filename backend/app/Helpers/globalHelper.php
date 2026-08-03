<?php

use Illuminate\Support\Str;

if (! function_exists('generateSlug')) {

    function generateSlug(string $text): string
    {
        return Str::slug($text);
    }
}
