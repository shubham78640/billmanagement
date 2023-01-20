import { Autocomplete, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

function Reimbursement() {
  const [reimbursementType, setReimbursementType] = useState("");
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gap: "25px",
          flexWrap: "wrap",
          padding: { sm: "3%", xs: "2%" },
          marginLeft: { sm: "3%", xs: "0%" },
          justifyContent: { sm: "flex-start", xs: "center" },
        }}
      >
        <Autocomplete
          disablePortal
          options={reimbursementTypeDD}
          sx={{ width: 300, backgroundColor: "white" }}
          onChange={(event, newValue) => {
            setReimbursementType(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Reimbursement Type" />
          )}
        />

        {reimbursementType === "Regular Reimbursement" && (
          <Box
            sx={{
              display: "flex",
              gap: "25px",
              flexWrap: "wrap",
              padding: { sm: "3%", xs: "2%" },
              marginLeft: { sm: "3%", xs: "0%" },
              justifyContent: { sm: "flex-start", xs: "center" },
            }}
          >
            <TextField
              sx={{ width: 300, backgroundColor: "white" }}
              id="outlined-basic"
              label="Payment Status"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />

            <TextField
              sx={{ width: 300, backgroundColor: "white" }}
              id="outlined-basic"
              label="Payment Status"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />

            <TextField
              sx={{ width: 300, backgroundColor: "white" }}
              id="outlined-basic"
              label="Payment Status"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />

            <TextField
              sx={{ width: 300, backgroundColor: "white" }}
              id="outlined-basic"
              label="Payment Status"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />

            <TextField
              sx={{ width: 300, backgroundColor: "white" }}
              id="outlined-basic"
              label="Payment Status"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />
          </Box>
        )}

        {reimbursementType === "Part of salary" && (
          <Box
            sx={{
               display:"flex",
               gap:"25px",
               flexWrap: "wrap",
               justifyContent: { sm: "flex-start", xs: "center" },
            }}
          >
            <TextField
              sx={{ width: 300, backgroundColor: "white" }}
              id="outlined-basic"
              label="Payment Status"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />

            <TextField
              sx={{ width: 300, backgroundColor: "white" }}
              id="outlined-basic"
              label="Payment Status"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />
          </Box>
        )}

        <TextField
          sx={{ width: 300, backgroundColor: "white" }}
          id="outlined-basic"
          label="Payment Status"
          variant="outlined"
          //onChange={(e) => setPaymentStatus(e.target.value)}
          //value={paymentStatus}
        />
      </Box>

      <Box textAlign={"center"} mt={2}>
        <Button>Add Items</Button>
      </Box>
    </div>
  );
}

export default Reimbursement;

const reimbursementTypeDD = ["Regular Reimbursement", "Part of salary"];
