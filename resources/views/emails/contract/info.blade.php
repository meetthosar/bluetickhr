<x-mail::message>
Dear {{ $courseApplicant->student->name }},

Admission process has been started.

    Use this code to join the Admission process :

    Contract Info : {{ $contractInfo }}

    Token ID : {{ $token }}

<x-mail::button :url="route('apply',['courseApplicant' => $courseApplicant->id])">
Click here to join
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
