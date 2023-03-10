import React, { useState, useEffect } from "react";
import {
  Button,
  Autocomplete,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BillTableData from "../Component/BillTableData/BillTableData";
import moment from "moment";
import {
  Brand,
  paymentModeRelation,
  Department,
  CategoryRelation,
  SubCategory2Relation,
  subBrand2,
  MasterAPI,
} from "../AllData";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
  },
});

function MainForm() {
  const [billId, setBillID] = useState("");
  const [empcode, setEmpCode] = useState("");
  const [empName, setEmpName] = useState("");
  const [empEmail, setEmail] = useState("");
  const [subrand, setSubrand] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory1, setSubCategory1] = useState("");
  const [subCategory2, setSubCategory2] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [invoicesgst, setinvoiceSGST] = useState("");
  const [invoicecgst, setinvoiceCGST] = useState("");
  const [invoiceigst, setinvoiceIGST] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [brand, setBrand] = React.useState("");
  const [value, setValue] = React.useState(null);
  const [brandDD, setBrandDD] = useState([]);
  const [payDirectCardDetails, setPayDirectCardDetails] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [addNewCustomer, setAddNewCustomer] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [invoiceDescription, setInvoiceDescription] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [gstAmount, setGSTAmount] = useState("");
  const [tDSType, setTDSType] = useState("");
  const [tDSpercentage, setTDSPercentage] = useState("");
  const [preTaxAmount, setPreTaxAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [invoiceDate, setInvoiceDate] = useState(null);
  const [paymentDate, setPaymentDate] = useState(null);
  const [gSTApplicable, setGSTApplicable] = useState("");
  const [tDSApplicable, setTDSApplicable] = useState("");
  const [paymentCycle, setPaymentCycle] = useState("");
  const [utr, setUtr] = useState("");
  const [subBrandCustomerName, setSubBrandCustomerName] = useState("");
  const [taskId, setTaskId] = useState("");
  const [updatepaidAmount, setUpdatepaidAmount] = useState("");
  const [reimbursementpaymentDate, setreimbursementpaymentDate] =
    useState(null);
  const [transactionsDetail, setTransactionsDetail] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [customerNameDD, setCustomerNameDD] = useState([]);
  const [subbrandDD, setSubBrandDD] = useState([]);
  const [locationDD, setLocationDD] = useState([]);
  const [departmentDD, setDepartmentDD] = useState([]);
  const [categoryDD, setCategoryDD] = useState([]);
  const [subCategory1DD, setSubCategory1DD] = useState([]);
  const [subCategory2DD, setSubCategory2DD] = useState([]);
  const [expenseTypeDD, setExpenseTypeDD] = useState([]);
  const [gSTApplicableDD, setGSTApplicableDD] = useState([]);
  const [paymentModeDD, setPaymentModeDD] = useState([]);
  const [paymentMethodDD, setPaymentMethodDD] = useState([]);
  const [subBrandvalue2, setSubBrandvalue2] = useState([]);
  const [netAmount, setNetAmount] = useState("");
  const [approvalID, setApprovalID] = useState("");
  const [buttonActiveInectiveLogic, setButtonActiveInectiveLogic] =
    useState(true);
  const [reimbirsment, setReimbirsment] = useState("");
  const [customerCodeDD, setCustomerCodeDD] = useState([]);
  const [invoiceType, setInvoiceType] = useState("");
  // let customerNameDD = [];
  let paymentModeArray = [];

  const newInvoiveNumber = invoiceNumber.toUpperCase();
  const newDateinv = moment(invoiceDate).format("DD/MM/YYYY");

  const newPaymentDate = moment(paymentDate).format("DD/MM/YYYY");
  const invbillid = localStorage.getItem("BillID");
  const totelAmountofbill = +preTaxAmount + +gstAmount;
  const tDSAmountTotel = (+preTaxAmount * +tDSpercentage) / 100;

  const NetAmount = +totelAmountofbill - +tDSAmountTotel;
  let navigate = useNavigate();
  const handleSubmit = async () => {
    console.log("data ", empcode, {
      empName,
      empEmail,
      invoiceNumber,
      payDirectCardDetails,
      expenseCategory,
      addNewCustomer,
      customerName,
      serviceCategory,
      invoiceDescription,
      preTaxAmount,
      totalAmount,
      invoiceDate,
      paymentMethod,
      paymentMode,
      subrand,
      brand,
      location,
      department,
      category,
      subCategory1,
      subCategory2,
      expenseType,
      gstAmount,
      totelAmountofbill,
      paymentCycle,
      approvalID,
    });

    try {
      let response = await axios.post(`${MasterAPI}/bill/bill/save`, {
        brand: brand,
        category: category,
        department: department,
        email: EMPEMAIL,
        employeeCode: EMPCODE,
        employeeName: EMPNAME,
        expensesCategory: expenseCategory,
        expensesType: expenseType,
        gstAmount: gstAmount,
        invoiceDate: newDateinv,
        invoiceDescription: invoiceDescription,
        invoiceNumber: newInvoiveNumber,
        location: location,
        otherPartner: addNewCustomer,
        partnerNameCode: customerName,
        payDirectCard: payDirectCardDetails,
        paymentMethod: paymentMethod,
        paymentMode: paymentMode,
        preTaxAmount: preTaxAmount,
        serviceCategory: serviceCategory,
        subBrand: subrand,
        subCatagory1: subCategory1,
        subCatagory2: subCategory2,
        totalAmount: totelAmountofbill,
        reportingManager: reportingManager,
        userType: USERTYPE,
        taskId: taskId,
        paymentDate: newPaymentDate,
        reimbursementDate: "",
        paidAmount: updatepaidAmount,
        transactionDetail: transactionsDetail,
        customerName: subBrandCustomerName,
        utrMendatory: utr,
        gstApplicable: gSTApplicable,
        tdsApplicable: tDSApplicable,
        tdsPercentage: tDSpercentage,
        tdsAmount: tDSAmountTotel,
        paymentStatus: paymentStatus,
        invoiceType: invoiceType,
        netAmount: NetAmount,
        approvalId: approvalID,
      });
      alert("Bill Invoice save successfully");
      navigate(`/mainform/addItem/${response.data.data.invoiceId}`);
      localStorage.setItem("InvoiceNumber", invoiceNumber);
      localStorage.setItem("InvoiceDate", newDateinv);
      localStorage.setItem("BillID", response.data.data.invoiceId);
      localStorage.setItem(
        "InvoiceTotelAmount",
        response.data.data.totalAmount
      );

      console.log(response);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    Brand.map((item) => {
      if (item.brand === brand) setSubBrandDD(item.subBrand);
    });

    paymentModeRelation.map((item) => {
      paymentModeArray.push(item.paymentMode);
      if (item.paymentMode === paymentMode)
        setPaymentMethodDD(item.paymentMethod);
    });

    Department.map((item) => {
      if (item.department === department) setCategoryDD(item.category);
    });

    CategoryRelation.map((item) => {
      if (item.categoryRelation === category)
        setSubCategory1DD(item.subCategory1Relation);
    });

    SubCategory2Relation.map((item) => {
      if (item.subCategory1Relations === subCategory1)
        setSubCategory2DD(item.subCategory2Relations);
    });

    subBrand2.map((item) => {
      if (item.subBrandRelation === subrand)
        setSubBrandvalue2(item.subBrand2Relation);
    });

    // customerRelation.map((item)=>{
    //   customerNameDD.push(item.customerName)
    //   if(item.customerName==customerName){
    //     setCustomerCode(item.customerCode)
    //   }
    // })

    const CustomerListData = async () => {
      let response = await fetch(`${MasterAPI}/bill/dropdown/get/partners/`);
      let data = await response.json();
      setCustomerNameDD(data.data);
    };

    CustomerListData();
  }, [brand, paymentMode, department, category, subCategory1, subrand]);

  const EMPCODE = localStorage.getItem("employeeCode");
  const EMPNAME = localStorage.getItem("name");
  const EMPEMAIL = localStorage.getItem("email");
  const EMPSTATUS = localStorage.getItem("status");
  const USERTYPE = localStorage.getItem("User");
  const reportingManager = localStorage.getItem("reportingManager");

  return (
    <Box
      sx={{
        backgroundColor: "#f2f2f2",
        minHeight: "682px",
        maxHeight: "100%",
        alignItems: "center",
      }}
    >
      {/* <Box p={2} sx={{marginLeft:{sm:"5%",xs:"9%"},   fontWeight:600, fontSize:"18px", color:"green"}}>  Expense Submission Form </Box> */}

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
        <ThemeProvider theme={theme}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={invoiceTypeDD}
            onChange={(event, newValue) => {
              setInvoiceType(newValue);
            }}
            sx={{ width: 300, backgroundColor: "white" }}
            renderInput={(params) => (
              <TextField {...params} required label="Invoice Type" />
            )}
          />

          <TextField
            sx={{ width: 300, backgroundColor: "white" }}
            id="outlined-basic"
            required
            label="Invoice Number"
            variant="outlined"
            onChange={(e) => setInvoiceNumber(e.target.value)}
            value={invoiceNumber}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Invoice Date"
              value={invoiceDate}
              onChange={(newValue) => {
                setInvoiceDate(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  size="medium"
                  sx={{
                    width: 300,
                    backgroundColor: "white",
                    color: "black",
                  }}
                />
              )}
            />
          </LocalizationProvider>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={paymentStatusOfInvoice}
            onChange={(event, newValue) => {
              setPaymentStatus(newValue);
            }}
            sx={{ width: 300, backgroundColor: "white" }}
            renderInput={(params) => (
              <TextField {...params} required label="Payment Status" />
            )}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Paid Payment Date"
              value={paymentDate}
              disabled={paymentStatus === "To be paid" ? true : false}
              onChange={(newValue) => {
                setPaymentDate(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="medium"
                  sx={{
                    width: 300,
                    backgroundColor: "white",
                    color: "black",
                  }}
                />
              )}
            />
          </LocalizationProvider>

          <TextField
            sx={{ width: 300, backgroundColor: "white" }}
            disabled={paymentStatus === "To be paid" ? true : false}
            id="outlined-basic"
            label="UTR (Mandatory)"
            variant="outlined"
            onChange={(e) => setUtr(e.target.value)}
            value={utr}
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
            disabled={
              subrand === "Pinch D2C" || subrand === "Pinch B2B" ? false : true
            }
            id="combo-box-demo"
            options={subBrandvalue2}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setSubBrandCustomerName(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Customer Name" />
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

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={expenseTypedata}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setExpenseType(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} required label="Expense Type" />
            )}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={expenseCatdata}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setExpenseCategory(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} required label="Expense Category" />
            )}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={departmentData}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setDepartment(newValue.label);
            }}
            renderInput={(params) => (
              <TextField {...params} required label="Department" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={categoryDD}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setCategory(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} required label="Category" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={subCategory1DD}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setSubCategory1(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Sub Category1" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={subCategory2DD}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setSubCategory2(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Sub Category2" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={ApplicableData}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setGSTApplicable(newValue);
            }}
            renderInput={(params) => (
              <TextField required {...params} label="GST Applicable" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={ApplicableData}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setTDSApplicable(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} required label="TDS Applicable" />
            )}
          />
          <TextField
            sx={{ width: 300, backgroundColor: "white" }}
            id="outlined-basic"
            label="Pre Tax Amount"
            variant="outlined"
            required
            onChange={(e) => setPreTaxAmount(e.target.value)}
            value={preTaxAmount}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tDSDATA}
            disabled={tDSApplicable === "Yes" ? false : true}
            sx={{ width: "300px", backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setTDSPercentage(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="TDS %" />}
          />
          <TextField
            label="TDS Amount"
            sx={{ width: "300px", backgroundColor: "white" }}
            disabled
            InputLabelProps={{ shrink: true }}
            value={tDSAmountTotel}
          />
          <TextField
            sx={{ width: 300, backgroundColor: "white" }}
            disabled={gSTApplicable === "Yes" ? false : true}
            id="outlined-basic"
            label="GST Amount"
            variant="outlined"
            onChange={(e) => setGSTAmount(e.target.value)}
            value={gstAmount}
          />
          <TextField
            sx={{ width: 300, backgroundColor: "white" }}
            disabled
            id="outlined-basic"
            label="Total Amount"
            variant="outlined"
            required
            InputLabelProps={{ shrink: true }}
            value={totelAmountofbill}
          />

          <TextField
            sx={{ width: 300, backgroundColor: "white" }}
            id="outlined-basic"
            label="Net Amount"
            disabled
            variant="outlined"
            // onChange={(e) => setNetAmount(e.target.value)}
            value={NetAmount}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={paymentMode1Data}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setPaymentMode(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} required label="Payment Mode" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={paymentMethodDD}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setPaymentMethod(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} required label="Payment Method" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={PayDirectCardDetailsNumberDD}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setPayDirectCardDetails(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Pay Direct Card Details" />
            )}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={customerNameDD}
            getOptionLabel={(option) => option.partnerNameCode}
            //getOptionLabel={(option) => option.partnerNameCode?option.partnerNameCode:""}
            sx={{ width: 300, backgroundColor: "white" }}
            onChange={(event, newValue) => {
              setCustomerName(newValue.partnerNameCode);
            }}
            renderInput={(params) => (
              <TextField {...params} required label="Partner/Vendor Name" />
            )}
          />

          <TextField
            sx={{ width: 300, backgroundColor: "white" }}
            id="outlined-basic"
            disabled={customerName == "others" ? false : true}
            label="Add New Partner/Vendor"
            variant="outlined"
            onChange={(e) => setAddNewCustomer(e.target.value)}
            value={addNewCustomer}
          />

          <TextField
            sx={{ width: 300, backgroundColor: "white" }}
            id="outlined-basic"
            required
            label="Invoice Description"
            variant="outlined"
            onChange={(e) => setInvoiceDescription(e.target.value)}
            value={invoiceDescription}
          />

          <TextField
            sx={{ width: 300, backgroundColor: "white" }}
            id="outlined-basic"
            label="Approval ID"
            variant="outlined"
            onChange={(e) => setApprovalID(e.target.value)}
            value={approvalID}
          />

          <TextField
            sx={{ width: 300, backgroundColor: "white" }}
            id="outlined-basic"
            disabled
            label="Task Id"
            variant="outlined"
            onChange={(e) => setTaskId(e.target.value)}
            value={taskId}
          />
        </ThemeProvider>
      </Box>

      <Box textAlign={"center"} mt={2}>
        <Button
          disabled={
            invoiceNumber &&
            invoiceDate &&
            brand &&
            subrand &&
            location &&
            department &&
            category &&
            expenseType &&
            expenseCategory &&
            preTaxAmount &&
            paymentMode &&
            paymentMethod &&
            invoiceType &&
            paymentStatus &&
            gSTApplicable &&
            tDSApplicable &&
            customerName &&
            invoiceDescription
              ? false
              : true
          }
          size="large"
          sx={{ width: { sm: 300, xs: 250 }, mb: "20px" }}
          onClick={handleSubmit}
          variant="contained"
          color="success"
        >
          Add Items
        </Button>
      </Box>
    </Box>
  );
}

