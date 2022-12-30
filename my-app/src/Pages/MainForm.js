import React ,{useState, useEffect}from 'react'
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
function MainForm() {

const[empcode,setEmpCode]= useState("");
const[empName,setEmpName]=useState("");
const[empEmail,setEmail]=useState("");
const[InvoiceNumber,setInvoiceNumber]=useState("");
const [ brand, setBrand] = React.useState("");
const [value, setValue] = React.useState(null);
const [brandDD,setBrandDD]=useState([]);
const[payDirectCardDetails, setPayDirectCardDetails]=useState("");
const[expenseCategory,setExpenseCategory]=useState("");
const[ customerCode,setCustomerCode] =useState("");
const[ customerName,setCustomerName] =useState("");
const[invoiceDescription,setInvoiceDescription]=useState("");
const[serviceCategory,setServiceCategory]=useState("");
const[invoiceAttachment,setInvoiceAttachment]=useState("");
const[paymentStatus,setPaymentStatus]=useState("");
const[tDSType,setTDSType]=useState("");
const[tDSAmount,setTDSAmount]=useState("");
const[preTaxAmount, setPreTaxAmount]=useState("");
const[totalAmount , setTotalAmount]=useState("");
const[invoiceDate,setInvoiceDate]=useState("");

const handleSubmit =()=>{
    alert("hii")

  console.log("data ",empcode,empName,empEmail,InvoiceNumber,
  payDirectCardDetails,
  expenseCategory,
  customerCode,
  customerName,
  serviceCategory,
  invoiceDescription,
  invoiceAttachment,
  paymentStatus,
  tDSType,
  tDSAmount,
  preTaxAmount,
  totalAmount,
  invoiceDate
  )




}
// useEffect(() => {
//   const getData = async()=>{
//   let response2 = await fetch(`http://localhost:8082/bill/dropdown/getSubBrand/${"pinch"}`)
//   let data2 = await response2.json()
//   setBrandDD(data2)
//   console.log("data2",data2)
//   }
//   getData()
//  }, [])

  return (
    <>
    <Box p={5} sx={{ display:"flex",gap:"20px" , flexWrap:'wrap', }}> 

    <TextField sx={{ width: 300 }} id="outlined-basic" label="Employee Code" variant="outlined" onChange={(e) => setEmpCode(e.target.value)}
 value={empcode} />

    <TextField sx={{ width: 300 }} id="outlined-basic" label="Employee Name" variant="outlined" onChange={(e) => setEmpName(e.target.value)}
 value={empName}
  />

    <TextField sx={{ width: 300 }} id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}
 value={empEmail} />

    <TextField sx={{ width: 300 }} id="outlined-basic" label="Invoice Number" variant="outlined"  onChange={(e) => setInvoiceNumber(e.target.value)}
 value={InvoiceNumber}
 />
     

    <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Invoice Date"
             value={invoiceDate}
              onChange={(newValue) => {
               setInvoiceDate(newValue);
              }}
              renderInput={(params) => (
                <TextField required {...params} size="medium" sx={{ width: 300, color:"black" }} />
              )}
            />
          </LocalizationProvider>


    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={brandDD}
 getOptionLabel={(option) => option}
 onChange={(event, newValue) => {
 setBrand(newValue.brand);
 }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Brand" />}
    />
     
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Sub Brand" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Department" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Category" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Sub Category1" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Sub Category2" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Expense Type" />}
    />
   <TextField sx={{ width: 300 }} id="outlined-basic" label="Pre Tax Amount" variant="outlined" onChange={(e) => setPreTaxAmount(e.target.value)}
 value={preTaxAmount} />
     <TextField sx={{ width: 300 }} id="outlined-basic" label="Total Amount" variant="outlined" onChange={(e) => setTotalAmount(e.target.value)}
 value={totalAmount} />
    
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="GST Applicable" />}
    />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="TDS Type" variant="outlined" onChange={(e) => setTDSType(e.target.value)}
 value={tDSType} />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="TDS Amount" variant="outlined" onChange={(e) => setTDSAmount(e.target.value)}
 value={tDSAmount}/>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Payment Mode" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Payment Method" />}
    />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Pay Direct Card Details" variant="outlined" onChange={(e) => setPayDirectCardDetails(e.target.value)}
 value={payDirectCardDetails}/>
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Expense Category" variant="outlined" onChange={(e) => setExpenseCategory(e.target.value)}
 value={expenseCategory}/>
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Partner/Customer Code" variant="outlined" onChange={(e) => setCustomerCode(e.target.value)}
 value={customerCode} />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Partner/Customer Name" variant="outlined" onChange={(e) => setCustomerName(e.target.value)}
 value={customerName} />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Invoice Description" variant="outlined" onChange={(e) => setInvoiceDescription(e.target.value)}
 value={invoiceDescription} />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Service Category" variant="outlined" onChange={(e) => setServiceCategory(e.target.value)}
 value={serviceCategory}/>
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Invoice Attachment" variant="outlined" onChange={(e) => setInvoiceAttachment(e.target.value)}
 value={invoiceAttachment}/>
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Payment Status" variant="outlined" onChange={(e) => setPaymentStatus(e.target.value)}
 value={paymentStatus} />
     <Button onClick={handleSubmit} sx={{ width: 300 }}  variant="contained" color="success">Add Items</Button>

    </Box>
    
    </>
  )
}

export default MainForm ;

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]