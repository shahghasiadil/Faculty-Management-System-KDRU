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
        $response = $this->post('/api/mid-term-marks', ['student_id' => '1','subject_id'=> '1','marks'=>50 ]);
        $response->assertOk();
        $this->assertCount(1, MidtermMark::all());
    }

     /** @test */
     public function mid_marks_can_updated()
     {
         $this->post('/api/mid-term-marks', ['student_id' => '1','subject_id'=> '1','marks'=>40 ]);
         $this->patch('/api/mid-term-marks', ['student_id' => '1','subject_id'=> '1','marks'=>50 ]);
         $this->assertEquals('50', MidtermMark::first()->marks);
     }
     /** @test */
     public function mid_marks_can_be_deleted()
     {
         $this->withoutExceptionHandling();
         $this->post('/api/mid-term-marks', ['student_id' => '1','subject_id'=> '1','marks'=>40 ]);
         // $this->assertCount(1, Semester::all());
         $this->assertCount(3, MidtermMark::all());
         $semester = MidtermMark::first();

         $this->delete('/api/mid-term-marks/'.$semester->id);
         $this->assertCount(2, MidtermMark::all());

     }
}
