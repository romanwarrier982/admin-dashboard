<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;
    protected $fillable = ["room_id", "user_id", "asset_id", "report_description", "report_status", "created_by", "updated_by", "history_id","report_type"];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function asset()
    {
        return $this->belongsTo(Product::class, 'asset_id', 'id');
    }

    public function history()
    {
        return $this->hasMany(ReportHistory::class);
    }
}

