<?php

namespace App\Http\Controllers;

use App\Models\Report;
use App\Models\ReportHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
            'forwardTo.role',
            'creator.role',
            
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


        DB::beginTransaction();

        try {
            $report = Report::find($request->id);
            $report->report_status = $request->report_status;
            $report->save();

            $reportHistory = new ReportHistory();

            if ($request->userInfo['userData']['role']['name'] == "Admin" || $request->userInfo['userData']['role']['name']) {

                $reportHistory->assigned_to = $request->assigned_to;
                $reportHistory->assigned_by = $request->assigned_by;
                $reportHistory->assigned_description = $request->assigned_description;
                $reportHistory->assigned_status = $request->assigned_status;
            } else {
                if ($request->report_status == "Resolved") {
                    $reportHistory->resolved_by = $request->userInfo['userData']['id'];
                    $reportHistory->resolved_description = "This Report is Resolved";
                    $reportHistory->resolved_status = $request->report_status;
                } else if ($request->report_status == "Closed") {
                    $reportHistory->closed_by = $request->userInfo['userData']['id'];
                    $reportHistory->closed_description = "This Report is Closed";
                    $reportHistory->closed_status = $request->report_status;
                } else if ($request->report_status == "Forwarded") {
                    $reportHistory->forward_by = $request->userInfo['userData']['id'];
                    $reportHistory->forward_description = "This Report is Forwarded";
                    $reportHistory->forward_status = $request->report_status;
                } else if ($request->report_status == "Pending") {
                    $reportHistory->forward_by = $request->userInfo['userData']['id'];
                    $reportHistory->forward_description = "Waiting for updates";
                    $reportHistory->forward_status = $request->report_status;
                } else {
                    $reportHistory->recieved_by = $request->userInfo['userData']['id'];
                    $reportHistory->recieved_description = $report->description;
                    
                }
            }
            $reportHistory->report_id = $request->id;
            $reportHistory->report_status = $request->report_status;
            $reportHistory->save();

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }


        return response()->json(["status" => "success", "message" => "Report Updated Successfully"]);
    }

    //create Report

    public function createReport(Request $request)
    {
        DB::beginTransaction();

        try {
            $report = new Report();
            $report->user_id = $request->user_id;
            $report->asset_id = $request->asset_id;
            $report->report_status = "Active";
            $report->report_description = $request->report_description;
            $report->report_type = $request->report_type;


            $report->save();

            $reportHistory = new ReportHistory();
            $reportHistory->report_id = $report->id;
            $reportHistory->recieved_by = $request->user_id;
            $reportHistory->recieved_description = $request->report_description;
         
            $reportHistory->report_status = "Active";
            $reportHistory->save();

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }


        return response()->json(["status" => "success", "message" => "Report Created Successfully"]);
    }
}
