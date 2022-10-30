<x-guest-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Admissions') }}
        </h2>
    </x-slot>

    @livewire('resume',['student' => $user])
</x-guest-layout>
