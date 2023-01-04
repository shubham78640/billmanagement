import React ,{useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { useParams } from "react-router";
function UploadeDocuments() {
    const invbillid =localStorage.getItem("BillID");
    // const {invoicenumber} = useParams()
    const[invoiceAttachment,setInvoiceAttachment]=useState();

    const invNum =localStorage.getItem("InvoiceNumber");
    const invDate   = localStorage.getItem("InvoiceDate");
    const invname =localStorage.getItem("EmployeeName");

    let navigate = useNavigate();
    const handleonclick = ()=>{
        alert("Your Bill saved succesfully");
        localStorage.clear();
        navigate("/mainform")
      }
    const changeHandler = (event) => {
        setInvoiceAttachment(event.target.files[0]); 
      };
      
      console.log("setInvoiceAttachment",invoiceAttachment )

  return (
    <>
    <Box p={2}>
    <Box mt={3}  sx={{display:"flex", justifyContent:"space-between"}}>
<Box sx={{fontSize:"20px", fontWeight:"600"}}> Invoice Number :- {invNum}</Box>

<Box sx={{fontSize:"18px", fontWeight:"600"}}> Employee Name :- {invname}</Box>
</Box>
<Box sx={{fontSize:"14px", }}> Invoice Date :- {invDate}</Box>
<Box  mt={3}>
<input type="file"  name="file" onChange={changeHandler}/>
</Box>
<Box mt={3}>
<Button   color="success" variant="contained" sx={{}}onClick={handleonclick}>Submit Bill</Button>
</Box>
</Box> 
    </>
  )
}

export default UploadeDocuments