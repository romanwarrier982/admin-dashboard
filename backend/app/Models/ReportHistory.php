<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportHistory extends Model
{
    use HasFactory;
    protected $fillable = ["report_id","created_by", "updated_by", "report_status", "recieved_at", "recieved_by", "recieved_description", "resolved_at", "resolved_by", "resolved_description", "closed_at", "closed_by", "closed_description", "assigned_at", "assigned_by", "assigned_description", "assigned_to", "assigned_status", "forward_at","forward_by","forward_description","forward_to","forward_status"];
}
