<div x-data="loginLogout()" wire:key="{{ $participant }}">
    <button @click="login()" type="button"
            class="{{ $loginClass }}">
        {{$loginText}}
    </button>
<script>
    // document.addEventListener('livewire:load',function () {
        function loginLogout() {
            console.log(111);
            return {
                account : null,
                login : async () => {
                    this.account = await Window.Reach.getDefaultAccount();
                    @this.login(this.account);
                },
                logout : () => {
                    // Window.Reach.disconnect();
                @this.logout();
                }
            }
        }

    // })
</script>
</div>
