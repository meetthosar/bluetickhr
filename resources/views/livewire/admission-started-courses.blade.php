<div>
    <section>
        <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto">
                <div class="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h1 class="text-black text-2xl title-font font-bold mb-2">Applied Courses</h1>

                        <div class="flex flex-col">
                            <div class="overflow-x-auto shadow-md sm:rounded-lg">
                                <div class="inline-block min-w-full align-middle">
                                    <div class="overflow-hidden ">
                                        <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                            <thead class="bg-gray-100 dark:bg-gray-700">
                                            <tr>
                                                <x-table-th :text="'Courses'"/>
                                                <x-table-th :text="'Applied Date'"/>
                                                <x-table-th :text="'Status'"/>

                                            </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                                            @forelse($applications as $application)
                                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <x-table-td :text="$application->course->name"/>
                                                    <x-table-td :text="$application->created_at->format('M d Y')"/>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        @if($application->status)
                                                            Confirmed
                                                        @else
                                                            @if($application->course->admission_started)
                                                                <a href="{{ route('apply',['courseApplicant' => $application->id]) }}" class="text-blue-600 dark:text-blue-500 hover:underline">Confirm Admission</a>
                                                            @else
                                                            Admission not started
                                                            @endif
                                                        @endif
                                                    </td>
                                                </tr>
                                            @empty
                                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" colspan="3">No courses</td>
                                                </tr>
                                            @endforelse
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</div>
