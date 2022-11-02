<div x-data="loginLogout()">
    <button @click="login()" type="button"
            class="{{ $loginClass }}">
        {{$loginText}}
    </button>
<script>
    // document.addEventListener('livewire:load',function () {
        function loginLogout() {
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
