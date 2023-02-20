import React, { useState, useEffect } from "react";
import {Box, Button} from "@mui/material";
import {
  DataGrid,
  GridEventListener,
  useGridApiEventHandler,
  GridToolbar,
} from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { MasterAPI } from "../../../AllData";

function ApprovalAdminDataTabel() {


     const handleEvent = (
    params, // GridRowParams
    event // MuiEvent<React.MouseEvent<HTMLElement>>
    // GridCallbackDetails
  ) => {
    if (params.field === "finalapproveStatus") {
      navigate(`/approvaladmindatatable/statusbyadmin/${params.row.approvalId}`);
    }

    if (params.field === "hodapproveStatus") {
        navigate(`/approvaladmindatatable/statusbyhod/${params.row.approvalId}`);
      }
   
    if (params.field === "approvalpaymentupdate") {
        navigate(`/approvaladmindatatable/updatepayment/${params.row.approvalId}`);
      }

  };

  const ReportingManager = localStorage.getItem("reportingManager");
  const columns = [
    {
      field: "approvalId",
      headerName: "Approval Id",
      width:120,
      editable: true,
      description:"",
    },
    {
      field: "employeeName",
      headerName: "Employee Name",
      width: 110,
      editable: true,
      description:"",
    },
    {
      field: "employeeCode",
      headerName: "Employee Code",
      width: 80,
      editable: true,
      description:"",
    },
    {
      field: "email",
      headerName: "Email",
      width: 110,
      type: "text",
      editable: true,
      description:"Email",
    },
    {
      field: "reportingManager",
      headerName: "Reporting Manager",
      sortable: true,
      width: 110,
      description:"Reporting Manager",
    },

    {
      field: "brand",
      headerName: "Brand",
      width: 80,
      editable: true,
      description:"Brand",
    },
    {
      field: "subBrand",
      headerName: "Sub Brand",
      width: 100,
      editable: true,
      description:"Sub Brand",
    },
    {
      field: "department",
      headerName: "Department",
      width: 130,
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
      width: 130,
      editable: true,
      description:"Provision Amount",
    },
    {
      field: "typeOfPurchase",
      headerName: "Type Of Purchase",
      width: 140,
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
      width: 140,
      editable: true,
      description:"Purchase Date",
    },
    {
      field: "submissionDate",
      headerName: "Submission Date",
      width: 140,
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
      headerName: "HOD Approval",
      width: 140,
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
      headerName: "Final Approval",
      width: 140,
      editable: true,
      description:"Final Approval Status",
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
      
  {
      field: "hodapproveStatus",
      headerName: "HOD Approval",
      description: "HOD Approval",
      sortable: false,
      width: 145,
      type: "action",
      renderCell: () => (
        <p style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}>
         Approval
        </p>
      ),
    },
      {
      field: "finalapproveStatus",
      headerName: "Final Approval",
      description: "Final Approval",
      sortable: false,
      width: 145,
      type: "action",
      renderCell: () => (
        <p style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}>
          Approval
        </p>
      ),
    },

    {
        field: "approvalpaymentupdate",
        headerName: "Payment Approval",
        description: "Payment Approval",
        sortable: false,
        width: 157,
        type: "action",
        renderCell: () => (
          <p style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}>
            Approval Payment 
          </p>
        ),
      },
  

  ];

  let navigate = useNavigate();
  const [approvalAdminDatatabledata, setApprovalAdminDatatabledata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let dataTable = await fetch(
        `${MasterAPI}/bill/purchaseApproval/get/data/all/purchase/approval`
      );
      let table = await dataTable.json();
      let adminTableData = await table.data;
      setApprovalAdminDatatabledata(adminTableData ? adminTableData : "");
    };
    fetchData();
  }, []);

  const handleapprovalfrom =()=>{
    navigate("/approvalform")
  }

  console.log("tabledata", approvalAdminDatatabledata);
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
          minHeight: "620px",
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
          rows={approvalAdminDatatabledata}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[500]}
          components={{ Toolbar: GridToolbar }}
          rowHeight={28}
          onCellClick={handleEvent}
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
        //   isCellEditable={(params) => (params.row.hodApproval === "") }
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
        
        experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
}

export default ApprovalAdminDataTabel;
