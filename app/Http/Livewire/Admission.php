<?php

namespace App\Http\Livewire;

use App\Mail\ContractInfo;
use App\Models\Course;
use App\Models\CourseApplicant;
use App\Models\Skill;
use Illuminate\Support\Facades\Mail;
use JetBrains\PhpStorm\NoReturn;
use Livewire\Component;

class Admission extends Component
{
    public Course $course;
    public $account;
    public $message;

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
    public function startProcess($contractInfo)
    {
        $applicants = CourseApplicant::where('course_id', $this->course->id)->with('student')->get();
        foreach ($applicants as $applicant)
        {
            Mail::to($applicant->student->email)->send(new ContractInfo($contractInfo, $applicant->student));
        }
        $this->dispatchBrowserEvent('notifify-applicants', ['message' => 'Applicants have been informed']);
        $this->message = 'Applicants have been informed';
    }

    public function notifyAdmissionCompletion($student)
    {
        dd($student);
    }
}
