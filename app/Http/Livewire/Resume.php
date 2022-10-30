<?php

namespace App\Http\Livewire;

use App\Models\CourseApplicant;
use App\Models\User;
use Livewire\Component;
use Rootsoft\Algorand\Algorand;
use Rootsoft\Algorand\Clients\AlgodClient;
use Rootsoft\Algorand\Clients\IndexerClient;
use Rootsoft\Algorand\Clients\KmdClient;
use Rootsoft\Algorand\Clients\PureStake;
use Rootsoft\Algorand\Facades\AlgorandFacade;

class Resume extends Component
{
    public User $student;
    public bool $verified = false;
    public function render()
    {
        $courses = CourseApplicant::where('student_id', $this->student->id)->where('status', 1)->with('course')->get();
        return view('livewire.resume', compact('courses'));
    }

    public function verify($applicationId){
        $algodClient = new AlgodClient(PureStake::TESTNET_ALGOD_API_URL, 'odPb4TLQbm6NEhEp4ofDa8KmdSpeyiZn30rpiUYL', 'x-api-key');
        $indexerClient = new IndexerClient(PureStake::TESTNET_INDEXER_API_URL, 'odPb4TLQbm6NEhEp4ofDa8KmdSpeyiZn30rpiUYL', PureStake::API_TOKEN_HEADER);
        $kmdClient = new KmdClient('127.0.0.1', 'odPb4TLQbm6NEhEp4ofDa8KmdSpeyiZn30rpiUYL');
        $algorand = new Algorand($algodClient, $indexerClient, $kmdClient);

        $course = CourseApplicant::find($applicationId);

//dd($course->token_id, $this->student->address);
        $check = $algorand->indexer()
            ->accounts()
            ->whereAssetId($course->token_id)
//            ->whereAuthAddress($this->student->address)
            ->limit(5)
            ->search();
        $this->verified = ($check->accounts[0]->address == $this->student->address);
    }
}
