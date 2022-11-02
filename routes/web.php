<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

    Route::get('/courses', function () {
        return view('courses.index');
    })->name('courses');

    Route::get('/admission/{course}', function (\App\Models\Course $course){

        return view('admissions.index', compact('course'));
    })->name('admissions');

    Route::get('/apply/{courseApplicant}', function (\App\Models\CourseApplicant $courseApplicant) {
        return view('admissions.apply', compact('courseApplicant'));
    })->name('apply');
});

Route::get('/resume/{user}', function (\App\Models\User $user){
    return view('resume.index',compact('user'));
})->name('resume');

Route::get('/universityLogin', function (){
   return view('login_university');
});

Route::get('/studentLogin', function (){
    return view('login_student');
});
