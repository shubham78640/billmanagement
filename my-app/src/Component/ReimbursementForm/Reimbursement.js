import React from 'react'

function Reimbursement() {
  return (
    <div>
    <Box
       sx={{
       display: "flex",
       gap: "25px",
       flexWrap: "wrap",
       padding:{sm:"3%", xs:"2%"},
       marginLeft:{sm:"3%", xs:"0%"},
       justifyContent:{sm:"flex-start", xs:"center"}
     }}>

    <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={reimbursementTypeDD}
          sx={{ width: 300, backgroundColor: "white" }}
          onChange={(event, newValue) => {
            setSubCategory2(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Reimbursement Type" />
          )}
    />

    <TextField
       sx={{ width: 300, backgroundColor: "white" }}
       id="outlined-basic"
       label="Payment Status"
       variant="outlined"
       onChange={(e) => setPaymentStatus(e.target.value)}
       value={paymentStatus}
     />
     </Box>

   <Box textAlign={"center"} mt={2}>
     <Button>Add Items</Button>
   </Box> 
    </div>
  )
}

export default Reimbursement


const reimbursementTypeDD = [
    "Regular Reimbursement",
    "Part of salary"
];