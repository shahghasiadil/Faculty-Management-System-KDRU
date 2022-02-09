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
use App\Http\Controllers\RegistrationController;
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

// **  Schedule Routes
Route::apiResource('schedules', ScheduleController::class);
Route::delete('schedules/schedule/{id}', [ScheduleController::class, 'permanentDelete']);
Route::get('schedules/{id}/restore', [ScheduleController::class, 'restore']);

// **  Exam_Schedule Routes
Route::apiResource('exam-schedules', ExamScheduleController::class);
Route::delete('exam-schedules/exam-schedule/{id}', [ExamScheduleController::class, 'permanentDelete']);
Route::get('exam-schedules/{id}/restore', [ExamScheduleController::class, 'restore']);

// **  Subject routes
Route::apiResource('subjects', SubjectController::class);
Route::delete('subjects/subject/{id}', [SubjectController::class, 'permanentDelete']);
Route::get('subjects/{id}/restore', [SubjectController::class, 'restore']);
Route::get('/get_subject', [SubjectController::class, 'getSubject']);
Route::get('/get-semesters', [SubjectController::class, 'getSemesters']);

// **  Student Routes
Route::apiResource('/students', StudentController::class);
Route::delete('students/student/{id}', [StudentController::class, 'permanentDelete']);
Route::get('students/{id}/restore', [StudentController::class, 'restore']);
Route::get('/find-by-email', [StudentController::class, 'findByEmail']);
Route::get('/get_student', [StudentController::class, 'getStudent']);
Route::get('/get_student_father_name/{name}', [StudentController::class, 'studentFatherName']);
Route::get('/get_student_roll_no/{fname}', [StudentController::class, 'studentRollNo']);

// **  Teacher Routes
Route::apiResource('teachers', TeacherController::class);
Route::delete('teachers/teacher/{id}', [TeacherController::class, 'permanentDelete']);
Route::get('teachers/{id}/restore', [TeacherController::class, 'restore']);
Route::get('/find-teacher-by-email', [TeacherController::class, 'findByEmail']);

// **  Final Mark Routes
Route::apiResource('final-marks', FinalMarkController::class);
Route::delete('final-marks/final-mark/{id}', [FinalMarkController::class, 'permanentDelete']);
Route::get('final-marks/{id}/restore', [FinalMarkController::class, 'restore']);

// **  Midterm Mark Routes
Route::apiResource('mid-term-marks', MidtermMarkController::class);
Route::delete('mid-term-marks/mid-term-mark/{id}', [MidtermMarkController::class, 'permanentDelete']);
Route::get('mid-term-marks/{id}/restore', [MidtermMarkController::class, 'restore']);

// **  Chance Routes
Route::apiResource('chances', ChanceController::class);
Route::delete('chances/chance/{id}', [ChanceController::class, 'permanentDelete']);
Route::get('chances/{id}/restore', [ChanceController::class, 'restore']);

// **  Attendance Routes
Route::apiResource('attendances', AttendanceController::class);
Route::delete('attendances/attendance/{id}', [AttendanceController::class, 'permanentDelete']);
Route::get('attendances/{id}/restore', [AttendanceController::class, 'restore']);

// **  Semester Routes
Route::apiResource('semesters', SemesterController::class);
Route::delete('semesters/semester/{id}', [SemesterController::class, 'permanentDelete']);
Route::get('semesters/{id}/restore', [SemesterController::class, 'restore']);
Route::get('/find-semester-by-number', [SemesterController::class, 'findByNumber']);

// ** Registration Routes
Route::apiResource('registrations', RegistrationController::class);
Route::delete('registrations/registration/{id}', [RegistrationController::class, 'permanentDelete']);
Route::get('registrations/{id}/restore', [RegistrationController::class, 'restore']);
