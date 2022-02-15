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
        Schema::table('students', function (Blueprint $table) {
            $table->string('photo')->unique()->nullable();
            $table->enum('native_tongue', ['PASHTU', 'DARI', 'UZBAKI', 'TURKMANI', 'BALUCHI', 'PASHAYI']);
            $table->string('tazkira_volume');
            $table->string('tazkira_page');
            $table->string('tazkira_registration_number');
            $table->date('birth_date')->nullable();
            $table->enum('marital_status', ['MARRIED', 'SINGLE'])->nullable();
            $table->string('school')->nullable();
            $table->integer('graduation_year')->nullable();
            $table->string('kankor_year')->nullable(); //for example: 1395
            $table->float('kankor_score'); //for example: 255.34
            $table->string('kankor_id'); //for example: J5023992332
            $table->string('phone')->nullable(); //for example: J5023992332
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('students', function (Blueprint $table) {
            //
        });
    }
};
