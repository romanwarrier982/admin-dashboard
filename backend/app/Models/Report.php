<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;
    protected $fillable = ["room_id", "user_id", "asset_id", "report_description", "report_status", "created_by", "updated_by", "history_id","report_type"];
}
