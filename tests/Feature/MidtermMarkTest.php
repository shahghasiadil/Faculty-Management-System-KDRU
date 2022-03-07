<?php

namespace Tests\Feature;

use App\Models\MidtermMark;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MidtermMarkTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_mid_marks_can_be_get()
    {
        $response = $this->get('/api/mid-term-marks');
        $response->assertOk();
    }

    /** @test */
    public function mid_marks_can_stored()
    {
        $this->withoutExceptionHandling();
        $response = $this->post('/api/mid-term-marks', ['student_id' => '1','subject_id'=> '1','marks'=>20 ]);
        $response->assertOk();
        $this->assertCount(1, MidtermMark::all());
    }

     /** @test */
     public function mid_marks_can_updated()
     {
         $this->withoutExceptionHandling();
         $this->post('/api/mid-term-marks', ['student_id' => '11','subject_id'=> '4','marks'=>20 ]);
         $midterm = MidtermMark::first();
         $this->patch('/api/mid-term-marks/'.$midterm->id, ['student_id' => '11','subject_id'=> '4','marks'=>19 ]);
         $this->assertEquals('19', MidtermMark::first()->marks);
     }
     /** @test */
     public function mid_marks_can_be_deleted()
     {
         $this->withoutExceptionHandling();
         $this->post('/api/mid-term-marks', ['student_id' => '3','subject_id'=> '3','marks'=>15 ]);

         $this->assertCount(1, MidtermMark::all());
         $semester = MidtermMark::first();

         $this->delete('/api/mid-term-marks/'.$semester->id);
         $this->assertCount(0, MidtermMark::all());

     }
}
