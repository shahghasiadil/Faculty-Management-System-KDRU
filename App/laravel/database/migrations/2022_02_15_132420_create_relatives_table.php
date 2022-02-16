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
        Schema::create('relatives', function (Blueprint $table) {
            $table->id();
            $table->enum('relationship', ['FATHER', 'BROTHER', 'PATERNAL_UNCLE', 'MATERNAL_UNCLE']);
            $table->string('name');
            $table->string('father_name')->nullable();
            $table->enum('job', ['PERSONAL_BUSINESS', 'DOCTOR', 'STUDENT', 'TEACHER', 'EMPLOYEE']);
            $table->string('academic_transfer')->nullable();
            $table->string('phone')->nullable();
            $table->foreignId('student_id')->constrained('students');
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
        Schema::dropIfExists('relatives');
    }
};
