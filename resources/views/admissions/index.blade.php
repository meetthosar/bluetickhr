<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Admissions') }}
        </h2>
    </x-slot>

    @livewire('admission',['course' => $course])
</x-app-layout>
