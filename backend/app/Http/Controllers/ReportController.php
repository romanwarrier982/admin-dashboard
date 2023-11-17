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
        $reports = Report::with('room', 'user', 'asset', 'user.role', 'room.room_type', 'asset.supplier', 'history')->paginate(10);

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

        $reports = Report::with('room', 'user', 'asset', 'user.role', 'room.room_type', 'asset.supplier')->where('user_id', $id)->get();


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

    // update report status and report history with assign to user id

    public function updateReportStatus(Request $request)
    {

        $report = Report::find($request->id);
        $report->report_status = $request->report_status;
        $report->save();

        $reportHistory = new ReportHistory();
        $reportHistory->report_id = $request->id;
        $reportHistory->assigned_to = $request->assigned_to;
        $reportHistory->assigned_by = $request->assigned_by;
        $reportHistory->assigned_description = $request->assigned_description;
        $reportHistory->assigned_status = $request->assigned_status;

        $reportHistory->save();

        return response()->json(["status" => "success", "message" => "Report Updated Successfully"]);
    }
}
