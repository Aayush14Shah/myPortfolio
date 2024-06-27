<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserResponse extends Model
{
    use HasFactory;
    protected $table = "user_responses";
    protected $primaryKey = "id";
    protected $fillable = [
        'name',
        'email',
        'message'
    ];
}
