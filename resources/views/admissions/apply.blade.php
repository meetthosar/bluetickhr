<x-app-layout>
    @php $course = $courseApplicant->course;
    $student = $courseApplicant->student@endphp
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Apply to') }} {{ $course->name }}
        </h2>
    </x-slot>

    @livewire('apply',['course' => $course, 'student' => $student, 'courseApplicant' => $courseApplicant] )
</x-app-layout>
