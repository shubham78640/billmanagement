import MainForm from "./Pages/MainForm";
import React from "react";
import Navbaar from "./Component/Navbaar/Navbaar";
import AddItems from "./Component/AddItem/AddItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadeDocuments from "./Component/UploadeDocuments/UploadeDocuments";
import BillTableData from "./Component/BillTableData/BillTableData";
import ItemDataTable from "./Component/ItemDataTable/ItemDataTable";
import PaymentdetailsForm from "./Component/PaymentDetailsForm/PaymentdetailsForm";
import Login from "./Pages/Login/Login";
import ApprovalForm from "./Component/Approval/ApprovalForm";
import ApprovalUserDataTable from "./Component/Approval/ApprovalDataTabel/ApprovalUserDataTable";
import ApprovalAdminDataTabel from "./Component/Approval/ApprovalDataTabel/ApprovalAdminDataTabel";
import InvoiceStatusRemark from "./Component/PaymentDetailsForm/InvoiceStatusRemark/InvoiceStatusRemark";
import ApprovalByHOD from "./Component/Approval/ApprovalBy/ApprovalByHOD";
import ApprovalByFinal from "./Component/Approval/ApprovalBy/ApprovalByFinal";
import BillDataTableUser from "./Component/BillTableData/BillDataTableUser";
import DashBoard from "./Pages/Dashboard/DashBoard";
function App() {
  const invbillid = localStorage.getItem("BillID");
  const userType = localStorage.getItem("User");
  const status = localStorage.getItem("status");
  console.log(status);
  return (
    <BrowserRouter>
      {status && <Navbaar />}
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        {userType === "ADMIN" && (<Route path="/billtable" element={<BillTableData />} />)}
        {userType === "ADMIN" && (<Route path="/billtable/admin/:id" element={<ItemDataTable />} />)}
        {userType === "ADMIN" && (<Route path="/billtable/updatepagment/:id" element={<PaymentdetailsForm />}/>)}
        {userType === "ADMIN" && (<Route path="/billtable/updatestatusremark/:id" element={<InvoiceStatusRemark />}/>)}
        <Route path="/mainform" element={<MainForm />} />
        <Route path="/mainform/addItem/:id" element={<AddItems />} />
        <Route path="/addItem/uploadeDocuments/:id" element={<UploadeDocuments />}/>
        {!status ? ( <Route path="/" element={<Login />} /> ) : ( <Route path="/login" element={<Login />} /> )} 
        <Route path="/approvalform" element={<ApprovalForm />} />
        <Route path="/approvaluserdatatable" element={<ApprovalUserDataTable />} />
        <Route path="/approvaladmindatatable" element={<ApprovalAdminDataTabel />} />
        <Route path="/approvaladmindatatable/statusbyhod/:id" element={<ApprovalByHOD />} />
        <Route path="/approvaladmindatatable/statusbyadmin/:id" element={<ApprovalByFinal />}/>
        <Route path="/billtabledatauser" element={<BillDataTableUser />} />
        <Route path="/billtabledatauser/user/:id" element={<ItemDataTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
