<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    @can('apply course')
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="py-12 bg-white overflow-hidden shadow-xl sm:rounded-lg">
                @livewire('admission-started-courses')
            </div>
        </div>
    </div>
    @endcan

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="py-12 bg-white overflow-hidden shadow-xl sm:rounded-lg">
                @livewire('open-courses')
            </div>
        </div>
    </div>
</x-app-layout>
