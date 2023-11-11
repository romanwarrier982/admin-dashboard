<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    
    protected $fillable = ["name", "price", "image_name", "status", "supplier_id", "expired_at", "invoice_id", "details", "count", "type", "created_by", "updated_by"];

}
