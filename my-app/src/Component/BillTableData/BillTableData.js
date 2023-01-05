import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid,GridEventListener ,useGridApiEventHandler} from '@mui/x-data-grid';


import { useNavigate } from 'react-router-dom';
import TotelDataFetch from './TotelDataFetch';


// let id = "";




 



  
function BillTableData() {

    const handleEvent = (
        params, // GridRowParams
        event // MuiEvent<React.MouseEvent<HTMLElement>>
    // GridCallbackDetails
      ) => {
       //  navigate(`admin/${params.row.invoiceId}`)
      
       if(params.field==="showItem"){
     navigate(`admin/${params.row.invoiceId}`)
      }
      if(params.field==="updatePayment"){
        navigate(`/updatepagment/${params.row.invoiceId}`)
         }

      }


    const columns = [
        {
            field: 'invoiceId',
            headerName: ' Invoice Id',
            width: 150,
            editable: true,
          },
        {
          field: 'employeeName',
          headerName: 'Employee Name',
          width: 150,
          editable: true,
        },
        {
          field: 'employeeCode',
          headerName: 'Employee Code',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 170,
          editable: true,
        },
    
        {
            field: 'reportingManager',
            headerName: 'Reporting Manager',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
    
          },
          {
            field: 'invoiceNumber',
            headerName: 'Invoice Number',
            width: 170,
            editable: true,
          },
        {
            field: 'invoiceDate',
            headerName: 'Invoice Date',
            width: 150,
            editable: true,
          },
          {
            field: 'brand',
            headerName: 'Brand',
            width: 150,
            editable: true,
          },
          {
            field: 'subBrand',
            headerName: 'Sub Brand',
            width: 110,
            editable: true,
          },
    
          {
            field: 'subCatagory1',
            headerName: 'Sub Catagory 1',
            width: 150,
            editable: true,
          },
          {
            field: 'subCatagory2',
            headerName: 'Sub Catagory 2',
            width: 150,
            editable: true,
          },
          {
            field: 'location',
            headerName: 'Location',
            width: 150,
            editable: true,
          },
          {
            field: 'expensesType',
            headerName: 'Expenses Type',
            width: 110,
            editable: true,
          },
          {
            field: 'preTaxAmount',
            headerName: 'Pre Tax Amount',
            width: 170,
            editable: true,
          },
          {
            field: 'gstAmount',
            headerName: 'GST Amount',
            width: 110,
            editable: true,
          },
          {
            field: 'totalAmount',
            headerName: 'Total Amount',
            width: 110,
            editable: true,
          }, {
            field: 'paymentMode',
            headerName: 'Payment Mode',
            width: 110,
            editable: true,
          },
    
          {
            field: 'paymentMethod',
            headerName: 'Payment Method',
            width: 170,
            editable: true,
          },
          {
            field: 'payDirectCard',
            headerName: 'Pay Direct Card Details',
            width: 170,
            editable: true,
          },
          {
            field: 'partnerCode',
            headerName: 'Partner/Customer Code',
            width: 190,
            editable: true,
          },
          {
            field: 'partnerName',
            headerName: 'Partner/Customer Name',
            width: 190,
            editable: true,
          },
          {
            field: 'invoiceDescription',
            headerName: 'Invoice Description',
            width: 190,
            editable: true,
          },
          {
            field: 'serviceCategory',
            headerName: 'Service Category',
            width: 150,
            editable: true,
          },
          
          {
            field: 'transactionDetail',
            headerName: 'Transaction Detail',
            width: 150,
            editable: true,
          },
          {
            field: 'paidAmount',
            headerName: 'Update Paid Amount',
            width: 150,
            editable: true,
          },
          {
            field: 'utr',
            headerName: 'URT',
            width: 110,
            editable: true,
          },
          {
            field: 'taskId',
            headerName: 'Task Id',
            width: 170,
            editable: true,
          },
          {
            field: 'paymentStatus',
            headerName: 'paymentStatus',
            width: 110,
            editable: true,
          },
          {
            field: 'paymentDate',
            headerName: 'paymentDate',
            width: 110,
            editable: true,
          },
     
          {
            field: 'showItem',
            headerName: 'Items Details',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            type:"action",
             renderCell:()=><p style={{color:"blue",fontWeight:"600",cursor:"pointer"}}
             >Item Details</p>
           
          }, 
          {
            field: 'updatePayment',
            headerName: 'Update Payment',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            type:"action",
             renderCell:()=><p style={{color:"blue",fontWeight:"600",cursor:"pointer"}}
             >Update Payment</p>
           
          }, 
    
    

      ];
      

   
    
    let navigate = useNavigate();
    const [billtabledata, setBillTabledata] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        let dataTable = await fetch( 
          "http://localhost:8082/bill/bill/get/data/all"
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
<Box p={.5} sx={{ height: 720, width: '100%' }}>
      <DataGrid
        rows={billtabledata}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[500]}
        // checkboxSelection
        // disableSelectionOnClick
       // experimentalFeatures={{ newEditingApi: true }}    (rows)=>{setid(rows.email}
        //  onRowClick={handleEvent}
        onCellClick={handleEvent}
      />
    </Box>

   

    </>
  )
}

export default BillTableData