<?php

namespace App\Http\Livewire;

use App\Models\Course;
use App\Models\Skill;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Livewire\Component;

class Courses extends Component
{
    public $name = null;
    public $duration = null;
    public $number_exams = null;
    public $skills = null;
    public $seats = null;
    public $price = null;
    public $user_id = null;

    public function mount(){
        $this->user_id = Auth::id();
    }

    public function render()
    {
        $courses = Auth::user()->courses()->paginate(10);
        $skillsCollection = Skill::all();
        return view('livewire.courses', compact('courses','skillsCollection'));
    }

    public function store(){
        $this->validate(Course::$rules);

        $course = Course::create([
            'user_id' => $this->user_id,
            'name' => $this->name,
            'duration' => $this->duration,
            'number_exams' => 1,
            'skills' => $this->skills,
            'seats' => $this->seats,
            'price' => $this->price
        ]);
        session()->flash('message', 'Course is created successfully');
        return redirect()->to(route('courses'));
    }


    public function toggleApplication($id, $current)
    {
        Course::where('id', $id )->update(['open' => $current ? 0 : 1]);
    }

    public function startAdmission($id)
    {
        Course::where('id', $id )->update(['admission_started' => 1]);
    }
}
