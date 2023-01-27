import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  Autocomplete,
  Typography,
  TextField,
  Box,
  Button,
} from "@mui/material";
import { MasterAPI } from "../../../AllData";
import axios from "axios";
function InvoiceStatusRemark() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [statusRemark, setStatusRemark] = useState("");

  const handleInvoiceStatusRemarkUpdate = async () => {
    try {
      let response = await axios.put(
        `${MasterAPI}/bill/bill/update/invoiceStatus/${id}`,
        {
          invoiceStatus: statusRemark,
        }
      );
      alert("Your Status Remark Update successfully");
      console.log(response);
      navigate("/billtable");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Box p={2} m={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            alignItems: "center",
          }}
        >
          {/* <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Invoice Status Update"
            variant="outlined"
            onChange={(e) => setStatusRemark(e.target.value)}
            value={statusRemark}
          /> */}

       <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={invoiceStatusDropDown}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setStatusRemark(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} required label=" Invoice Status Update" />
            )}
          />

          <Button
            size="large"
            mt={4}
            sx={{ width: { sm: 300, xs: 250 }, mb: "20px" }}
            onClick={handleInvoiceStatusRemarkUpdate}
            variant="contained"
            color="success"
          >
            Update Status
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default InvoiceStatusRemark;


const invoiceStatusDropDown=
[
  "Accept",
  "Reject"
]