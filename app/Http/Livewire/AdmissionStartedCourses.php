<?php

namespace App\Http\Livewire;

use App\Models\CourseApplicant;
use App\Models\Skill;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class AdmissionStartedCourses extends Component
{
    public function render()
    {
        $skillCollection = Skill::all();
        $applications = CourseApplicant::where('student_id',Auth::id())->with('course')->get();
        return view('livewire.admission-started-courses', compact('applications', ));
    }
}
