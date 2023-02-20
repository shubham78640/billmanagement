import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridEventListener,
  useGridApiEventHandler,
  GridToolbar,
} from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { MasterAPI } from "../../../AllData";

function ApprovalUserDataTable() {
  const EMPCODE = localStorage.getItem("employeeCode");
  const columns = [
    {
      field: "approvalId",
      headerName: " Approval Id",
      width: 120,
      editable: true,
      description:"Approval Id",
    },
    {
      field: "employeeName",
      headerName: "Employee Name",
      width: 130,
      editable: true,
      description:"Employee Name",
    },
    {
      field: "employeeCode",
      headerName: "Employee Code",
      width: 80,
      editable: true,
      description:"Employee Code",
    },
    {
      field: "email",
      headerName: "Email",
      width: 110,
      editable: true,
      description:"Email",
    },
    {
      field: "reportingManager",
      headerName: "Reporting Manager",
      description: "Reporting Manager",
      sortable: true,
      width: 110,
      
    },

    {
      field: "brand",
      headerName: "Brand",
      width: 110,
      editable: true,
      description:"Brand",
    },
    {
      field: "subBrand",
      headerName: "Sub Brand",
      width: 110,
      editable: true,
      description:"Sub Brand",
    },
    {
      field: "department",
      headerName: "Department",
      width: 90,
      editable: true,
      description:"Department",
    },
    {
      field: "location",
      headerName: "Location",
      width: 140,
      editable: true,
      description:"Location",
    },
    {
      field: "provisionAmount",
      headerName: "Provision Amount",
      width: 100,
      editable: true,
      description:"Provision Amount",
    },
    {
      field: "typeOfPurchase",
      headerName: "Type Of Purchase",
      width: 80,
      editable: true,
      description:"Type Of Purchase",
    },
    {
      field: "reasonOfPurchase",
      headerName: "Reason Of Purchase",
      width: 140,
      editable: true,
      description:"Reason Of Purchase",
    },
     {
        field: "paymentMode",
        headerName: "Payment Mode",
        width: 140,
        editable: true,
        description:"Payment Mode",
      },
      {
        field: "paymentMethod",
        headerName: "Payment Method",
        width: 140,
        editable: true,
        description:"Payment Method",
      },
      {
        field: "paymentTags",
        headerName: "Payment Tag",
        width: 140,
        editable: true,
        description:"Payment Tag",
      },
      {
        field: "urgentPaymentRemarks",
        headerName: "Urgent Payment Remarks",
        width: 140,
        editable: true,
        description:"Urgent Payment Remarks",
      },
    {
      field: "purchaseDescription",
      headerName: "Purchase Description",
      width: 140,
      editable: true,
      description:"Purchase Description",
    },

    {
      field: "purchaseDate",
      headerName: "Purchase Date",
      width: 100,
      editable: true,
      description:"Purchase Date",
    },
    {
      field: "submissionDate",
      headerName: "Submission Date",
      width: 100,
      editable: true,
      description:"Submission Date",
    },
    {
      field: "approvalRemarks",
      headerName: "Approval Remarks",
      width: 140,
      editable: true,
      description:"Approval Remarks",
    },
    {
      field: "hodApproval",
      headerName: "HOD Approval Status",
      width: 100,
      editable: true,
      description:"HOD Approval Status",
    },
    {
      field: "hodRemarks",
      headerName: "HOD Remarks",
      width: 140,
      editable: true,
      description:"HOD Remarks",
    },
    {
      field: "hodAapprovalDate",
      headerName: "HOD Approval Date",
      width: 160,
      editable: true,
      description:"HOD Approval Date",
    },
    {
      field: "finalApproval",
      headerName: "Final Approval Status",
      width: 100,
      editable: true,
      description:"",
    },
    {
      field: "finalRemarks",
      headerName: "Final Remarks",
      width: 140,
      editable: true,
      description:"Final Remarks",
    },
    {
      field: "finalApprovalDate",
      headerName: "Final Approval Date",
      width: 160,
      editable: true,
      description:"Final Approval Date",
    },
        {
        field: "paymentStatus",
        headerName: "Payment Status",
        width: 140,
        editable: true,
        description:"Payment Status",
      },
    {
        field: "paidAmount",
        headerName: "Paid Amount",
        width: 140,
        editable: true,
        description:"Paid Amount",
      },
      {
        field: "transactionDetails",
        headerName: "Transaction Details",
        width: 140,
        editable: true,
        description:"Transaction Details",
      },
      {
        field: "rembursementPaymentDate",
        headerName: "Rembursement Payment Date",
        width: 140,
        editable: true,
        description:"Rembursement Payment Date",
      },
  ];

  let navigate = useNavigate();
  const [approvalUserDatatabledata, setApprovalUserDatatabledataa] = useState(
    []
  );

  const handleapprovalfrom =()=>{
    navigate("/approvalform")
  }

  useEffect(() => {
    const fetchData = async () => {
      let dataTable = await fetch(
        `${MasterAPI}/bill/purchaseApproval/get/data/purchase/approval/employeeCode?employeeCode=${EMPCODE}`
      );
      let table = await dataTable.json();
      let adminTableData = await table.data;
      setApprovalUserDatatabledataa(adminTableData ? adminTableData : "");
    };
    fetchData();
  }, []);
  console.log("tabledata", approvalUserDatatabledata);
  return (
    <>
    <Box  p={2} sx={{ marginLeft: {sm:"85%", xs:"auto"}}}>
    <Button  variant="contained" 
    size="small"
          color="success"   onClick={handleapprovalfrom}>New Request</Button>
          </Box>
      <Box
        p={0.5}
        sx={{
          height: 620,
          width: "100%",
          backgroundColor: "#f2f2f2",
          minHeight: "600px",
          maxHeight: "100%",
          '& .discuss': {
            backgroundColor: '#fff44f',
            color: '#1a3e72',
          },
          '& .accept': {
            backgroundColor: '#3CB371',
            color: '#EFEFEF', 
          },
          '& .reject': {
             backgroundColor: '#DD6464',
            color: '#EFEFEF',
          },

        }}
      >
        <DataGrid
          rows={approvalUserDatatabledata}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[500]}
          components={{ Toolbar: GridToolbar }}
          rowHeight={32}
          initialState={{
            sorting: {
              sortModel: [
                {
                  field: 'submissionDate',
                  sort: 'desc',
                },
              ],
            },
          }}
          getCellClassName={(params) => {
            if ( params.value === "Reject") {
              return 'reject';
            }
            if ( params.value === "Accept") {
              return 'accept';
            }
            if ( params.value === "Discuss") {
              return 'discuss';
            }
          }}
        />
      </Box>
    </>
  );
}

export default ApprovalUserDataTable;
