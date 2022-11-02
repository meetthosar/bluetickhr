<?php

namespace App\Http\Livewire;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Livewire\Component;

class Web3LoginLogout extends Component
{
    public string $loginText = 'Login';
    public string $loginClass = 'inline-flex items-center px-4 py-2 bg-gray-800 border
    border-transparent rounded-md font-semibold text-xs text-white uppercase
    tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none block
    focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ml-4';


    public string $logoutText = 'Logout';
    public string $logoutClass = '';

    public string|null $participant = null;
    public string|null $participant_1 = null;


    public function render()
    {
        return view('livewire.web3-login-logout');
    }

    public function login($account){

        $address = $account['networkAccount']['addr'];
        $user = User::where('address' , $address )->first();
        if(is_null($user)) {
            $user = User::create([
                'name' => $this->participant.' User',
                'address' => $address,
                'password' => Hash::make(Str::random(10))
            ]);
            $user->assignRole($this->participant_1??$this->participant);
        }
        \session(['web3_account' => $account]);
        Auth::login($user);
        return redirect()->to(route('dashboard'));
    }

    public function logout() {
        Auth::guard('web')->logout();

        \session()->invalidate();

        \session()->regenerateToken();

        return redirect('/');
    }
}
