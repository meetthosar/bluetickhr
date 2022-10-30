<?php

namespace App\Http\Livewire;

use App\Mail\ContractInfo;
use App\Models\Course;
use App\Models\CourseApplicant;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use JetBrains\PhpStorm\NoReturn;
use Livewire\Component;

class Admission extends Component
{
    public Course $course;
    public $account;
    public $message;
    public bool $startedAdmission = false;

    public function mount(){
        $this->account = session('web3_account');
    }

    public function render()
    {
        $skillCollection = Skill::all();
        $applicants = CourseApplicant::where('course_id', $this->course->id)->with('student')->get();

        return view('livewire.admission', compact('skillCollection', 'applicants' ));
    }

    #[NoReturn]
    public function startProcess($contractInfo, $token)
    {
        $this->course->update(['admission_started' => 1]);
        $this->updateToken($token);

        $applicants = CourseApplicant::where('course_id', $this->course->id)->with('student')->get();
        foreach ($applicants as $applicant)
        {
            Mail::to($applicant->student->email)->send(new ContractInfo($contractInfo, $applicant, $token));
        }
        $this->dispatchBrowserEvent('notifify-applicants', ['message' => 'Applicants have been informed']);
        $this->message = 'Applicants have been informed';
        $this->startedAdmission = true;
    }

    public function notifyAdmissionCompletion($studentAddress)
    {
       $student = User::where('address', $studentAddress)->first();
       $courseApplication =  $this->course->applicants()->where('student_id', $student->id)->update(['status' => 1]);
    }

    public function updateToken($token){//->whereNull('token_id')
        CourseApplicant::where('course_id', $this->course->id)->update(['token_id'=> $token]);
    }
}
