import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { createTheme, ThemeProvider } from "@mui/material";
import { MasterAPI } from "../../AllData";
const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
  },
});

function AddItems() {
  const [category, setCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");
  const [sgst, setSgst] = useState("");
  const [cgst, setCgst] = useState("");
  const [igst, setIgst] = useState("");
  const [discount, setDiscount] = useState("");
  const [redeem, setRedeem] = useState("");
  const [unit, setUnit] = useState("");
  const [amountPaid, setAmountpaid] = useState("");
  const [addNewItem, setAddNewItem] = useState("");
  const [hsnCode, setHSNCode] = useState("");
  const [gstAmount, setGstAmount] = useState("");
  const { id } = useParams();
  const [tDSAmount, setTDSAmount] = useState("");
  const [totelItemAmountBB, setTotelItemAmountBB] = useState([]);
  const [itemNameDD, setItemNameDD] = useState([]);

  const invbillid = localStorage.getItem("BillID");
  const invNum = localStorage.getItem("InvoiceNumber");
  const invDate = localStorage.getItem("InvoiceDate");
  // const invname = localStorage.getItem("EmployeeName");
  let navigate = useNavigate();

  const handleonclick = () => {
    navigate(`/addItem/uploadeDocuments/${id}`);
  };

  const amount1 = +quantity * +rate;
  const tDSAmountTotel = (+amount1 * +tDSAmount) / 100;
  const gsttotelvalue =
    (+amount1 * +sgst) / 100 +
    (+amount1 * +sgst) / 100 +
    (+amount1 * +igst) / 100;
  const totelItemAmount = +amount1 + +gsttotelvalue - +discount - +redeem;
  console.log("totelAmount", totelItemAmount);

  const EMPNAME = localStorage.getItem("name");
  const InvoiceTotelAmount = localStorage.getItem("InvoiceTotelAmount");

  useEffect(() => {
    const getData = async () => {
      let response2 = await fetch(`${MasterAPI}/bill/item/get/${id}`);
      let data2 = await response2.json();
      setTotelItemAmountBB(data2.data);
    };
    getData();
  }, []);

  const totelAddItem = totelItemAmountBB.length;

  useEffect(() => {
    const ItemListData = async () => {
      let response = await fetch(`${MasterAPI}/bill/dropdown/get/items/`);
      let data = await response.json();
      setItemNameDD(data.data);
    };

    ItemListData();
  }, []);

  const INVTOTELAMOUNT = totelItemAmountBB
    .map((item) => item.amountPaid)
    .reduce((prev, curr) => prev + curr, 0);

  console.log("1234", itemNameDD);

  const handleSubmit = async () => {
    console.log({
      category,
      itemName,
      quantity,
      rate,
      amount,
      unit,
      sgst,
      cgst,
      igst,
      discount,
      redeem,
      totelItemAmount,
      hsnCode,
      gstAmount,
    });

    try {
      let response = await axios.post(`${MasterAPI}/bill/item/save`, {
        amount: amount1,
        amountPaid: totelItemAmount,
        categoryItem: category,
        cgst: sgst,
        dateOfInvoice: invDate,
        discount: discount,
        gstAmountItem: gsttotelvalue,
        igst: igst,
        invoiceNumber: invNum,
        addNewItem: addNewItem,
        itemNameCode: itemName,
        quantity: quantity,
        rate: rate,
        redeemed: redeem,
        unit: unit,
        sgst: sgst,
        invoiceId: invbillid,
      });
      console.log(response);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box
      sx={{ backgroundColor: "#f2f2f2", minHeight: "900px", maxHeight: "100%" }}
    >
      <Box
        gap={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: { sm: "8px", xs: "40px" },
        }}
      >
        <Box
          sx={{
            display: { sm: "flex", xs: "column" },
            justifyContent: "space-between",
          }}
        >
          <Box
            p={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginLeft: { sm: "80px" },
            }}
          >
            <Typography variant="p" color="initial">
              <span
                style={{ color: "green", fontSize: "18px", fontWeight: "800" }}
              >
                Invoice Number -
              </span>{" "}
              {invNum || "No-Invoice Number"}
            </Typography>
            <Typography variant="p" color="initial">
              <span
                style={{ color: "green", fontSize: "18px", fontWeight: "800" }}
              >
                {" "}
                Employee Name -{" "}
              </span>{" "}
              {EMPNAME || "No-Name"}
            </Typography>
            <Typography variant="p" color="initial">
              <span
                style={{ color: "green", fontSize: "18px", fontWeight: "800" }}
              >
                Date -
              </span>{" "}
              {invDate || "No-Date"}
            </Typography>
          </Box>

          <Box
            p={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginRight: { sm: "90px", xs: "0%" },
            }}
          >
            <Typography variant="p" color="initial">
              <span
                style={{ color: "green", fontSize: "18px", fontWeight: "800" }}
              >
                Invoice Total Amount -
              </span>{" "}
              {InvoiceTotelAmount || "0"}
            </Typography>
            <Typography variant="p" color="initial">
              <span
                style={{ color: "green", fontSize: "18px", fontWeight: "800" }}
              >
                {" "}
                Item Total Number -{" "}
              </span>{" "}
              {totelAddItem || "0"}
            </Typography>
            <Typography variant="p" color="initial">
              <span
                style={{ color: "green", fontSize: "18px", fontWeight: "800" }}
              >
                Item Total Amount -
              </span>{" "}
              {INVTOTELAMOUNT || "0"}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {" "}
          <ThemeProvider theme={theme}>
            <Autocomplete
              disablePortal
              options={itemNameDD}
              getOptionLabel={(option) => option.itemNameCode}
              sx={{ width: "300px", backgroundColor: "white" }}
              onChange={(event, newValue) => {
                setItemName(newValue.itemNameCode);
              }}
              renderInput={(params) => (
                <TextField {...params} required label="Item Name" />
              )}
            />
            <TextField
              label="Add New Item"
              disabled={itemName == "others" ? false : true}
              sx={{ width: "300px", backgroundColor: "white" }}
              onChange={(e) => {
                setAddNewItem(e.target.value);
              }}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={Category1DropDown}
              sx={{ width: "300px", backgroundColor: "white" }}
              onChange={(event, newValue) => {
                setCategory(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Category" />
              )}
            />

            <TextField
              label="Quantity"
              sx={{ width: "300px", backgroundColor: "white" }}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={unitListDD}
              sx={{ width: "300px", backgroundColor: "white" }}
              onChange={(event, newValue) => {
                setUnit(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Unit of measurement" />
              )}
            />
            <TextField
              label="Item Rate"
              sx={{ width: "300px", backgroundColor: "white" }}
              onChange={(e) => {
                setRate(e.target.value);
              }}
            />

            <TextField
              label="Amount"
              sx={{ width: "300px", backgroundColor: "white" }}
              InputLabelProps={{ shrink: true }}
              disabled
              value={amount1}
            />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              sx={{ width: "300px", backgroundColor: "white" }}
              options={sGSTDATA}
              onChange={(event, newValue) => {
                setSgst(newValue);
              }}
              renderInput={(params) => <TextField {...params} label="SGST %" />}
            />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cGSTDATA}
              disabled
              sx={{ width: "300px", backgroundColor: "white" }}
              value={sgst}
              renderInput={(params) => <TextField {...params} label="CGST %" />}
            />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={iGSTDATA}
              disabled={sgst == "0" ? false : true}
              sx={{ width: "300px", backgroundColor: "white" }}
              onChange={(event, newValue) => {
                setIgst(newValue);
              }}
              renderInput={(params) => <TextField {...params} label="IGST %" />}
            />

            <TextField
              label="GST AMOUNT"
              sx={{ width: "300px", backgroundColor: "white" }}
              InputLabelProps={{ shrink: true }}
              disabled
              value={gsttotelvalue}
            />

            <TextField
              label="Discount"
              sx={{ width: "300px", backgroundColor: "white" }}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => {
                setDiscount(e.target.value);
              }}
            />

            <TextField
              label="Redeem"
              sx={{ width: "300px", backgroundColor: "white" }}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => {
                setRedeem(e.target.value);
              }}
            />
            <TextField
              required
              label="Amount Paid"
              sx={{ width: "300px", backgroundColor: "white" }}
              InputLabelProps={{ shrink: true }}
              value={totelItemAmount}
            />
          </ThemeProvider>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <Button
          disabled={totelItemAmount ? false : true}
          color="success"
          size="large"
          sx={{ width: { sm: "300px", xs: "240px" } }}
          onClick={handleSubmit}
          variant="contained"
        >
          Add Item
        </Button>
      </Box>
      <Box mt={5} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          disabled={totelAddItem == "0" ? true : false}
          endIcon={<CloudUploadIcon />}
          color="success"
          variant="contained"
          onClick={handleonclick}
        >
          Upload Invoice
        </Button>
      </Box>
    </Box>
  );
}

