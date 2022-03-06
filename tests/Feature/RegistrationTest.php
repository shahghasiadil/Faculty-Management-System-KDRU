<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_registration_can_be_get()
    {
        $this->withoutExceptionHandling();
        $response = $this->get('/api/registrations');
        $response->assertStatus(200);
    }

    public function test_registration_can_be_added()
    {
        $response = $this->post('/api/registrations',['subject_id' => 1 , 'student_id' => 1]);
        $response->assertOk();

    }
}