<?php

use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\SemesterController;
use App\Http\Controllers\ExamScheduleController;
use App\Http\Controllers\AttendanceController;
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
// Subject routes
Route::apiResource('subjects', SubjectController::class);

Route::apiResource('schedules', ScheduleController::class);

Route::apiResource('semesters', SemesterController::class);

//Student Routes
Route::apiResource('students', StudentController::class);
Route::delete('students/student/{id}', [StudentController::class, 'permanentDelete']);
Route::get('students/{id}/restore', [StudentController::class, 'restore']);
Route::get('/findByEmail', [StudentController::class, 'findByEmail']);

// Teacher Routes 
Route::apiResource('teachers', TeacherController::class);
Route::delete('teachers/teacher/{id}', [TeacherController::class, 'permanentDelete']);
Route::get('teachers/{id}/restore', [TeacherController::class, 'restore']);
Route::get('/findTeacherByEmail', [TeacherController::class, 'findByEmail']);

Route::apiResource('examschedules', ExamScheduleController::class);

Route::apiResource('attendances', AttendanceController::class);
