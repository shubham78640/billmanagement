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
import { useNavigate } from "react-router-dom";
function MainForm() {

  const[billId,setBillID]=useState("")
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
const [gstAmount,setGSTAmount]=useState("")
const[paymentStatus,setPaymentStatus]=useState("");
const[tDSType,setTDSType]=useState("");
const[tDSAmount,setTDSAmount]=useState("");
const[preTaxAmount, setPreTaxAmount]=useState("");
const[totalAmount , setTotalAmount]=useState("");
const[invoiceDate,setInvoiceDate]=useState("");
const [gSTApplicable,setGSTApplicable]=useState("");
const[reportingManager,SetReportingManager]=useState("")
const[paymentCycle,setPaymentCycle]=useState("")
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


const invbillid =localStorage.getItem("BillID");
const totelAmountofbill =((+preTaxAmount)+(+gstAmount));
let navigate = useNavigate();
const handleSubmit = async()=>{
    alert("hii")
  console.log("data ",empcode,
{ 
   empName,
  empEmail,
  invoiceNumber,
  payDirectCardDetails,
  expenseCategory,
  customerCode,
  customerName,
  serviceCategory,
  invoiceDescription,
  paymentStatus,
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
expenseType,
reportingManagerData,
gstAmount,
totelAmountofbill,
paymentCycle


}
  )
 
  try {
  let response = await axios.post(
  "http://localhost:8082/bill/bill/save", {
  "brand": brand,
  "catagory": category,
  "department": department,
  "email": empEmail,
  "employeeCode": empcode,
  "employeeName": empName,
  "expensesCategory": expenseCategory,
  "expensesType": expenseType,
  "gstAmount": gstAmount,
  "invoiceDate": invoiceDate,
  "invoiceDescription": invoiceDescription,
  "invoiceNumber": invoiceNumber,
  "location": location,
  "partnerCode": customerCode,
  "partnerName": customerName,
  "payDirectCard": payDirectCardDetails,
  "paymentMethod": paymentMethod,
  "paymentMode": paymentMode,
  "preTaxAmount": preTaxAmount,
  "serviceCategory": serviceCategory,
  "subBrand": subrand,
  "subCatagory1": subCategory1,
  "subCatagory2": subCategory2,
  "totalAmount": totelAmountofbill,
  "reportingManager": reportingManager,
  "paymentCycle": paymentCycle,
  "userType": "ADMIN",


  }
  );
  alert("worker save successfully")
  localStorage.setItem("BillID",response.data.data.invoiceId)
  {navigate(`/mainform/addItem`)}
  localStorage.setItem("InvoiceNumber", invoiceNumber);  
  localStorage.setItem("InvoiceDate", invoiceDate);  
  localStorage.setItem("EmployeeName", empName);  
  localStorage.setItem("BillID",response.data.data.invoiceId)
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
    <Box p={5} sx={{ display:"flex",gap:"20px" , flexWrap:'wrap',}}> 

    <TextField sx={{ width: 300 }} id="outlined-basic" label="Employee Code" variant="outlined" onChange={(e) => setEmpCode(e.target.value)}
 value={empcode} />

    <TextField sx={{ width: 300 }} id="outlined-basic" label="Employee Name" variant="outlined" onChange={(e) => setEmpName(e.target.value)}
 value={empName}
  />

    <TextField sx={{ width: 300 }} id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}
 value={empEmail} />


<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={reportingManagerData}
 onChange={(event, newValue) => {
 SetReportingManager(newValue.label);
 }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Reporting Manager" />}
    />

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
      options={brand1}
 onChange={(event, newValue) => {
 setBrand(newValue.label);
 }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Brand" />}
    />
     
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={subbrand1}
      sx={{ width: 300 }}
      onChange={(event, newValue)=>{setSubrand(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Sub Brand" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={locationData}
      sx={{ width: 300 }}
      onChange={(event, newValue)=>{setLocation(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={departmentData}
      sx={{ width: 300 }}
      onChange={(event, newValue)=>{setDepartment(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Department" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={categoryData}
      sx={{ width: 300 }}
      onChange={(event, newValue)=>{setCategory(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Category" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={sub_Category1Data}
      sx={{ width: 300 }}onChange={(event, newValue)=>{setSubCategory1(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Sub Category1" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={sub_Category2Data}
      sx={{ width: 300 }}
      onChange={(event, newValue)=>{setSubCategory2(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Sub Category2" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={expenseTypedata}
      sx={{ width: 300 }}
      onChange={(event, newValue)=>{setExpenseType(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Expense Type" />}
    />

{/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={expenseTypedata}
      sx={{ width: 300 }}
      onChange={(event, newValue)=>{setExpenseType(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="GST Slab" />}
    /> */}
   <TextField sx={{ width: 300 }} id="outlined-basic" label="Pre Tax Amount" variant="outlined" onChange={(e) => setPreTaxAmount(e.target.value)}
 value={preTaxAmount} />
  <TextField sx={{ width: 300 }} id="outlined-basic" label="GST Amount" variant="outlined" onChange={(e) => setGSTAmount(e.target.value)}
 value={gstAmount}/>
     <TextField sx={{ width: 300 }}  disabled id="outlined-basic" label="Total Amount" variant="outlined"  InputLabelProps={{ shrink: true }} 
 value={totelAmountofbill} />
{/* <Autocomplete
 disablePortal
 id="combo-box-demo"
 options={gstApplicableData}
 sx={{ width: 300 }}
 onChange={(event, newValue)=>{setGSTApplicable(newValue.label)}}
 renderInput={(params) => <TextField {...params} label="GST Applicable" />}
 /> */}
 {/* <TextField sx={{ width: 300 }} id="outlined-basic" label="TDS Type" variant="outlined" onChange={(e) => setTDSType(e.target.value)}
 value={tDSType}/> */}
 {/* <TextField sx={{ width: 300 }} id="outlined-basic" label="TDS Amount" variant="outlined" onChange={(e) => setTDSAmount(e.target.value)}
 value={tDSAmount}/>

<TextField sx={{ width: 300 }} id="outlined-basic" label="Post TDS Amount" variant="outlined" onChange={(e) => setTDSAmount(e.target.value)}
 value={tDSAmount}/> */}

<Autocomplete
 disablePortal
 id="combo-box-demo"
 options={paymentcycleData}
 sx={{ width: 300 }}
 onChange={(event, newValue)=>{setPaymentCycle(newValue.label)}}
 renderInput={(params) => <TextField {...params} label="Payment Cycle" />}
 />
<Autocomplete
 disablePortal
 id="combo-box-demo"
 options={paymentMode1Data}
 sx={{ width: 300 }}
 onChange={(event, newValue)=>{setPaymentMode(newValue.label)}}
 renderInput={(params) => <TextField {...params} label="Payment Mode" />}
 />
 <Autocomplete
 disablePortal
 id="combo-box-demo"
 options={paymentMethodData}
 sx={{ width: 300 }}
 onChange={(event, newValue)=>{setPaymentMethod(newValue.label)}}
 renderInput={(params) => <TextField {...params} label="Payment Method" />}
 />
 <TextField sx={{ width: 300 }} id="outlined-basic" label="Pay Direct Card Details" variant="outlined" onChange={(e) => setPayDirectCardDetails(e.target.value)}
 value={payDirectCardDetails}/>
 {/* <TextField sx={{ width: 300 }} id="outlined-basic" label="Expense Category" variant="outlined" onChange={(e) => setExpenseCategory(e.target.value)}
 value={expenseCategory}/> */}

<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={expenseCatdata}
      sx={{ width: 300 }}
      onChange={(event, newValue)=>{setExpenseCategory(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="Expense Category" />}
    />
 <TextField sx={{ width: 300 }} id="outlined-basic" label="Partner/Customer Code" variant="outlined" onChange={(e) => setCustomerCode(e.target.value)}
 value={customerCode} />
 <TextField sx={{ width: 300 }} id="outlined-basic" label="Partner/Customer Name" variant="outlined" onChange={(e) => setCustomerName(e.target.value)}
 value={customerName} />
 <TextField sx={{ width: 300 }} id="outlined-basic" label="Invoice Description" variant="outlined" onChange={(e) => setInvoiceDescription(e.target.value)}
 value={invoiceDescription} />
 <TextField sx={{ width: 300 }} id="outlined-basic" label="Service Category" variant="outlined" onChange={(e) => setServiceCategory(e.target.value)}
 value={serviceCategory}/>
 {/* <TextField sx={{ width: 300 }} id="outlined-basic" label="Invoice Attachment" variant="outlined"
 
 //onChange={(e) => setInvoiceAttachment(e.target.value)}

//  value={invoiceAttachment}
 /> */}
 {/* <input type="file"  name="file" onChange={changeHandler}/> */}
 {/* <TextField sx={{ width: 300 }} id="outlined-basic" label="Payment Status" variant="outlined" onChange={(e) => setPaymentStatus(e.target.value)}
 value={paymentStatus} /> */}
    

      <Button sx={{ width: 300 }} onClick={handleSubmit}  variant="contained" color="success">Add Items</Button>

    </Box>
    
    </>
  )
}

export default MainForm;



const gstApplicableData = [
  { label: 'Yes'},
  { label: 'No'},
 
 
]
const subbrand1 = [
  { label: 'Pinch'},
  { label: 'Pinch D2C'},
  { label: 'Pinch B2B'},
  { label: 'Well Served'},
  { label: 'BO'},
  { label: 'RCC' },
  { label: 'CARE CREW'},
  { label: 'Gullak' },
  { label: '1 To Zee'},
 
]

const brand1 = [
  { label: 'Pinch' },
  { label: 'Well served'},
  { label: '1 To Zee' },
  { label: 'CARE CREW'},
 ]

 const locationData=[

  { label: 'Office - Gurgaon' },
  { label: 'Office - Mumbai'},
  { label: 'Office - Bangalore' },
  { label: 'Office - Lucknow'},
  { label: '1 To Zee - DLF Phase 1' },
  { label: 'Gullak Daycare - Chakkarpur'},
  { label: 'Well Served - DLF Phase 3' },
  { label: 'Well Served - DLF Phase 3'},
  { label: 'Well Served - Mumbai' },
  { label: 'Well Served - Powai'},
  { label: 'CC Office - Manesar' },
  { label: 'RCC - Delhi'},
  { label: 'HQ' },

 ]

 const paymentMode1Data=[
  { label: 'Cash' },
  { label: 'Bank Transfer'},
  { label: 'Debit Card' },
  { label: 'Credit Card'},
  { label: 'Mobile Payment' },
  { label: 'Cheque'},

 ]

 const paymentcycleData=[
  { label: '0 Days' },
  { label: '3 Days' },
  { label: '7 Days' },
  { label: '15 Days' },
  { label: '21 Days' },
  { label: '30 Days' },
  { label: '45 Days' },
  { label: '60 Days' },
 

 ]

 const paymentMethodData=[
  { label: 'Employee' },
  { label: 'Bank Transfer - Kotak'},
  { label: 'Bank Transfer - ICICI' },
  { label: 'Bank Transfer - Employee'},
  { label: 'Company Card' },
  { label: 'Employee Debit Card'},
  { label: 'Business Credit Card' },
  { label: 'Employee Credit Card'},
  { label: 'Paytm' },
  { label: 'PhonePe'},
  { label: 'Google Pay' },
  { label: 'BHIM'},
  { label: 'Company Cheque' },
  { label: 'Employee Cheque'},
 ]

 const departmentData=[

  { label: 'Marketing' },
  { label: 'HR'},
  { label: 'Admin' },
  { label: 'Procurement'},
  { label: 'Training & Audit' },
  { label: 'Finance'},
  { label: 'Technology' },
  { label: 'Operations'},

 ]

 const categoryData =[
  { label: 'Residents' },
  { label: 'Owners'},
  { label: 'Developers' },
  { label: 'Corporate'},
  { label: 'Brand' },
  { label: 'Talent Management'},
  { label: 'Remuneration' },
  { label: 'Employee Engagement'},
  { label: 'Office Utilities' },
  { label: 'Office Supplies'},
  { label: 'Repair & Maintenance' },
  { label: 'Travel Desk'},
  { label: 'Raw Material' },
  { label: 'Logistic'},
  { label: 'Sampling' },
  { label: 'Infrastructure'},
  { label: 'Daily Needs' },
  { label: 'Travel'},
  { label: 'Fees' },
  { label: 'Professional Fee'},
  { label: 'Software' },
  { label: 'Residents'},
  { label: 'Owners' },
  { label: 'Well Served'},
  { label: '1ToZee' },
  { label: 'Care Crew'},
  { label: 'Corporate' },
  {label:'Partnerships'}


 ]

 const sub_Category1Data =[
  { label: 'Digital Marketing' },
  { label: 'Print'},
  { label: 'Influencer Marketing' },
  { label: 'Event Management'},
  { label: 'Relationship Marketing' },
  { label: 'Public Relations'},
  { label: 'Consultancy Cost' },
  { label: 'Recruitment Drive'},
  { label: 'Job Portal' },
  { label: 'Fees'},
  { label: 'HRMS' },
  { label: 'Liasoning'},
  { label: 'Travel' },
  { label: 'Food'},
  { label: 'Rewards & Recognitions' },
  { label: 'Events'},
  { label: 'Rental' },
  { label: 'Electricity'},
  { label: 'Water' },
  { label: 'Asset'},
  { label: 'Refreshments' },
  { label: 'Uniform'},
  { label: 'Furniture' },
  { label: 'Housekeeping Supplies'},
  { label: 'Toiletries' },
  { label: 'Courier'},
  { label: 'Gardening'},
  { label: 'Fuel' },
  { label: 'Wear & Tear'},
  { label: 'Pest Control' },
  { label: 'Decoration'},
  { label: 'Tickets' },
  { label: 'Accomodation'},
  { label: 'Local Conveyance' },
  { label: 'Equipment' },
  { label: 'Kitchen Accessories'},
  { label: 'Groceries' },
  { label: 'Fruits & Vegetables'},
  { label: 'Dairy' },
  { label: 'Chemicals'},
  { label: 'Training Essentials' },
  { label: 'Conveyance'},
  { label: 'Licence'},
  { label: 'TDS' },
  { label: 'GST'},
  { label: 'PF/ESIC' },
  { label: 'Tool' },
  { label: 'Storage'},
  { label: 'Conceirge'},
  { label: 'Housekeeping'},
  { label: 'Food & Nuitrition' },
  { label: 'Wellness'},
  { label: 'Care' },
  { label: 'Experience'},
  { label: 'Repair & Maintenance' },
  { label: 'Training'},
  { label: 'Commission' },
  { label: 'Field Office'},
  { label: 'Business Development' },
  { label: 'Vegetables'},
  { label: 'Stationary' },
  { label: 'Toys'},
  { label: 'Logistics' },
  { label: 'Packaging'},
  { label: 'Delivery' },
 ]

 const sub_Category2Data =[
  { label: 'SEO' },
  { label: 'Email'},
  { label: 'SMS' },
  { label: 'Whatsapp'},
  { label: 'Social Media Marketing' },
  { label: 'Flyers'},
  { label: 'Newspaper' },
  { label: 'Standee'},
  { label: 'Canopy' },
  { label: 'Promo Table'},
  { label: 'Freelancers' },
  { label: 'Sampling'},
  { label: 'Promoters' },
  { label: 'Look Walkers'},
  { label: 'Charity' },
  { label: 'Media'},
  { label: 'Radio'},
  { label: 'Content' },
  { label: 'Blogs'},
  { label: 'Property Rent' },
  { label: 'Equipment Rental'},
  { label: 'Telecom Rental' },
  { label: 'Utensils'},
  { label: 'Electronic' },
  { label: 'Storage'},
  { label: 'Apron' },
  { label: 'Kitchen Dusters'},
  { label: 'Supply' },
  { label: 'Demand'},
  { label: 'Deployment' },


 ]


 const expenseTypedata =[
  { label: 'Company' },
  { label: 'Employee Reimbursement'},
  { label: 'Billable - Customer' },
  { label: 'Non Billable - Customer'},
  { label: 'Partner' },

 ]

 const expenseCatdata =[
  { label: 'One Time' },
  { label: 'Recurring'},

 ]

 const reportingManagerData =[

  { label: 'NMS Sir' },
  { label: 'Ravi Sir'},
  { label: 'AB Sir' },
  { label: 'Mayank Sir'},
  { label: 'Nitin Sir' },
 ]