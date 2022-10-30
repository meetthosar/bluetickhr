<?php

namespace App\Http\Livewire;

use App\Models\CourseApplicant;
use App\Models\User;
use Livewire\Component;

class Resume extends Component
{
    public User $student;
    public function render()
    {
        $courses = CourseApplicant::where('student_id', $this->student->id)->where('status', 1)->with('course')->get();
        return view('livewire.resume', compact('courses'));
    }
}
