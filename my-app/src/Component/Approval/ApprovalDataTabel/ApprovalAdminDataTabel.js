import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid,GridEventListener ,useGridApiEventHandler,GridToolbar} from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';

function ApprovalAdminDataTabel() {

    const columns = [
        {
            field: 'approvalId',
            headerName: ' Approval Id',
            width: 70,
            editable: true,
          },
        {
          field: 'employeeName',
          headerName: 'Employee Name',
          width: 110,
          editable: true,
        },
        {
          field: 'employeeCode',
          headerName: 'Employee Code',
          width: 80,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 110,
          editable: true,
        },
        {
            field: 'reportingManager',
            headerName: 'Reporting Manager',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 110,
    
          },
         
          {
            field: 'brand',
            headerName: 'Brand',
            width: 100,
            editable: true,
          },
          {
            field: 'subBrand',
            headerName: 'Sub Brand',
            width: 110,
            editable: true,
          },
          {
            field: 'department',
            headerName: 'Department',
            width: 130,
            editable: true,
          },
          {
            field: 'location',
            headerName: 'Location',
            width: 140,
            editable: true,
          },
        {
            field: 'provisionAmount',
            headerName: 'Provision Amount',
            width: 130,
            editable: true,
          },
          {
            field: 'typeOfPurchase',
            headerName: 'Type Of Purchase',
            width: 140,
            editable: true,
          },
         
          {
            field: 'reasonOfPurchase',
            headerName: 'Reason Of Purchase',
            width: 140,
            editable: true,
          },
          {
            field: 'purchaseDescription',
            headerName: 'Purchase Description',
            width: 140,
            editable: true,
          },
          {
            field: 'purchaseDate',
            headerName: 'Purchase Date',
            width: 140,
            editable: true,
          },
          {
            field: 'submissionDate',
            headerName: 'Submission Date',
            width: 140,
            editable: true,
          },
          {
            field: 'approvalRemarks',
            headerName: 'Approval Remarks',
            width: 140,
            editable: true,
          },
        //   {
        //     field: 'showItem',
        //     headerName: '',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 100,
        //     type:"action",
        //      renderCell:()=><p style={{color:"blue",fontWeight:"600",cursor:"pointer"}}
        //      >Item Details</p>
           
        //   }, 
          {
            field: 'hodApproval',
            headerName: 'HOD Approval',
            width: 140,
            editable: true,
          },
          {
            field: 'hodRemarks',
            headerName: 'HOD Remarks',
            width: 140,
            editable: true,
          },
          {
            field: 'hodAapprovalDate',
            headerName: 'HOD Aapproval Date',
            width: 140,
            editable: true,
          },
          {
            field: 'finalApproval',
            headerName: 'Final Approval',
            width: 140,
            editable: true,
          },
          {
            field: 'finalRemarks',
            headerName: 'Final Remarks',
            width: 140,
            editable: true,
          },
          {
            field: 'finalApprovalDate',
            headerName: 'Final Approval Date',
            width: 140,
            editable: true,
          },
         
      ];




        let navigate = useNavigate();
    const [billtabledata, setBillTabledata] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        let dataTable = await fetch( 
          "http://13.126.160.155:8088/bill/purchaseApproval/get/data/all/purchase/approval"
          );
         let table = await dataTable.json();
         let adminTableData = await table.data;
         setBillTabledata(adminTableData?adminTableData:"");
      };
      fetchData();
    }, []);
     console.log("tabledata", billtabledata);
  return (
    <>
    
    <Box p={.5} sx={{ height: 680, width: '100%', backgroundColor:"#f2f2f2", minHeight:"685px", maxHeight:"100%"}}>
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
       // onCellClick={handleEvent}
        //============== On cell Click event =================
        //============== On Export Csv Click event ===========
        components={{ Toolbar: GridToolbar }}
        //==============On Export Csv Click event ============

      />
    </Box>
    
    </>
  )
}

export default ApprovalAdminDataTabel