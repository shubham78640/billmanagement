import { Autocomplete, Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Brand,
  paymentModeRelation,
  Department,
  CategoryRelation,
  SubCategory2Relation,
  subBrand2,
} from "../../AllData";

function Reimbursement() {
  const [reimbursementType, setReimbursementType] = useState("");
  const [brand, setBrand] = React.useState("");
  const [subrand, setSubrand] = useState("");
  const [subBrandCustomerName, setSubBrandCustomerName] = useState("");
  const [subbrandDD, setSubBrandDD] = useState([]);
  const [location, setLocation] = useState("");
  const [] = useState("")
  const [] = useState("")
  const [] = useState("")
  const [] = useState("")
  const [] = useState("")
  const [] = useState("")
  const [] = useState("")
  const [] = useState("")
  const [] = useState("")

  useEffect(() => {
    Brand.map((item) => {
      if (item.brand === brand) setSubBrandDD(item.subBrand);
    });

    // subBrand2.map((item) => {
    //   if (item.subBrandRelation === subrand)
    //     setSubBrandvalue2(item.subBrand2Relation);
    // });

    // CustomerListData();
  }, [brand, subrand]);
  return (
    <div>
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
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={brand1}
          onChange={(event, newValue) => {
            setBrand(newValue);
          }}
          sx={{ width: 300, backgroundColor: "white" }}
          renderInput={(params) => (
            <TextField {...params} required label="Brand" />
          )}
        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={subbrandDD}
          sx={{ width: 300, backgroundColor: "white" }}
          onChange={(event, newValue) => {
            setSubrand(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} required label="Sub Brand" />
          )}
        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={locationData}
          sx={{ width: 300, backgroundColor: "white" }}
          onChange={(event, newValue) => {
            setLocation(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} required label="Location" />
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
              label="Convence Amount"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />

            <TextField
              sx={{ width: 300, backgroundColor: "white" }}
              id="outlined-basic"
              label="Food"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />

            <TextField
              sx={{ width: 300, backgroundColor: "white" }}
              id="outlined-basic"
              label="Accomandation Amount"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />

            <TextField
              sx={{ width: 300, backgroundColor: "white" }}
              id="outlined-basic"
              label="Phone/Internet"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />

           <TextField
              sx={{ width: 300, backgroundColor: "white" }}
              id="outlined-basic"
              label="Any other business expense amount"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />
          </Box>
        )}

        {reimbursementType === "Part of salary" && (
          <Box
            sx={{
              display: "flex",
              gap: "25px",
              flexWrap: "wrap",
              justifyContent: { sm: "flex-start", xs: "center" },
            }}
          >
            <TextField
              sx={{ width: 300, backgroundColor: "white" }}
              id="outlined-basic"
              label="Petrol bill amount"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />

            <TextField
              sx={{ width: 300, backgroundColor: "white" }}
              id="outlined-basic"
              label="Driver Salary"
              variant="outlined"
              //onChange={(e) => setPaymentStatus(e.target.value)}
              //value={paymentStatus}
            />
          </Box>
        )}

        <TextField
          sx={{ width: 300, backgroundColor: "white" }}
          id="outlined-basic"
          label="Grand total"
          variant="outlined"
          //onChange={(e) => setPaymentStatus(e.target.value)}
          //value={paymentStatus}
        />
      </Box>

      <Box textAlign={"center"} mt={2}>
        <Button>Submit</Button>
      </Box>
    </div>
  );
}

export default Reimbursement;

const reimbursementTypeDD = ["Regular Reimbursement", "Part of salary"];
const brand1 = ["Pinch", "Well Served", "1 To Zee", "CARE CREW"];
const locationData = [
  "Office - Gurgaon",
  "Office - Mumbai",
  "Office - Bangalore",
  "Office - Lucknow",
  "1 To Zee - DLF Phase 1",
  "Gullak Daycare - Chakkarpur",
  "Well Served - DLF Phase 3",
  "Well Served - Rodeo Drive",
  "Well Served - Powai",
  "CC Office - Manesar",
  "RCC - Delhi",
  "HQ",
];
