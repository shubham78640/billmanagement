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
function App() {
  const invbillid = localStorage.getItem("BillID");
  const userType = localStorage.getItem("User");
  const status = localStorage.getItem("status");
  console.log(status);
  return (
    <BrowserRouter>
      {status && <Navbaar />}
      <Routes>
        {userType === "ADMIN" && (
          <Route path="/billtable" element={<BillTableData />} />
        )}
        {userType === "ADMIN" && (
          <Route path="/billtable/admin/:id" element={<ItemDataTable />} />
        )}
        {userType === "ADMIN" && (
          <Route
            path="/billtable/updatepagment/:id"
            element={<PaymentdetailsForm />}
          />
        )}
         {userType === "ADMIN" && (
          <Route
            path="/billtable/updatestatusremark/:id"
            element={<InvoiceStatusRemark />}
          />
        )}
        <Route path="/mainform" element={<MainForm />} />
        <Route path="/mainform/addItem/:id" element={<AddItems />} />
        <Route
          path="/addItem/uploadeDocuments/:id"
          element={<UploadeDocuments />}
        />
        {!status ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}

<Route path="/approval" element={<ApprovalForm />} />
<Route path="/approvaluserdatatable" element={<ApprovalUserDataTable />} />
<Route path="/approvaladmindatatable" element={<ApprovalAdminDataTabel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
