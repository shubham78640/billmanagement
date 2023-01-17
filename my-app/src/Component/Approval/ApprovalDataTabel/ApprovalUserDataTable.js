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

function ApprovalUserDataTable() {
  const EMPCODE = localStorage.getItem("employeeCode");
  const columns = [
    {
      field: "approvalId",
      headerName: " Approval Id",
      width: 100,
      editable: true,
    },
    {
      field: "employeeName",
      headerName: "Employee Name",
      width: 130,
      editable: true,
    },
    {
      field: "employeeCode",
      headerName: "Employee Code",
      width: 80,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 110,
      editable: true,
    },
    {
      field: "reportingManager",
      headerName: "Reporting Manager",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 110,
    },

    {
      field: "brand",
      headerName: "Brand",
      width: 110,
      editable: true,
    },
    {
      field: "subBrand",
      headerName: "Sub Brand",
      width: 110,
      editable: true,
    },
    {
      field: "department",
      headerName: "Department",
      width: 90,
      editable: true,
    },
    {
      field: "location",
      headerName: "Location",
      width: 140,
      editable: true,
    },
    {
      field: "provisionAmount",
      headerName: "Provision Amount",
      width: 100,
      editable: true,
    },
    {
      field: "typeOfPurchase",
      headerName: "Type Of Purchase",
      width: 80,
      editable: true,
    },

    {
      field: "reasonOfPurchase",
      headerName: "Reason Of Purchase",
      width: 140,
      editable: true,
    },
    {
      field: "purchaseDescription",
      headerName: "Purchase Description",
      width: 140,
      editable: true,
    },

    {
      field: "purchaseDate",
      headerName: "Purchase Date",
      width: 100,
      editable: true,
    },
    {
      field: "submissionDate",
      headerName: "Submission Date",
      width: 100,
      editable: true,
    },
    {
      field: "approvalRemarks",
      headerName: "Approval Remarks",
      width: 140,
      editable: true,
    },
    {
      field: "hodApproval",
      headerName: "HOD Approval Status",
      width: 100,
      editable: true,
    },
    {
      field: "hodRemarks",
      headerName: "HOD Remarks",
      width: 140,
      editable: true,
    },
    {
      field: "hodAapprovalDate",
      headerName: "HOD Aapproval Date",
      width: 160,
      editable: true,
    },
    {
      field: "finalApproval",
      headerName: "Final Approval Status",
      width: 100,
      editable: true,
    },
    {
      field: "finalRemarks",
      headerName: "Final Remarks",
      width: 140,
      editable: true,
    },
    {
      field: "finalApprovalDate",
      headerName: "Final Approval Date",
      width: 160,
      editable: true,
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
        `http://13.126.160.155:8088/bill/purchaseApproval/get/data/purchase/approval/employeeCode?employeeCode=${EMPCODE}`
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
          color="success"   onClick={handleapprovalfrom}>Add Aproval item</Button>
          </Box>
      <Box
        p={0.5}
        sx={{
          height: 620,
          width: "100%",
          backgroundColor: "#f2f2f2",
          minHeight: "600px",
          maxHeight: "100%",
        }}
      >
        <DataGrid
          rows={approvalUserDatatabledata}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[500]}
          components={{ Toolbar: GridToolbar }}
          rowHeight={32}
        />
      </Box>
    </>
  );
}

export default ApprovalUserDataTable;
