<?php

use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\MidtermMarkController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\SemesterController;
use App\Http\Controllers\ExamScheduleController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\ChanceController;
use App\Http\Controllers\FinalMarkController;
use App\Http\Controllers\TeacherController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// ** Schedule Routes
Route::apiResource('schedules', ScheduleController::class);

// ** Exam_Schedule Routes
Route::apiResource('examschedules', ExamScheduleController::class);

// ** Attendance Routes
Route::apiResource('attendances', AttendanceController::class);

// ** Semester Routes
Route::apiResource('semesters', SemesterController::class);


// ** Subject routes
Route::apiResource('subjects', SubjectController::class);
Route::delete('subjects/subject/{id}', [SubjectController::class, 'permanentDelete']);
Route::get('subjects/{id}/restore', [SubjectController::class, 'restore']);

// ** Student Routes
Route::apiResource('/students', StudentController::class);
Route::delete('students/student/{id}', [StudentController::class, 'permanentDelete']);
Route::get('students/{id}/restore', [StudentController::class, 'restore']);
Route::get('/findByEmail', [StudentController::class, 'findByEmail']);

// **  Teacher Routes
Route::apiResource('teachers', TeacherController::class);
Route::delete('teachers/teacher/{id}', [TeacherController::class, 'permanentDelete']);
Route::get('teachers/{id}/restore', [TeacherController::class, 'restore']);
Route::get('/findTeacherByEmail', [TeacherController::class, 'findByEmail']);


// ** Final Mark Routes
Route::apiResource('finalmarks', FinalMarkController::class);
Route::delete('finalmarks/finalmark/{id}', [FinalMarkController::class, 'permanentDelete']);
Route::get('finalmarks/{id}/restore', [FinalMarkController::class, 'restore']);

// ** Midterm Mark Routes
Route::apiResource('midtermmarks', MidtermMarkController::class);
Route::delete('midtermmarks/midtermmark/{id}', [MidtermMarkController::class, 'permanentDelete']);
Route::get('midtermmarks/{id}/restore', [MidtermMarkController::class, 'restore']);

// ** Chance Routes
Route::apiResource('chances', ChanceController::class);
Route::delete('chances/chance/{id}', [ChanceController::class, 'permanentDelete']);
Route::get('chances/{id}/restore', [ChanceController::class, 'restore']);
