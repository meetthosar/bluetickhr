<!-- component -->
<!-- Code block starts -->
<dh-component wire:ignore.self>
{{--{{ dd($errors) }}--}}
    <div class="py-8 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">

                <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"> Course Details</h1>
                <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Name</label>
                <input wire:model.defer="name" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Computer Engineering First Year" />
                @error('name') <p class="text-sm text-red-600 dark:text-red-500">{{ $message }}</p> @enderror

                <label for="email2" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Duration (Months)</label>
                <div class="relative mb-5 mt-2">
                    <input wire:model.defer="duration" type="number" class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="12" />
                    @error('duration') <p class="text-sm text-red-600 dark:text-red-500">{{ $message }}</p> @enderror
                </div>
                <label for="email2" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Seats</label>
                <div class="relative mb-5 mt-2">
                    <input wire:model.defer="seats" type="number" class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="50" />
                    @error('seats') <p class="text-sm text-red-600 dark:text-red-500">{{ $message }}</p> @enderror
                </div>
                <label for="expiry" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Price</label>
                <div class="relative mb-5 mt-2">
                    <div class="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                        <img src="{{ asset('assets/images/algorand_logo_mark_black.png') }}" width="30" height="30">
                    </div>
                    <input wire:model.defer="price" type="text" class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="10000" />
                    @error('price') <p class="text-sm text-red-600 dark:text-red-500">{{ $message }}</p> @enderror
                </div>
                <label for="cvc" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Skills</label>
                <div class="relative mb-5 mt-2">

                    @foreach($skillsCollection as $skill)
                        <label for="remember" class="">
                            <input type="checkbox"  wire:model.defer="skills.{{$skill->id}}" class="w-4 h-4 border-slate-200 focus:bg-indigo-600">
                            {{ $skill->name }}
                        </label>
                    @endforeach
                        @error('skills') <p class="text-sm text-red-600 dark:text-red-500">{{ $message }}</p> @enderror
                </div>
                <div class="flex items-center justify-start w-full">
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm" wire:click="store">Submit</button>
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onclick="modalHandler()">Cancel</button>
                </div>
                <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onclick="modalHandler()" aria-label="close modal" role="button">
                    <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="w-full flex justify-center" id="button">
        <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" onclick="modalHandler(true)">Add New Course</button>
    </div>
    <script>
        let modal = document.getElementById("modal");
        function modalHandler(val) {
            if (val) {
                fadeIn(modal);
            } else {
                fadeOut(modal);
            }
        }
        function fadeOut(el) {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= 0.1) < 0) {
                    el.style.display = "none";
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        }
        function fadeIn(el, display) {
            el.style.opacity = 0;
            el.style.display = display || "flex";
            (function fade() {
                let val = parseFloat(el.style.opacity);
                if (!((val += 0.2) > 1)) {
                    el.style.opacity = val;
                    requestAnimationFrame(fade);
                }
            })();
        }
        modalHandler()
    </script>

</dh-component>
<!-- Code block ends -->
