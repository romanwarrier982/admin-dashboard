<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    //

    //
    public function __construct()
    {
        $this->middleware('JWT');
    }
    /**
     * Fetch products
     * @param NA
     * @return JSON response
     */
    public function index()
    {
        $permissions = Permission::paginate(10);
        return response()->json(["status" => "success", "count" => count($permissions), "data" => $permissions]);
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
    

        Permission::create([
            'name' => $request->name,
            
        ]);

        return response()->json(["status" => "success", "message" => "Success! permission(s) added"]);
    }

    /**
     * update product
     * @param NA
     * @return JSON response
     */
    public function update(Request $request)
    {


       

        Permission::where('id', $request->id)->update([
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

        Permission::where('id', $request->id)->delete();
        return response()->json(["status" => "Successfully Deleted Data",]);
    }



    /**
     * Search product
     * @param NA
     * @return JSON response
     */
    public function search(Request $request)
    {

        return Permission::where('name', 'LIKE', '%' . $request->get('searchKey') . '%')->paginate(10);
    }
}
