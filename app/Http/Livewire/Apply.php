<?php

namespace App\Http\Livewire;

use App\Models\Course;
use App\Models\CourseApplicant;
use App\Models\Skill;
use App\Models\User;
use Livewire\Component;

class Apply extends Component
{
    public CourseApplicant $courseApplicant;
    public User $student;
    public Course $course;
    public string $message;

    public function render()
    {
        $skillCollection = Skill::all();
        return view('livewire.apply', compact('skillCollection'));
    }

    public function checkAdmissionStatus(){
        $this->courseApplicant->refresh();
    }
}
