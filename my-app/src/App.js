import MainForm from "./Pages/MainForm";
import React from "react";
import Navbaar from "./Component/Navbaar/Navbaar";
import AddItems from "./Component/AddItem/AddItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadeDocuments from "./Component/UploadeDocuments/UploadeDocuments";
import BillTableData from "./Component/BillTableData/BillTableData";
import ItemDataTable from "./Component/ItemDataTable/ItemDataTable";
import PaymentdetailsForm from "./Component/PaymentDetailsForm/PaymentdetailsForm";

function App() {

  const invbillid =localStorage.getItem("BillID");
  return (
  <BrowserRouter>
    <Navbaar/>
    <Routes>
    <Route path="/" element={<BillTableData/>}/>
    <Route path="/admin/:id" element={<ItemDataTable/>}/>
    <Route path="/updatepagment/:id" element={<PaymentdetailsForm/>}/>
        <Route path="/mainform" element={<MainForm/>}/>
        <Route path="/mainform/addItem/:id" element={<AddItems/>}/>
        <Route path="/addItem/uploadeDocuments/:id" element={<UploadeDocuments/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
