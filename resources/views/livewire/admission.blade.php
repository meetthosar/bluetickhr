<div class="bg-gray-100">

    <section  x-data="admissionProcess" wire:ignore.self>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-12 mx-auto">
                <div class="p-5 bg-white flex items-center mx-auto border-b border-gray-200 rounded-lg sm:flex-row flex-col">

                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h1 class="text-black text-2xl title-font font-bold mb-2">{{ $course->name }}</h1>
                        <div class="py-4">
                            @php $skills = $skillCollection->whereIn('id',array_keys($course->skills))->pluck('name')->toArray() @endphp
                            @foreach($skills as $skill)
                            <div class=" inline-block mr-2" >
                                <div class="flex  pr-2 h-full items-center">
                                    <svg class="text-yellow-500 w-6 h-6 mr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M9 12l2 2l4 -4" />
                                    </svg>
                                    <p class="title-font font-medium">{{ $skill }}</p>
                                </div>
                            </div>
                            @endforeach

                        </div>
                        <div class="md:flex font-bold text-gray-800">
                            <div class="w-full md:w-1/2 flex space-x-3">
                                <div class="w-1/2">
                                    <h2 class="text-gray-500">Seats</h2>
                                    <p>{{ $course->seats }}</p>
                                </div>
                                <div class="w-1/2">
                                    <h2 class="text-gray-500">Duration</h2>
                                    <p>{{ $course->duration }} Months</p>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 flex space-x-3">
                                <div class="w-1/2">
                                    <h2 class="text-gray-500">Price </h2>
                                    <div class="w-full md:w-1/2 flex">
                                        <div class="w-1/2"><img src="{{ asset('assets/images/algorand_logo_mark_black.png') }}" width="30" height="30"></div>
                                        <div class="w-1/2">{{ $course->price }} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="startProcess"
                            type="button"
                            class="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition
                            duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline">
                            Start Admission
                        </button>
                        <x-messages :message="$message"/>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <section>
        <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto">
                <div class="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h1 class="text-black text-2xl title-font font-bold mb-2">Applicants</h1>

                        <div class="flex flex-col">
                            <div class="overflow-x-auto shadow-md sm:rounded-lg">
                                <div class="inline-block min-w-full align-middle">
                                    <div class="overflow-hidden ">
                                        <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                            <thead class="bg-gray-100 dark:bg-gray-700">
                                            <tr>
                                                <x-table-th :text="'Student'"/>
                                                <x-table-th :text="'Address'"/>
                                                <x-table-th :text="'Status'"/>

                                            </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                                            @forelse($applicants as $applicant)
                                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <x-table-td :text="$applicant->student->name"/>
                                                    <x-table-td :text="$applicant->student->address"/>
                                                    <x-table-td :text="$course->status ? 'Confirmed' : 'Not Confirmed'"/>

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
    <script>
        // window.addEventListener('notifify-applicants',event => {
        //     this.showMessage =false
        //     this.message = event.detail.message
        //     console.log(this.message)
        // })
        // window.addEventListener('livewire:load', function () {

        function admissionProcess(){
            return {
                processing : false,
                deployer : null,
                contract : null,
                contractInfo : null,
                university : '{{ \Illuminate\Support\Facades\Auth::user()->address }}',
                price : {{ $course->price }},
                tokenId : null,
                message : null,
                showMessage : true,
                tokenName : '{{ $course->name }}',
                tokenSymbol : '{{ \Illuminate\Support\Str::initials($course->name) }}',
                getAmount() {
                    return 1;
                },
                numberOfStudents : {{ $applicants->count() }},
                deadline : 10000,
                startAdmissions() {
                    return true;
                },
                getCourseNFT() {
                    return this.tokenId;
                },
                admissionCompleted(student){
                  @this.notifyAdmissionCompletion(student);
                },
                notifyStudent(flag){
                    if(flag) {
                        console.log('Success : Notify student');
                    }
                    else console.log('Error : Notify student');
                },
                async startProcess(){
                    this.deployer = await Window.Reach.getDefaultAccount(Window.Reach.parseCurrency(1000));
                    this.contract = await this.deployer.contract(Window.REAHCBACKEND);
                    const token = await Window.Reach.launchToken(this.deployer, this.tokenName, this.tokenSymbol, {supply : this.numberOfStudents});
                    this.tokenId =  token.id;
                    console.log(this.tokenId);

                    Window.REAHCBACKEND.University(this.contract, Object({
                        university : this.university,
                        price : this.price,
                        getAmount : this.getAmount,
                        numberOfStudents : this.numberOfStudents,
                        deadline : this.deadline,
                        startAdmissions : this.startAdmissions,
                        courseNFT : this.tokenId,
                        notifyStudent : this.notifyStudent,
                        admissionCompleted : this.admissionCompleted
                    }));
                    this.contractInfo = JSON.stringify( await this.contract.getInfo(), null, 2);
                    @this.startProcess(this.contractInfo);
                }
            }
        }

        // })
    </script>
</div>
