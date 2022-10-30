<x-mail::message>
Dear {{ $student->name }},

Admission process has been started.

    Use this code to join the Admission process :
    {{ $contractInfo }}

<x-mail::button :url="route('login')">
Click here to join
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
