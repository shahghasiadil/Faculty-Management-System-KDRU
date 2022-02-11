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
use App\Http\Controllers\AddressController;
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

// **  Address Routes
Route::apiResource('addresses', AddressController::class);
Route::delete('addresses/address/{id}', [AddressController::class, 'permanentDelete']);
Route::get('addresses/{id}/restore', [AddressController::class, 'restore']);

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
Route::get('students/get-student', [StudentController::class, 'getStudent']);
Route::get('students/get-father-name/{name}', [StudentController::class, 'studentFatherName']);
Route::get('students/get-roll-no/{fname}', [StudentController::class, 'studentRollNo']);
Route::post('students/find-by-email', [StudentController::class, 'findByEmail']);
Route::get('students/find-by-subject/{id}', [StudentController::class, 'getStudentsBySubject']);
Route::get('students/find-by-semester/{id}', [StudentController::class, 'getStudentsBySemester']);
Route::post('students/add-to-semester', [StudentController::class, 'addStudentToSemester']);
Route::post('students/add-to-subject', [StudentController::class, 'addStudentToSubject']);

// **  Teacher Routes
Route::apiResource('teachers', TeacherController::class);
Route::delete('teachers/teacher/{id}', [TeacherController::class, 'permanentDelete']);
Route::get('teachers/{id}/restore', [TeacherController::class, 'restore']);
Route::post('teachers/find-by-email', [TeacherController::class, 'findByEmail']);

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
Route::get('attendances/find-by-subject/{id}', [AttendanceController::class, 'searchBySubject']);

// **  Semester Routes
Route::apiResource('semesters', SemesterController::class);
Route::delete('semesters/semester/{id}', [SemesterController::class, 'permanentDelete']);
Route::get('semesters/{id}/restore', [SemesterController::class, 'restore']);
Route::get('/find-semester-by-number', [SemesterController::class, 'findByNumber']);

// ** Registration Routes
Route::apiResource('registrations', RegistrationController::class);
Route::delete('registrations/registration/{id}', [RegistrationController::class, 'permanentDelete']);
Route::get('registrations/{id}/restore', [RegistrationController::class, 'restore']);
