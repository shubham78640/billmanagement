import MainForm from "./Pages/MainForm";
import React from "react";
import Navbaar from "./Component/Navbaar/Navbaar";
import AddItems from "./Component/AddItem/AddItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadeDocuments from "./Component/UploadeDocuments/UploadeDocuments";

function App() {

  const invbillid =localStorage.getItem("BillID");
  return (
  <BrowserRouter>
    <Navbaar/>
    <Routes>
        <Route path="/mainform" element={<MainForm/>}/>
        <Route path="/mainform/addItem/:id" element={<AddItems/>}/>
        <Route path="/addItem/uploadeDocuments/:id" element={<UploadeDocuments/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
