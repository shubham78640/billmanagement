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

const handleSubmit =()=>{

  console.log("data ",empcode,empName,empEmail,InvoiceNumber)




}
useEffect(() => {
  const getData = async()=>{
  let response2 = await fetch(`http://localhost:8082/bill/dropdown/getSubBrand/${"pinch"}`)
  let data2 = await response2.json()
  setBrandDD(data2)
  console.log("data2",data2)
  }
  getData()
 }, [])

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
             // value={birthday}
            //   onChange={(newValue) => {
            //     (newValue);
            //   }}
              renderInput={(params) => (
                <TextField required {...params} size="medium" sx={{ width: 300 }} />
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
   <TextField sx={{ width: 300 }} id="outlined-basic" label="Pre Tax Amount" variant="outlined" />
     <TextField sx={{ width: 300 }} id="outlined-basic" label="Total Amount" variant="outlined" />
    
<<<<<<< HEAD
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="GST Applicable" />}
    />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="TDS Type" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="TDS Amount" variant="outlined" />
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
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Pay Direct Card Details" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Expense Category" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Partner/Customer Code" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Partner/Customer Name" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Invoice Description" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Service Category" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Invoice Attachment" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Payment Status" variant="outlined" />
     <Button sx={{ width: 300 }}  variant="contained" color="success">Add Items</Button>
=======
     <Button onClick={handleSubmit} sx={{ width: 300 }}  variant="contained" color="success">Add Items</Button>
>>>>>>> 6622b55c1b49f16109d54355b80f707d2fe3670c

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