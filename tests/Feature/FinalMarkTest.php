<?php

namespace Tests\Feature;

use App\Models\FinalMark;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FinalMarkTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_marks_can_be_retrived()
    {
        $response = $this->get('/api/final-marks');

        $response->assertStatus(200);
    }

    public function test_marks_can_added()
    {
        $response = $this->post('/api/final-marks',['student_id' => 1 , 'subject_id'=> 1 , 'marks' => 50 , 'midterm_mark_id'=>1]);
        $response->assertOk();
        $this->assertCount(1,FinalMark::all());
    }

    public function test_marks_can_be_updated()
    {

        $this->post('/api/final-marks',['student_id' => 1 , 'subject_id'=> 1 , 'marks' => 50 , 'midterm_mark_id'=>1]);
        $this->patch('/api/final-marks',['student_id' => 1 , 'subject_id'=> 1 , 'marks' => 90 , 'midterm_mark_id'=>1]);
        $this->assertEquals('50',FinalMark::first()->marks);
    }
}
