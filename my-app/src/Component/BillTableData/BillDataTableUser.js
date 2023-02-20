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
import { MasterAPI } from "../../AllData";
function BillDataTableUser() {
  const [idMM, setIDMM] = useState("");

  const handleEvent = (
    params, // GridRowParams
    event // MuiEvent<React.MouseEvent<HTMLElement>>
    // GridCallbackDetails
  ) => {
    //  navigate(`admin/${params.row.invoiceId}`)

    if (params.field === "showItem") {
      navigate(`/billtabledatauser/user/${params.row.invoiceId}`);
    }

    if (params.field === "showBill") {
      setIDMM(params.row.invoiceId);
      // navigate(`${params.row.invoiceId}`)
    }
  };
  const columns = [
    {
      field: "invoiceId",
      headerName: " Invoice Id",
      width: 70,
      editable: true,
      description:"Invoice Id",
    },
     {
      field: "invoiceType",
      headerName: "Invoice Type",
      width: 100,
      editable: true,
      description:"Invoice Type",
    },
    {
      field: "employeeName",
      headerName: "Employee Name",
      width: 110,
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
      editable: true,
      width: 110,
    },
    {
      field: "invoiceNumber",
      headerName: "Invoice Number",
      width: 130,
      editable: true,
      description:"Invoice Number",
    },
    {
      field: "invoiceDate",
      headerName: "Invoice Date",
      width: 130,
      editable: true,
      description:"Invoice Date",
    },
      {
      field: "paymentStatus",
      headerName: "Payment Status",
      width: 120,
      editable: true,
      description:"Payment Status",
    },
    {
      field: "paymentDate",
      headerName: "Payment Date",
      width: 120,
      editable: true,
      description:"Payment Date",
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 100,
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
      field: "subCatagory1",
      headerName: "Sub Catagory 1",
      width: 140,
      editable: true,
      description:"Sub Catagory 1",
    },
    {
      field: "subCatagory2",
      headerName: "Sub Catagory 2",
      width: 140,
      editable: true,
      description:"Sub Catagory 2",
    },
     {
      field: "utrMendatory",
      headerName: "UTR Mendatory",
      width: 120,
      editable: true,
      description:"UTR Mendatory",
    },
 {
      field: "tdsApplicable",
      headerName: "TDS Applicable",
      width: 100,
      editable: true,
      description:"TDS Applicable",
    },
      {
      field: "gstApplicable",
      headerName: "GST Applicable",
      width: 100,
      editable: true,
      description:"GST Applicable",
    },
    {
      field: "tdsPercentage",
      headerName: "TDS Percentage",
      width: 120,
      editable: true,
      description:"TDS Percentage",
    },

    {
      field: "tdsAmount",
      headerName: "TDS Amount",
      width: 120,
      editable: true,
      description:"TDS Amount",
    },
    {
      field: "location",
      headerName: "Location",
      width: 140,
      editable: true,
      description:"Location",
    },
    {
      field: "expensesType",
      headerName: "Expense Type",
      width: 140,
      editable: true,
      description:"Expense Type",
    },
    {
      field: "preTaxAmount",
      headerName: "Pre Tax Amount",
      width: 100,
      editable: true,
      description:"Pre Tax Amount",
    },
    {
      field: "gstAmount",
      headerName: "GST Amount",
      width: 100,
      editable: true,
      description:"GST Amount",
    },
    {
      field: "totalAmount",
      headerName: "Total Amount",
      width: 100,
      editable: true,
      description:"Total Amount",
    },
     {
      field: "netAmount",
      headerName: "Net Amount",
      width: 100,
      editable: true,
      description:"Net Amount",
    },
    {
      field: "paymentMode",
      headerName: "Payment Mode",
      width: 120,
      editable: true,
      description:"Payment Mode",
    },
      {
      field: "paymentMethod",
      headerName: "Payment Method",
      width: 120,
      editable: true,
      description:"Payment Method",
    }, 
    {
      field: "payDirectCard",
      headerName: "Pay Direct Card Details",
      width: 120,
      editable: true,
      description:"Pay Direct Card Details",
    },
    {
      field: "partnerNameCode",
      headerName: "Partner/Customer Name",
      width: 120,
      editable: true,
      description:"Partner/Vendor Name",
    },
    {
      field: "otherPartner",
      headerName: "New Partner/Customer",
      width: 110,
      editable: true,
      description:"New Partner/Vendor",
    },
    {
      field: "invoiceDescription",
      headerName: "Invoice Description",
      width: 130,
      editable: true,
      description:"Invoice Description",
    },
    {
      field: "serviceCategory",
      headerName: "Service Category",
      width: 120,
      editable: true,
      description:"Service Category",
    },

      {
      field: "invoiceStatus",
      headerName: "Invoice Status",
      width: 180,
      editable: true,
      description:"Invoice Status",
    },
    {
      field: "showBill",
      headerName: "Show Bill",
      description: "Show Bill",
      sortable: false,
      width: 100,
      type: "action",
      renderCell: () => (
        <a
          style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}
          href={`${MasterAPI}/bill/files/get/file/?invoiceId=${idMM}`}
          target="_blank"
        >
          Show Bill
        </a>
      ),
    },

    {
      field: "showItem",
      headerName: "Items Details",
      description: "Items Details",
      sortable: false,
      width: 100,
      type: "action",
      renderCell: () => (
        <p style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}>
          Item Details
        </p>
      ),
    },
  ];
  const EMPCODE = localStorage.getItem("employeeCode");
  let navigate = useNavigate();
  const [billtabledataUser, setBillTabledataUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let dataTable = await fetch(
        `${MasterAPI}/bill/bill/get/data/${EMPCODE}`
      );
      let table = await dataTable.json();
      let adminTableData = await table.data;
      setBillTabledataUser(adminTableData ? adminTableData : "");
    };
    fetchData();
  }, []);
  console.log("tabledata", billtabledataUser);

  return (
    <>
      <Box p={1} sx={{ marginLeft: { sm: "85%", xs: "auto" } }}>
        <Link style={{ fontWeight: "600", color: "white" }} to="/mainform">
          <Button
            color="success"
            variant="contained"
            sx={{ width: "170px" }}
            size="small"
          >
            Add Bill
          </Button>
        </Link>
      </Box>

      <Box
        p={0.5}
        sx={{
          height: 636,
          width: "100%",
          backgroundColor: "#f2f2f2",
          minHeight: "636px",
          maxHeight: "100%",
                '& .MuiDataGrid-cell--editable': {
            bgcolor: (theme) =>
            '#DD6464',
            color: (theme) =>
            '#EFEFEF',
          },
       
        }}
      >
        <DataGrid
          rows={billtabledataUser}
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
          isCellEditable={(params) => (params.row.invoiceStatus === "Reject") }
        />
      </Box>
    </>
  );
}

export default BillDataTableUser;
