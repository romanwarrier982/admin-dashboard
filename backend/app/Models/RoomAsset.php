<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomAsset extends Model
{
    use HasFactory;
    protected $fillable = ["room_id", "asset_id", "created_by", "updated_by"];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    public function asset()
    {
        return $this->belongsTo(Product::class);
    }
}
