<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;
    protected $fillable = ["room_number", "room_type_id", "room_status", "created_by", "updated_by"];
    public function room_type()
    {
        return $this->belongsTo(RoomType::class);
    }
}



