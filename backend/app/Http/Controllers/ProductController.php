<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Report;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('JWT', ['except' => ['index', 'search', 'userList', 'getUserListByRoleId']]);
    }
    /**
     * Fetch products
     * @param NA
     * @return JSON response
     */
    public function index()
    {
        $products = Product::with('user', 'room', 'reports', 'reports.history')->paginate(10);
        $resolved = Report::where('report_status', 'Resolved')->count();
        $pending = Report::where('report_status', 'Pending')->count();
        $closed = Report::where('report_status', 'Closed')->count();
        $opended = Report::where('report_status', 'Opened')->count();
        return response()->json(["status" => "success", "data" => $products, "resolved" => $resolved, "pending" => $pending, "closed" => $closed, "opended" => $opended]);
    }



    /**
     * Upload products
     * @param $request
     * @return JSON response
     */
    public function upload(Request $request)
    {
        $response = [];

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required',
                'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:20000',
            ]
        );

        if ($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "Validation error", "errors" => $validator->errors()]);
        }
        $request->has('images') ? $filename = $this->createImagePath($request->images) : $filename = "box.png";

        Product::create([
            'name' => $request->name,
            'price' => $request->price ? $request->price : 0.00,
            'image_name' => $filename
        ]);

        return response()->json(["status" => "success", "message" => "Success! product(s) uploaded"]);
    }

    /**
     * update product
     * @param NA
     * @return JSON response
     */
    public function update(Request $request)
    {


        $request->has('images') ? $filename = $this->createImagePath($request->images) : $filename = "box.png";

        Product::where('id', $request->id)->update([
            'name' => $request->name,
            'price' => $request->price ? $request->price : 0.00,
            'image_name' => $filename
        ]);

        return response()->json(["status" => "success", "message" => "Success! product(s) updated"]);
    }

    /**
     * Delete product
     * @param NA
     * @return JSON response
     */
    public function delete(Request $request)
    {

        unlink("uploads/" . $request->image_name);
        Product::where('id', $request->id)->delete();
        return response()->json(["status" => "Successfully Deleted Data",]);
    }



    /**
     * Search product
     * @param NA
     * @return JSON response
     */
    public function search(Request $request)
    {

        return Product::where('name', 'LIKE', '%' . $request->get('searchKey') . '%')->paginate(10);
    }

    /**
     * Create Path product
     * @param NA
     * @return String response
     */
    public function createImagePath($images)
    {
        $filename = time() . rand() . '.' . $images->getClientOriginalExtension();
        $images->move('uploads/', $filename);

        return $filename;
    }


    /**
     * Fetch products
     * @param NA
     * @return JSON response
     */
    public function userList()
    {
        $user = User::with('role')->paginate(10);
        return response()->json(["status" => "success", "data" => $user]);
    }

    //get userlist by role_id

    public function getUserListByRoleId($id)
    {
        $user = User::with('role')->where('role_id', $id)->get();
        return response()->json(["status" => "success", "data" => $user]);
    }

    // get Product by user_id

    public function getProductsByUserId($id)
    {

        $product = Product::with('reports', 'reports.history')->where('user_id', $id)->get();
        return response()->json(["status" => "success", "data" => $product]);
    }

    // get product by room_id

    public function getProductsByRoomId($id)
    {
        $product = Product::with('reports', 'reports.history')->where('room_id', $id)->get();
        return response()->json(["status" => "success", "data" => $product]);
    }
}