export default AddItems;

const sGSTDATA = ["2.5", "6", "9", "14", "0"];

const cGSTDATA = ["2.5", "6", "9", "14", "0"];

const iGSTDATA = ["5", "12", "18", "28", "0"];

const tDSDATA = ["0", "1", "2", "5", "10", "15", "20", "25", "30"];

const unitListDD = [
  "Kg",
  "Ltr",
  "Pcs",
  "Gm",
  "Mtr",
  "Cm",
  "Km",
  "Sqft",
  "Nos",
  "Lumpsum",
  "Month",
  "Pkt",
  "Pair",
  "Bottle",
  "Set",
];

const Category1DropDown = [
  "Allowance",
  "Baby Care",
  "Bakery",
  "Christmas Party",
  "Cleaning & Supplies",
  "Commission - Card/Wallets",
  "Commissions - CP",
  "Consumable",
  "Cutlery",
  "Dairy",
  "Decor",
  "Delivery Charges",
  "Diapers",
  "Digital Marketing",
  "Discount",
  "Electricity",
  "Employee Meal",
  "Entertainment",
  "Event",
  "Facilities - Property",
  "Facilities Fixed",
  "Fruits",
  "Games & Toys",
  "Gas",
  "Google Data Studio",
  "Grocery",
  "Internet",
  "Logistics",
  "Maintenance",
  "Manpower",
  "Manpower - Fixed",
  "Manpower - Incentive",
  "Medicine",
  "Packaging",
  "Pamphlets_Standee_Hoardings",
  "Reimbursement",
  "Rent",
  "Repair & Maintenance",
  "Salary",
  "Stationary",
  "Support - Comm/WH",
  "Support - Finance",
  "Support - Ops Management",
  "Taxes",
  "Technology",
  "Toiletries",
  "Travel",
  "Tuition & Fees",
  "Uniform",
  "Vegetables",
  "Water",
];
