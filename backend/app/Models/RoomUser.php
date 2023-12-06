<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomUser extends Model
{
    use HasFactory;
    protected $fillable = ["room_id", "user_id", "created_by", "updated_by"];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

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
