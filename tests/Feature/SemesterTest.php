<?php

namespace Tests\Feature;

use App\Models\Semester;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SemesterTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_semesters_can_be_retrieved()
    {
        $response = $this->get('/api/semesters');

        $response->assertStatus(200);
    }

    public function test_semester_can_be_stored()
    {
        $response = $this->post('/api/semesters', ['name' => '1']);
        $response->assertOk();
        $this->assertCount(1, Semester::all());
    }

    // public function test_semester_can_be_updated()
    // {
    //     // $semester = Semester::create(['name' => 'shahghasi']);
    //     // $response = $this->patch('/api/semesters', );
    // }

    public function test_semester_name_is_required()
    {
        $response = $this->post('/api/semesters', ['name' => '']);
        $response->assertSessionHasErrors('name');
    }
}
