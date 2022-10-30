<?php

namespace App\Http\Livewire;

use App\Models\Course;
use App\Models\CourseApplicant;
use App\Models\Skill;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class OpenCourses extends Component
{
    public function render()
    {
        $skills = Skill::all();
        $courses = Course::where('open', 1)->with('university','applicants')->paginate(10);

        return view('livewire.open-courses', compact('courses', 'skills'));
    }

    public function apply($course_id){
        $application = CourseApplicant::firstOrCreate([
            'course_id' => $course_id,
            'student_id' => Auth::id()
        ]);
        session()->flash('message', "Successfully Applied");
    }
}