export default MainForm;

const subbrand1 = [
  "Pinch",
  "Pinch D2C",
  "Pinch B2B",
  "Well Served",
  "BO",
  "RCC",
  "CARE CREW",
  "Gullak",
  "1 To Zee",
];

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

const paymentMode1Data = [
  "Cash",
  "Bank Transfer",
  "Debit Card",
  "Credit Card",
  "Mobile Payment",
  "Cheque",
];

const paymentMethodData = [
  { label: "Employee" },
  { label: "Bank Transfer - Kotak" },
  { label: "Bank Transfer - ICICI" },
  { label: "Bank Transfer - Employee" },
  { label: "Company Card" },
  { label: "Employee Debit Card" },
  { label: "Business Credit Card" },
  { label: "Employee Credit Card" },
  { label: "Paytm" },
  { label: "PhonePe" },
  { label: "Google Pay" },
  { label: "BHIM" },
  { label: "Company Cheque" },
  { label: "Employee Cheque" },
];

const departmentData = [
  { label: "Admin" },
  { label: "Finance" },
  { label: "HR" },
  { label: "Marketing" },
  { label: "Operations" },
  { label: "Procurement" },
  { label: "Technology" },
  { label: "Training & Audit" },
];

const expenseTypedata = [
  "Billable - Customer",
  "Non Billable - Customer",
  "Company",
];

const expenseCatdata = ["One-Time", "Recurring"];

const ServiceCategoryDD = [
  "N/A",
  "Contract staffing services",
  "Day care services",
  "Business consultancy services",
  "Other sanitation services",
  "Services provided by restaurant",
];

const PayDirectCardDetailsNumberDD = [
  "N/A",
  " 4629525415529329",
  "4629525415529410",
  "4629525415529402",
  "4629525415529337",
  "4629525415529345",
  "4629525415529311",
  "4629525415529352",
  "4629525415529360",
];

const paymentStatusOfInvoice = ["Already Paid", "To be paid"];

const invoiceTypeDD = [
  "Regular Invoice",
  "Advance ",
  "TDS (only for finance use)",
  "GST (only for finance use)",
  "PF/ESIC (only for finance use)",
];

const tDSDATA = ["0", "1", "2", "5", "10", "15", "20", "25", "30"];

const ApplicableData = ["Yes", "No"];
