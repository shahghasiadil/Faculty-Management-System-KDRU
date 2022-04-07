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
use App\Http\Controllers\WeekDayController;
use App\Http\Controllers\FinalProjectController;
use App\Http\Controllers\RelativeController;
use App\Http\Controllers\Auth\AuthenticationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\RepeatController;
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


// **  Attendance Routes
Route::apiResource('attendances', AttendanceController::class);
Route::controller(AttendanceController::class)->group(function(){
    Route::delete('attendances/attendance/{id}', 'permanentDelete');
    Route::get('attendances/{id}/restore', 'restore');
    Route::post('attendances/find-by-subject-year-month/','getAttBySubjectYearMonth');
    Route::post('attendances/find-by-student-month/', 'getAttByStudentMonth');
    Route::post('attendances/find-by-subject-period', 'getStudentsBySubjectPeriod');
});

// ** Address Routes
Route::apiResource('addresses', AddressController::class);

Route::controller(AddressController::class)->group(function(){
    Route::delete('addresses/address/{id}', 'permanentDelete');
    Route::get('addresses/{id}/restore', 'restore');
});


// ** Chance Routes
Route::apiResource('chances', ChanceController::class);
Route::controller(ChanceController::class)->group(function(){
    Route::delete('chances/chance/{id}', 'permanentDelete');
    Route::get('chances/{id}/restore', 'restore');
});

// ** Dashboard Routes
Route::get('dashboard', DashboardController::class);
// there should be a route for inserting user photo aswell


// ** Exam_Schedule Routes
Route::apiResource('exam-schedules', ExamScheduleController::class);
Route::controller(ExamScheduleController::class)->group(function(){
    Route::delete('exam-schedules/exam-schedule/{id}', 'permanentDelete');
    Route::get('exam-schedule/{id}/restore', 'restore');
});

// ** Final Mark Routes
Route::apiResource('final-marks', FinalMarkController::class);
Route::controller(FinalMarkController::class)->group(function(){
    Route::delete('final-marks/final-mark/{id}', 'permanentDelete');
    Route::get('final-marks/{id}/restore', 'restore');
    Route::post('mark/final-marks-print', 'loadMarks');
});

// ** Final Project Routes
Route::apiResource('final-projects', FinalProjectController::class);

Route::controller(FinalProjectController::class)->group(function(){
    Route::delete('final-projects/final-project/{id}', 'permanentDelete');
    Route::get('final-projects/{id}/restore','restore');
    Route::get('final-projects/get-students-by-project/{id}','getFinalProjectStudents');
    Route::get('final-projects/get-teacher-by-project/{id}','getFinalProjectTeacher');
    Route::post('final-projects/add-student-list', 'addStudentToFinalProject');
    Route::post('final-projects/filter', 'project_filter');
});

// ** Login
Route::post('/login', [AuthenticationController::class, 'login']);


// ** Midterm Mark Routes
Route::apiResource('mid-term-marks', MidtermMarkController::class);
Route::controller(MidtermMarkController::class)->group(function(){
    Route::delete('mid-term-marks/mid-term-mark/{id}', 'permanentDelete');
    Route::get('mid-term-marks/{id}/restore', 'restore');
    Route::post('mid-term-marks/mark-assign-students', 'find_all_students');
});


// ** Using middleware
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthenticationController::class, 'logout']);
});


// ** Relative Routes
Route::apiResource('relatives', RelativeController::class);
Route::controller(RelativeController::class)->group(function(){
    Route::delete('relatives/relative/{id}', 'permanentDelete');
    Route::get('relatives/{id}/restore', 'restore');
});

// ** Registration Routes
Route::apiResource('registrations', RegistrationController::class);
Route::delete('registrations/registration/{id}', [RegistrationController::class, 'permanentDelete']);


// ** Schedule Routes
Route::apiResource('schedules', ScheduleController::class);
Route::delete('schedules/schedule/{id}', [ScheduleController::class, 'permanentDelete']);
Route::get('schedules/{id}/restore', [ScheduleController::class, 'restore']);
Route::post('schedules/schedule-filter', [ScheduleController::class, 'scheduleFilter']);
Route::get('schedules/get-schedule-by-semester/{id}', [ScheduleController::class, 'getScheduleBySemester']);


// ** Subject routes
Route::apiResource('subjects', SubjectController::class);
Route::delete('subjects/subject/{id}', [SubjectController::class, 'permanentDelete']);
Route::get('subjects/{id}/restore', [SubjectController::class, 'restore']);
Route::post('subjects/add-student', [SubjectController::class, 'addStudentToSubject']);
Route::get('get-semesters', [SubjectController::class, 'getSemesters']);


// ** Student Routes
Route::apiResource('/students', StudentController::class);
Route::controller(StudentController::class)->group(function(){
    Route::delete('students/student/{id}', 'permanentDelete');
    Route::get('students/{id}/restore', 'restore');
    Route::get('students/get-father-name/{name}', 'studentFatherName');
    Route::get('students/get-roll-no/{fname}', 'studentRollNo');
    Route::post('students/find-by-email', 'findByEmail');
    Route::post('students/find-by-subject-period/', 'getStudentsBySubjectPeriod');
    Route::get('students/find-by-semester/{id}', 'getStudentsBySemester');
    Route::post('students/add-to-semester','addStudentToSemester');
    Route::get('students/get-relatives/{id}', 'getStudentRelatives');
});


// ** Semester Routes
Route::apiResource('semesters', SemesterController::class);
Route::controller(SemesterController::class)->group(function(){
    Route::delete('semesters/semester/{id}','permanentDelete');
    Route::get('semesters/{id}/restore', 'restore');
    Route::get('semesters/find-by-name','findByNumber');
    Route::post('semesters/funded-students', 'getFundedStudentsBySemester');
    Route::post('semester/find-all-students-of-semester', 'find_all_students_of_semester');
});

// ** Teacher Routes
Route::apiResource('teachers', TeacherController::class);
Route::controller(TeacherController::class)->group(function(){
    Route::delete('teachers/teacher/{id}',  'permanentDelete');
    Route::get('teachers/{id}/restore', 'restore');
    Route::post('teachers/find-by-email', 'findByEmail');
});

// ** WeekDay Routes
Route::apiResource('week-days', WeekDayController::class);
Route::post('week-days/get-subjects', [WeekDayController::class, 'getSubjectsByWeekDay']);


// ** Repeat Routes
Route::apiResource('repeats', RepeatController::class);