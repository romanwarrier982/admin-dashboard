<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('JWT', ['except' => ['index', 'search']]);
    }
    /**
     * Fetch products
     * @param NA
     * @return JSON response
     */
    public function index()
    {
        $roles = Role::paginate(10);
        return response()->json(["status" => "success", "count" => count($roles), "data" => $roles]);
    }

    /**
     * Upload products
     * @param $request
     * @return JSON response
     */
    public function add(Request $request)
    {
        $response = [];

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "Validation error", "errors" => $validator->errors()]);
        }
    

        Role::create([
            'name' => $request->name,
            
        ]);

        return response()->json(["status" => "success", "message" => "Success! role(s) added"]);
    }

    /**
     * update product
     * @param NA
     * @return JSON response
     */
    public function update(Request $request)
    {


       

        Role::where('id', $request->id)->update([
            'name' => $request->name,
         
        ]);

        return response()->json(["status" => "success", "message" => "Success! role(s) updated"]);
    }

    /**
     * Delete product
     * @param NA
     * @return JSON response
     */
    public function delete(Request $request)
    {

        Role::where('id', $request->id)->delete();
        return response()->json(["status" => "Successfully Deleted Data",]);
    }



    /**
     * Search product
     * @param NA
     * @return JSON response
     */
    public function search(Request $request)
    {

        return Role::where('name', 'LIKE', '%' . $request->get('searchKey') . '%')->paginate(10);
    }



     /**
     * Upload products
     * @param $request
     * @return JSON response
     */
    public function addPermissionToRole(Request $request)
    {
        $response = [];

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "Validation error", "errors" => $validator->errors()]);
        }
    

        Role::create([
            'name' => $request->name,
            
        ]);

        return response()->json(["status" => "success", "message" => "Success! role(s) added"]);
    }


 

}
