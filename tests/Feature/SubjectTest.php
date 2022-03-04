<?php

namespace Tests\Feature;

use App\Models\Subject;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SubjectTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_subject_can_be_get()
    {
        $response = $this->get('/api/subjects');
        $response->assertStatus(200);
    }

    public function test_subject_can_be_added()
    {
        $this->post('/api/subjects',['name'=> 'C++', 'code' => 'CS50', 'credit'=> 4, 'semester_id' => 2,'teacher_id'=> 1]);
        $this->assertDatabaseCount('subjects', 1);
    }

    public function test_subject_name_is_required()
    {
        $response = $this->post('/api/subjects',['name'=> '', 'code' => 'CS50', 'credit'=> 4, 'semester_id' => 2]);
        $response->assertSessionHasErrors('name');
    }

    public function test_subject_code_is_required()
    {
        $response = $this->post('/api/subjects',['name'=> 'C++', 'code' => '', 'credit'=> 4, 'semester_id' => 2,'teacher_id'=> 1]);
        $response->assertSessionHasErrors('code');
    }

    public function test_subject_credit_and_semester_id_is_required()
    {
        $response = $this->post('/api/subjects',['name'=> 'C++', 'code' => '', 'credit'=> '', 'semester_id' =>'' ]);
        $response->assertSessionHasErrors('code');
    }

    public function test_subject_can_be_updated()
    {
        $this->withoutExceptionHandling();
        $this->post('/api/subjects',['name'=> 'C++', 'code' => 'CS', 'credit'=> 1, 'semester_id' =>2 ,'teacher_id'=> 1]);
        $subject = Subject::first();

        $response = $this->patch('/api/subjects/'.$subject->id,[
            "name" => "C Programming"
        ]);

        $this->assertEquals("C Programming", Subject::first()->name);
    }

    public function test_subject_can_deleted()
    {
        $this->post('/api/subjects',['name'=> 'C++', 'code' => 'CS', 'credit'=> 1, 'semester_id' =>2 ,'teacher_id'=> 1]);
        $subject = Subject::first();

        $this->delete('/api/subjects/subject/'.$subject->id);
        $this->assertDatabaseMissing('subjects', ["id" => $subject->id]);
    }


}
