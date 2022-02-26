<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('final_project_student', function (Blueprint $table) {
            $table->id();
            $table->foreignId('final_project_id')->constrained('final_projects')->onDelete('cascade');
            $table->foreignId('student_id')->constrained('students')->unique(); //a student cannot join multiple projects
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('final_project_student');
    }
};
