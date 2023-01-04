import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddItems() {
    const [category, setCategory] = useState("")
    const [itemName, setItemName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [rate, setRate] = useState("")
    const [amount, setAmount] = useState("")
    const [sgst, setSgst] = useState("")
    const [cgst, setCgst] = useState("")
    const [igst, setIgst] = useState("")
    const [discount, setDiscount] = useState("")
    const [redeem, setRedeem] = useState("")
    const [unit,setUnit]=useState("")
    const [amountPaid, setAmountpaid] = useState("")
    const[itemCode,setItemCode]=useState("")
    const[hsnCode,setHSNCode]=useState("");
    const[gstAmount,setGstAmount]=useState("");
    const {invoicenumber} = useParams()
    const [tDSAmount,setTDSAmount]=useState("")


    console.log({ sgst, cgst, igst})


    const invbillid =localStorage.getItem("BillID");
    const invNum =localStorage.getItem("InvoiceNumber");
    const invDate   = localStorage.getItem("InvoiceDate");
    const invname =localStorage.getItem("EmployeeName");


    console.log("data from there",invNum,invDate,invname)
    let navigate = useNavigate();
const handleonclick = ()=>{

 


  alert("Please Uploade Your Documents");
navigate(`/uploadeDocuments`)
}
const amount1=(+quantity)*(+rate);
const tDSAmountTotel = (((+amount1)*(+tDSAmount))/100);
const gsttotelvalue= ( ((+amount1)*(+sgst))/100) + ( ((+amount1)*(+cgst))/100 )  +  (((+amount1)*(+igst))/100);
const totelItemAmount =(+amount1)+(+gsttotelvalue)-(+discount)-(+redeem);
console.log("totelAmount",totelItemAmount)
    const handleSubmit = async() =>{
        console.log({invoicenumber, category, itemName, quantity, rate, amount,itemCode, unit, 
      sgst, cgst, igst, discount, redeem, totelItemAmount,hsnCode,gstAmount})


        try{
          let response = await axios.post(
            "http://localhost:8082/bill/item/save", {
            "amount": amount1,
            "amountPaid": totelItemAmount,
            "category": category,
            "cgst": cgst,
            "dateOfInvoice": invDate,
            "discount": discount,
            "gstAmount": gsttotelvalue,
            "igst": igst,
            "invoiceNumber": invNum,
            "itemCode": itemCode,
            "itemName": itemName,
            "quantity": quantity,
            "rate": rate,
            "redeemed": redeem,
            "unit": unit,
            "sgst": sgst,
            "tds": tDSAmount,
            "tdsAmount": tDSAmountTotel,

   

          }
          );
          alert("Item save successfully")
          console.log(response)
        }
       catch (error) {
        alert(error)
        }

    }


  return (
    <>
    <Box mt={4} gap={3} sx={{display:"flex", flexDirection:"column", padding:{sm:"8px", xs:"40px"}}}>

<Box sx={{display:"flex", justifyContent:"space-between"}}>
      <Typography variant="h4" color="initial">
        Invoice number:{invNum}
      </Typography>
      <Typography variant="h5" color="initial">
        Employee Name:- {invname}
      </Typography>
      </Box>
      <Box> Date:- {invDate}</Box>

      <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>


        {/* <Autocomplete
          size="small"
          disablePortal
          options={top100Films}
          sx={{ width: 223 }}
          onChange={(event, newValue)=>{setSource(newValue.label)}}
          renderInput={(params) => <TextField  {...params} label="Source" />}
        /> */}

{/* <TextField   label="Source" size="small" onChange={(e)=>{setSource(e.target.value)}}/> */}

<TextField   label="Category" size="small" onChange={(e)=>{setCategory(e.target.value)}}/>


        <Autocomplete
          size="small"
          disablePortal
          options={top100Films}
          sx={{ width: 223 }}
          onChange={(event, newValue)=>{setItemCode(newValue.label)}}
          renderInput={(params) => <TextField {...params} label="Item Code" />}
        />

        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 223 }}
          onChange={(event, newValue)=>{setItemName(newValue.label)}}
          renderInput={(params) => (
            <TextField {...params} label="Name of Item" />
          )}
        />

{/* <TextField   label="HSN/SAC Code" size="small" onChange={(e)=>{setHSNCode(e.target.value)}}/> */}
        <TextField label="Quantity" size="small" onChange={(e)=>{setQuantity(e.target.value)}}/>

        {/* <TextField   label="Unit" size="small" onChange={(e)=>{setUnit(e.target.value)}}/> */}

        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 223 }}
          onChange={(event, newValue)=>{setUnit(newValue.label)}}
          renderInput={(params) => (
            <TextField {...params} label="Unit" />
          )}
        />
        <TextField   label="Rate" size="small" onChange={(e)=>{setRate(e.target.value)}}/>

     

        <TextField label="Amount" size="small"  InputLabelProps={{ shrink: true }}   disabled  value={amount1} 

        // onChange={(e)=>{setAmount(e.target.value)}}
        />

        {/* <TextField label="Delivery Charges"   size="small" onChange={(e)=>{setDeliveryCharges(e.target.value)}}/>

        <TextField label="Packaging Charges"   size="small" onChange={(e)=>{setPackaging(e.target.value)}}/> */}

        {/* <TextField label="SGST" size="small" onChange={(e)=>{setSgst(e.target.value)}}/> */}
        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={sGSTDATA}
          sx={{ width: 223 }}
          onChange={(event, newValue)=>{setSgst(newValue.label)}}
          renderInput={(params) => (
            <TextField {...params} label="SGST %" />
          )}
        />

<Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={cGSTDATA}
          sx={{ width: 223 }}
          onChange={(event, newValue)=>{setCgst(newValue.label)}}
          renderInput={(params) => (
            <TextField {...params} label="CGST %" />
          )}
        />

<Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={iGSTDATA}
          sx={{ width: 223 }}
          onChange={(event, newValue)=>{setIgst(newValue.label)}}
          renderInput={(params) => (
            <TextField {...params} label="IGST %" />
          )}
        />


        

        {/* <TextField label="CGST" size="small" onChange={(e)=>{setCgst(e.target.value)}}/>

        <TextField label="IGST" size="small" onChange={(e)=>{setIgst(e.target.value)}}/> */}
        <TextField label="GST AMOUNT" size="small"
         InputLabelProps={{ shrink: true }}
         disabled
        value={gsttotelvalue }
        />

        <TextField label="Discount" size="small"  InputLabelProps={{ shrink: true }}  onChange={(e)=>{setDiscount(e.target.value)}}/>

        <TextField label="Redeem" size="small"  InputLabelProps={{ shrink: true }}  onChange={(e)=>{setRedeem(e.target.value)}}/>
        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={tDSDATA}
          sx={{ width: 223 }}
          onChange={(event, newValue)=>{setTDSAmount(newValue.label)}}
          renderInput={(params) => (
            <TextField {...params} label="TDS %" />
          )}
        />
 <TextField   label="TDS Amount" size="small"  disabled   InputLabelProps={{ shrink: true }}   value={tDSAmountTotel} />

        <TextField label="Amount Paid" size="small" 
         InputLabelProps={{ shrink: true }}
         disabled
        // onChange={(e)=>{setBillAmount(e.target.value)}}
        value={totelItemAmount}
        />
    </Box>

    <Box textAlign={"center"}><Button onClick={handleSubmit} variant="contained">Add Item</Button></Box>

</Box>
<Button color="success" variant="contained" sx={{display:"flex", justifyContent:"flex-end"}}onClick={handleonclick}>Uploade Document</Button>
</>
  );
}

export default AddItems;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const sGSTDATA = [
  { label: "2.5" },
  { label: "6" },
  { label: "9" },
  { label: "14" },
  { label: "0" },

];

const cGSTDATA = [
  { label: "2.5" },
  { label: "6" },
  { label: "9" },
  { label: "14" },
  { label: "0" },

];

const iGSTDATA = [
  { label: "5" },
  { label: "12" },
  { label: "18" },
  { label: "28" },
  { label: "0" },

];

const tDSDATA =[
  { label: "0" },
  { label: "1" },
  { label: "2" },
  { label: "5" },
  { label: "10" },
  { label: "15" },
  { label: "20" },
  { label: "25" },
  { label: "30" },
 




]

