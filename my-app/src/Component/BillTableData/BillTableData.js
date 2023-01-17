import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridEventListener,
  useGridApiEventHandler,
  GridToolbar,
} from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";

function BillTableData() {
  const [idMM, setIDMM] = useState("");
  const handleEvent = (
    params, // GridRowParams
    event // MuiEvent<React.MouseEvent<HTMLElement>>
    // GridCallbackDetails
  ) => {
    //  navigate(`admin/${params.row.invoiceId}`)

    if (params.field === "showItem") {
      navigate(`/billtable/admin/${params.row.invoiceId}`);
    }
    if (params.field === "updatePayment") {
      navigate(`/billtable/updatepagment/${params.row.invoiceId}`);
    }
    if (params.field === "showBill") {
      setIDMM(params.row.invoiceId);
      // navigate(`${params.row.invoiceId}`)
    }

    if (params.field === "invoiceStatusupdate") {
      navigate(`/billtable/updatestatusremark/${params.row.invoiceId}`);
    }
  };
  const columns = [
    {
      field: "invoiceId",
      headerName: " Invoice Id",
      width: 70,
      editable: true,
    },
    {
      field: "employeeName",
      headerName: "Employee Name",
      width: 110,
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
      field: "invoiceNumber",
      headerName: "Invoice Number",
      width: 130,
      editable: true,
    },
    {
      field: "invoiceDate",
      headerName: "Invoice Date",
      width: 130,
      editable: true,
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 100,
      editable: true,
    },
    {
      field: "subBrand",
      headerName: "Sub Brand",
      width: 110,
      editable: true,
    },

    {
      field: "subCatagory1",
      headerName: "Sub Catagory 1",
      width: 140,
      editable: true,
    },
    {
      field: "subCatagory2",
      headerName: "Sub Catagory 2",
      width: 140,
      editable: true,
    },
    {
      field: "location",
      headerName: "Location",
      width: 140,
      editable: true,
    },
    {
      field: "expensesType",
      headerName: "Expense Type",
      width: 140,
      editable: true,
    },
    {
      field: "preTaxAmount",
      headerName: "Pre Tax Amount",
      width: 100,
      editable: true,
    },
    {
      field: "gstAmount",
      headerName: "GST Amount",
      width: 100,
      editable: true,
    },
    {
      field: "totalAmount",
      headerName: "Total Amount",
      width: 100,
      editable: true,
    },
    {
      field: "paymentMode",
      headerName: "Payment Mode",
      width: 120,
      editable: true,
    },
    {
      field: "paymentDate",
      headerName: "paymentDate",
      width: 100,
      editable: true,
    },
    {
      field: "paymentCycle",
      headerName: "Payment Cycle",
      width: 70,
      editable: true,
    },
    {
      field: "payDirectCard",
      headerName: "Pay Direct Card Details",
      width: 120,
      editable: true,
    },
    {
      field: "partnerNameCode",
      headerName: "Partner/Customer Name",
      width: 120,
      editable: true,
    },
    {
      field: "otherPartner",
      headerName: "New Partner/Customer",
      width: 110,
      editable: true,
    },

    {
      field: "invoiceDescription",
      headerName: "Invoice Description",
      width: 130,
      editable: true,
    },
    {
      field: "utr",
      headerName: "UTR",
      width: 80,
      editable: true,
    },
    {
      field: "taskId",
      headerName: "Task ID",
      width: 80,
      editable: true,
    },
    {
      field: "serviceCategory",
      headerName: "Service Category",
      width: 120,
      editable: true,
    },

    {
      field: "transactionDetail",
      headerName: "Transaction Detail",
      width: 120,
      editable: true,
    },
    {
      field: "paidAmount",
      headerName: "Update Paid Amount",
      width: 80,
      editable: true,
    },

    {
      field: "paymentStatus",
      headerName: "Payment Status",
      width: 70,
      editable: true,
    },
    {
      field: "reimbursementDate",
      headerName: "Reimbursement Date",
      width: 100,
      editable: true,
    },

    {
      field: "invoiceStatus",
      headerName: "Invoice Status",
      width: 180,
      editable: true,
    },
    {
      field: "showBill",
      headerName: "Show Bill",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
      type: "action",
      renderCell: () => (
        <a
          style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}
          href={`http://13.126.160.155:8088/bill/files/get/file/?invoiceId=${idMM}`}
          target="_blank"
        >
          Show Bill
        </a>
      ),
    },

    {
      field: "showItem",
      headerName: "Items Details",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
      type: "action",
      renderCell: () => (
        <p style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}>
          Item Details
        </p>
      ),
    },
    {
      field: "updatePayment",
      headerName: "Update Payment",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 130,
      type: "action",
      renderCell: () => (
        <p style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}>
          Update Payment
        </p>
      ),
    },
    {
      field: "invoiceStatusupdate",
      headerName: "Invoice Status",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 130,
      type: "action",
      renderCell: () => (
        <p style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}>
          Invoice Status
        </p>
      ),
    },
  ];

  let navigate = useNavigate();
  const [billtabledata, setBillTabledata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let dataTable = await fetch(
        "http://13.126.160.155:8088/bill/bill/get/data/all"
      );
      let table = await dataTable.json();
      let adminTableData = await table.data;
      setBillTabledata(adminTableData ? adminTableData : "");
    };
    fetchData();
  }, []);
  console.log("tabledata", billtabledata);
  const [pageSize, setPageSize] = React.useState(5);

  return (
    <>
      <Box
        p={0.5}
        sx={{
          height: 680,
          width: "100%",
          backgroundColor: "#f2f2f2",
          minHeight: "685px",
          maxHeight: "100%",
        }}
      >
        <DataGrid
          rows={billtabledata}
          columns={columns}
          //====================Old Pagination code==========
          pageSize={100}
          rowsPerPageOptions={[500]}
          //====================New Pagination code============
          //     rowsPerPageOptions={[5, 10, 20]}
          //     pageSize={pageSize}
          //    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          //====================New Pagination Code End========
          // checkboxSelection
          // disableSelectionOnClick
          // experimentalFeatures={{ newEditingApi: true }}    (rows)=>{setid(rows.email}
          //==============On Row Click event ===================
          //  onRowClick={handleEvent}
          //==============On Row Click event ===================
          //==============On Cell Click event ==================
          onCellClick={handleEvent}
          //============== On cell Click event =================
          //============== On Export Csv Click event ===========
          components={{ Toolbar: GridToolbar }}
          //==============On Export Csv Click event ============
          rowHeight={26}
        />
      </Box>
    </>
  );
}

export default BillTableData;
