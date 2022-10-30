<div>
    <section>
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

                        <x-messages :message="$message"/>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <section>
        <section class="text-gray-600 body-font" x-data="getAdmission()">
            <div class="container px-5 mx-auto">
                <div class="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h1 class="text-black text-2xl title-font font-bold mb-2">Complete the Admission Process</h1>
                        <!-- component -->
                        <div class="flex items-center justify-center p-12" wire:poll.10s="checkAdmissionStatus">
                            <!-- Author: FormBold Team -->
                            @if($this->courseApplicant->status)
                                <div class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
                                    <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                    <div>
                                        <span class="font-medium"></span> Admission is completed successfully!
                                    </div>
                                </div>
                            @else
                                <div class="mx-auto w-1/2 max-w-[550px] bg-white">
                                        <div class="mb-5">
                                            <label
                                                for="email"
                                                class="mb-3 block text-base font-medium text-[#07074D]">
                                                Please enter contract information
                                            </label>
                                            <input
                                                type="text"
                                                x-model="contract_info" x-bind:disabled="disable"
                                                placeholder="Contract Information"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280]
                                                outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                        </div>

                                        <div>
                                            <button @click="validateContractInfo"
                                                    type="button" x-bind:disabled="disable"
                                                    class="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition
                                duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline">
                                                Confirm Admission
                                            </button>
                                        </div>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <script>
        // meet@123
        function getAdmission(){
            return {
                contract_info : null,
                applicant : null,
                contract : null,
                universityAddress : '{{$course->university->address}}',
                fee : {{$course->price}},
                tokenId : '{{ $courseApplicant->token_id }}',
                disable : false,
                applyForCourse(studentAddress, universityAddress, courseFee) {
                    return true;
                },
                timesUp() {
                    return true;
                },
                async validateContractInfo(){
                    if(this.contract_info !== null) {
                        this.applicant = await Window.Reach.getDefaultAccount(Window.Reach.parseCurrency(1000));
                        this.contract = this.applicant.contract(Window.REAHCBACKEND, JSON.parse(this.contract_info));
                        this.applicant.tokenAccept(this.tokenId);
                        this.disable = true;
                        this.contract.apis.Student.applyForCourse(this.applicant.getAddress(), this.universityAddress, Window.Reach.parseCurrency(this.fee));
                    }
                }
            }
        }
    </script>
</div>
