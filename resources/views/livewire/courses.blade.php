<div>
    <div class="p-6 sm:px-20 bg-white border-b border-gray-200">

        <div class="mx-auto">
            <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                    <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">

                    </div>
                    @include('courses.form')
                </div>
            </div>

            <div class="flex flex-col">
                <div class="overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="inline-block min-w-full align-middle">
                        <div class="overflow-hidden ">
                            <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <x-table-th :text="'Name'"/>
                                    <x-table-th :text="'Duration'"/>
                                    <x-table-th :text="'Seats'"/>
                                    <x-table-th :text="'Price'"/>
                                    <x-table-th :text="'Skills'"/>
                                    <x-table-th :text="'Application Opened?'"/>
                                    <x-table-th :text="'Admission Started?'"/>

                                    <th scope="col" class="p-4">
                                        <span class="sr-only">Edit</span>
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                                    @forelse($courses as $course)
                                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <x-table-td :text="$course->name"/>
                                            <x-table-td :text="$course->duration"/>
                                            <x-table-td :text="$course->seats"/>
                                            <x-table-td :text="$course->price"/>
                                            <x-table-td :text="implode(',',array_keys($course->skills))"/>
                                            <x-table-td :text="$course->open ? 'Yes' : 'No'"/>
                                            <x-table-td :text="$course->admission_started ? 'Yes' : 'No'"/>

                                            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                    @empty
                                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" colspan="6">No courses</td>
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
