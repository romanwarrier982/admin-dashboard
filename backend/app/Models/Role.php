<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Role extends Model
{
    use HasFactory;

    protected $fillable = ["name", "details", "status"];

}


// $table->bigInteger('user_type_id')->unsigned();
//             $table->bigInteger('permission_id')->unsigned();

//             $table->foreign('user_type_id')->references('id')->on('web_user_types')->onDelete('cascade');
//             $table->foreign('permission_id')->references('id')->on('permissions')->onDelete('cascade');


//             $table->primary(['user_type_id', 'permission_id']);;
