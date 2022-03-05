<?php

namespace Tests\Feature;

use App\Models\Repeat;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RepeatTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_repeat_get()
    {
        $response = $this->get('/api/repeats');
        $response->assertStatus(200);
    }

}
