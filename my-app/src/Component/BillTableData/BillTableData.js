import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import CsvDownloader from 'react-csv-downloader';

// columns={[
//     {
//       field: 'progress',
//       valueFormatter: ({ value }) => `${value * 100}%`,
//       renderCell: ({ value }) => <ProgressBar value={value} />,
//     },
//   ]},
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
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
      width: 110,
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
        width: 110,
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
        width: 110,
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
        width: 110,
        editable: true,
      },
      {
        field: 'payDirectCard',
        headerName: 'Pay Direct Card Details',
        width: 110,
        editable: true,
      },
      {
        field: 'partnerCode',
        headerName: 'Partner/Customer Code',
        width: 110,
        editable: true,
      },
      {
        field: 'partnerName',
        headerName: 'Partner/Customer Name',
        width: 110,
        editable: true,
      },
      {
        field: 'invoiceDescription',
        headerName: 'Invoice Description',
        width: 110,
        editable: true,
      },
      {
        field: 'serviceCategory',
        headerName: 'Service Category',
        width: 110,
        editable: true,
      },
    //   {
    //     field: 'email',
    //     headerName: 'Email',
    //     width: 110,
    //     editable: true,
    //   },
    // {
    //   field: 'reportingManager',
    //   headerName: 'Reporting Manager',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,

    // },
  ];
  
function BillTableData() {



    const [billtabledata, setBillTabledata] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        let dataTable = await fetch( 
          "http://localhost:8082/bill/bill/get/data/all"
          );
         let table = await dataTable.json();
         let adminTableData = await table.data;
         let cityData=  adminTableData;
         setBillTabledata(adminTableData);
        console.log(cityData)
      };
      fetchData();
    }, []);
     console.log("tabledata", billtabledata);
  return (
    <>
<Box sx={{ height: 900, width: '100%' }}>
      <DataGrid
        rows={billtabledata}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[500]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>

   

    </>
  )
}

export default BillTableData