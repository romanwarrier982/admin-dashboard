<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;
    protected $fillable = ["name", "phone", "address","email", "created_by", "updated_by", "status"];

      // This method will be called when the model is being created
      public static function boot()
      {
          parent::boot();
  
          static::creating(function ($model) {
              // Set the created_by field if it's not already set
              if (empty($model->created_by)) {
                  // Assuming you have an authenticated user and you want to set their ID
                  $model->created_by = auth()->id();
              }
          });
  
          static::updating(function ($model) {
              // Set the updated_by field if it's not already set
              if (empty($model->updated_by)) {
                  // Assuming you have an authenticated user and you want to set their ID
                  $model->updated_by = auth()->id();
              }
          });
      }
}
