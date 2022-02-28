<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('last_name');
            $table->string('father_name');
            $table->string('grand_father_name');
            $table->string('roll_no');
            $table->foreignId('address_id')->constrained('addresses');
            $table->foreignId('user_id')->constrained('users');
            $table->integer('period');
            $table->string('native_tongue');
            $table->string('gender');
            $table->string('tazkira_volume');
            $table->integer('tazkira_page');
            $table->integer('tazkira_registration_number');
            $table->integer('birth_year')->nullable();
            $table->string('marital_status')->nullable();
            $table->string('school_name')->nullable();
            $table->integer('graduation_year')->nullable();
            $table->string('kankor_year')->nullable(); //for example: 1395
            $table->float('kankor_score'); //for example: 255.34
            $table->string('kankor_id'); //for example: J5023992332
            $table->string('phone')->nullable(); //for example: J5023992332
            $table->softDeletes();
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
        Schema::dropIfExists('students');
    }
}
