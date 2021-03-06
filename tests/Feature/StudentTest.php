<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class StudentTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_student_can_be_returned()
    {
        $this->withoutExceptionHandling();
        $response = $this->get('/api/students');
        $response->assertOk();
    }

}
