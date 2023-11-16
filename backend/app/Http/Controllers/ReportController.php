<?php

namespace App\Http\Controllers;

use App\Models\Report;
use App\Models\ReportHistory;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    //



    /**
     * Fetch products
     * @param NA
     * @return JSON response
     */
    public function getReports()
    {
        $reports = Report::with('room', 'user', 'asset', 'history')->paginate(10);

        $resolved = Report::where('report_status', 'Resolved')->count();
        $pending = Report::where('report_status', 'Pending')->count();
        $closed = Report::where('report_status', 'Closed')->count();
        $opended = Report::where('report_status', 'Opened')->count();
        return response()->json(["status" => "success", "count" => $reports,  "data" => $reports, "resolved" => $resolved, "pending" => $pending, "closed" => $closed, "opended" => $opended]);
    }

    /**
     * Fetch products
     * @param NA
     * @return JSON response
     */

    // get report by user_id

    public function getReportsByUserId($id)
    {
        $reports = Report::with('room', 'user', 'asset')->where('user_id', $id)->get();
        return response()->json(["status" => "success", "count" => count($reports), "data" => $reports]);
    }

    public function getReportHistory($id)
    {
        $report = Report::with('room', 'user', 'asset', 'user.role', 'room.room_type', 'asset.supplier')->where('id', $id)->first();

        $reportHistory = ReportHistory::with(
            'resolvedBy',
            'recievedBy',
            'closedBy',
            'assignedBy',
            'assignedTo',
            'forwardBy',
            'forwardTo',
            'resolvedBy.role',
            'recievedBy.role',
            'closedBy.role',
            'assignedBy.role',
            'assignedTo.role',
            'forwardBy.role',
            'forwardTo.role'
        )->where('report_id', $id)->get();

        return response()->json(["status" => "success", "count" => count($reportHistory), "data" => $reportHistory, "report" => $report]);
    }

      /**
     * Search product
     * @param NA
     * @return JSON response
     */
    public function search(Request $request)
    {

        return Report::where('status', 'LIKE', '%' . $request->get('searchKey') . '%')->paginate(25);
    }
}
