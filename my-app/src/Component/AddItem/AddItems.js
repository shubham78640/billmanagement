import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router";

function AddItems() {
    const [source, setSource] = useState("")
    const [category, setCategory] = useState("")
    const [itemName, setItemName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [rate, setRate] = useState("")
    const [amount, setAmount] = useState("")
    const [deliveryCharges, setDeliveryCharges] = useState("")
    const [packaging, setPackaging] = useState("")
    const [sgst, setSgst] = useState("")
    const [cgst, setCgst] = useState("")
    const [igst, setIgst] = useState("")
    const [discount, setDiscount] = useState("")
    const [redeem, setRedeem] = useState("")
    const [billAmount, setBillAmount] = useState("")

    const {invoicenumber} = useParams()

    const handleSubmitt = () =>{
        console.log({source, category, itemName, quantity, rate, amount, deliveryCharges, 
        packaging, sgst, cgst, igst, discount, redeem, billAmount})
    }
  return (
    <Box mt={4} border={3} gap={3} sx={{display:"flex", flexDirection:"column", padding:{sm:"8px", xs:"40px"}}}>

      <Typography variant="h5" color="initial">
        Invoice number:{invoicenumber}
      </Typography>

      <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Autocomplete
          size="small"
          disablePortal
          options={top100Films}
          sx={{ width: 223 }}
          onChange={(event, newValue)=>{setSource(newValue.label)}}
          renderInput={(params) => <TextField  {...params} label="Source" />}
        />

        <Autocomplete
          size="small"
          disablePortal
          options={top100Films}
          sx={{ width: 223 }}
          onChange={(event, newValue)=>{setCategory(newValue.label)}}
          renderInput={(params) => <TextField {...params} label="Category" />}
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
        <TextField label="Quantity" size="small" onChange={(e)=>{setQuantity(e.target.value)}}/>

        <TextField label="Rate" size="small" onChange={(e)=>{setRate(e.target.value)}}/>

        <TextField label="Amount" size="small" onChange={(e)=>{setAmount(e.target.value)}}/>

        <TextField label="Delivery Charges" size="small" onChange={(e)=>{setDeliveryCharges(e.target.value)}}/>

        <TextField label="Packaging Charges" size="small" onChange={(e)=>{setPackaging(e.target.value)}}/>

        <TextField label="SGST" size="small" onChange={(e)=>{setSgst(e.target.value)}}/>

        <TextField label="CGST" size="small" onChange={(e)=>{setCgst(e.target.value)}}/>

        <TextField label="IGST" size="small" onChange={(e)=>{setIgst(e.target.value)}}/>

        <TextField label="Discount" size="small" onChange={(e)=>{setDiscount(e.target.value)}}/>

        <TextField label="Redeem" size="small" onChange={(e)=>{setRedeem(e.target.value)}}/>

        <TextField label="Bill Amount" size="small" onChange={(e)=>{setBillAmount(e.target.value)}}/>
    </Box>

    <Box textAlign={"center"}><Button onClick={handleSubmitt} variant="contained">Submitt Bill</Button></Box>

</Box>
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
