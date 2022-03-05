<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testDashboardTest()
    {

        $this->withoutExceptionHandling();
        $response = $this->get('/api/dashboard');

        $response->assertStatus(200);
    }
}
