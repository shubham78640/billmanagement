import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Button, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import { useParams } from "react-router";
function UploadeDocuments() {
  const invbillid = localStorage.getItem("BillID");
  const { id } = useParams();
  const [invoiceAttachment, setInvoiceAttachment] = useState();
  const invNum = localStorage.getItem("InvoiceNumber");
  const invDate = localStorage.getItem("InvoiceDate");
  const invname = localStorage.getItem("EmployeeName");
  const formData = new FormData();
  formData.append("document", invoiceAttachment);
  let navigate = useNavigate();
  const changeHandler = (event) => {
    const imagebase = URL.createObjectURL(event.target.files[0]);
    setInvoiceAttachment(event.target.files[0]);
  };

  const EMPNAME = localStorage.getItem("name");

  const handleonclick = async () => {
    if (invoiceAttachment) {
      let formData = new FormData();
      formData.append("file", invoiceAttachment);

      axios
        .post(
          `http://13.126.160.155:8088/bill/files/upload/file?invoiceId=${id}`,
          formData,
          {
            headers: {
              "Content-type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(`Success` + res.data);
          alert("uploaded successfully");
          navigate("/billtable");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Box mt={2} p={2}>

<Box
                sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              // marginLeft: { sm: "80px" },
            }}
          >
            <Typography variant="p" color="initial">
              <span
                style={{ color: "green", fontSize: "20px", fontWeight: "800" }}
              >
                Invoice Number - 
              </span>{" "}
              {invNum || "No-Data"}
            </Typography>
            <Typography variant="p" color="initial">
              <span
                style={{ color: "green", fontSize: "18px", fontWeight: "800" }}
              >
                {" "}
                Employee Name - {" "}
              </span>{" "}
              {EMPNAME || "No-Data"}
            </Typography>
            <Typography variant="p" color="initial">
              <span
                style={{ color: "green", fontSize: "18px", fontWeight: "800" }}
              >
                Date - 
              </span>{" "}
              {invDate || "No-Data"}
            </Typography>
          </Box>

        <Box mt={5}>
          <input
            style={{ fontSize: "18px" }}
            type="file"
            name="file"
            onChange={changeHandler}
          />
          <Box mt={.5} p={1} sx={{fontSize:"12px", color:"red"}}>( Please Uploade Only  JPEG, PNG, PDF files Only* )</Box>
        </Box>
        <Box mt={4}>
          <Button
            color="success"
            variant="contained"
            sx={{}}
            onClick={handleonclick}
          >
            Submit Bill
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default UploadeDocuments;
