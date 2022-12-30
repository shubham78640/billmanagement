import React ,{useState, useEffect}from 'react'
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { Link } from 'react-router-dom';
import axios from 'axios';
function MainForm() {

const[empcode,setEmpCode]= useState("");
const[empName,setEmpName]=useState("");
const[empEmail,setEmail]=useState("");
const [subrand, setSubrand] = useState("")
const [location, setLocation] = useState("")
const [department, setDepartment] = useState("")
const [category, setCategory] = useState("")
const [subCategory1, setSubCategory1] = useState("")
const [subCategory2, setSubCategory2] = useState("")
const [expenseType, setExpenseType] = useState("")
const [paymentMethod, setPaymentMethod] = useState("")
const [paymentMode, setPaymentMode] = useState("")
const [] = useState("")
const[invoiceNumber,setInvoiceNumber]=useState("");
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
const [subbrandDD,setSubBrandDD]=useState([]);
const [locationDD,setLocationDD]=useState([]);
const [departmentDD,setDepartmentDD]=useState([]);
const [categoryDD,setCategoryDD]=useState([]);
const [subCategory1DD,setSubCategory1DD]=useState([]);
const [subCategory2DD,setSubCategory2DD]=useState([]);
const [expenseTypeDD,setExpenseTypeDD]=useState([]);
const [gSTApplicableDD,setGSTApplicableDD]=useState([]);
const [paymentModeDD,setPaymentModeDD]=useState([]);
const [paymentMethodDD,setPaymentMethodDD]=useState([]);

const handleSubmit = async()=>{
    alert("hii")

  console.log("data ",empcode,
{  empName,
  empEmail,
  invoiceNumber,
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
  invoiceDate,
paymentMethod,
paymentMode,
subrand,
brand,
location,
department,
category,
subCategory1,
subCategory2,
expenseType

}
  )
 
  try {
  let response = await axios.post(
  "http://localhost:8082/bill/bill/save", {
  "brand": "abc",
  "catagory": "abc",
  "department": "string",
  "email": empEmail,
  "employeeCode": empcode,
  "employeeName": empName,
  "expensesCategory": expenseCategory,
  "expensesType": "string",
  "gstapplicaiton": "string",
  "invoiceAttachment": "string",
  "invoiceDate": invoiceDate,
  "invoiceDescription": invoiceDescription,
  "invoiceNumber": invoiceNumber,
  "location": "string",
  "partnerCode": customerCode,
  "partnerName": customerName,
  "partnerStatus": paymentStatus,
  "payDirectCardDetails": payDirectCardDetails,
  "paymentMethod": "string",
  "paymentMode": "string",
  "preTaxAmount": preTaxAmount,
  "serviceCategory": "string",
  "subBrand": "string",
  "subCatagory1": "string",
  "subCatagory2": "string",
  "tdsamount": tDSAmount,
  "tdstpye": tDSType,
  "totalAmount": totalAmount
  }
  );
  alert("worker save successfully")
  console.log(response)
  
  
  } catch (error) {
  alert(error)
  }
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
 value={invoiceNumber}
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
      onChange={(event, newValue)=>{setSubrand(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Sub Brand" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      onChange={(event, newValue)=>{setLocation(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      onChange={(event, newValue)=>{setDepartment(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Department" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      onChange={(event, newValue)=>{setCategory(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Category" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}onChange={(event, newValue)=>{setSubCategory1(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Sub Category1" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      onChange={(event, newValue)=>{setSubCategory2(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Sub Category2" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      onChange={(event, newValue)=>{setExpenseType(newValue.label)}}
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
 value={tDSType}/>
 <TextField sx={{ width: 300 }} id="outlined-basic" label="TDS Amount" variant="outlined" onChange={(e) => setTDSAmount(e.target.value)}
 value={tDSAmount}/>
<Autocomplete
 disablePortal
 id="combo-box-demo"
 options={top100Films}
 sx={{ width: 300 }}
 onChange={(event, newValue)=>{setPaymentMode(newValue.label)}}
 renderInput={(params) => <TextField {...params} label="Payment Mode" />}
 />
 <Autocomplete
 disablePortal
 id="combo-box-demo"
 options={top100Films}
 sx={{ width: 300 }}
 onChange={(event, newValue)=>{setPaymentMethod(newValue.label)}}
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
    

     {/* <Link to={`/mainform/addItem/${invoiceNumber}`}> */}
      
      <Button sx={{ width: 300 }} onClick={handleSubmit}  variant="contained" color="success">Add Items</Button>
      
      {/* </Link> */}

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