import MainForm from "./Pages/MainForm";
import React from "react";
import Navbaar from "./Component/Navbaar/Navbaar";
import AddItems from "./Component/AddItem/AddItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Navbaar/>
    <Routes>
        <Route path="/mainform" element={<MainForm/>}/>
        <Route path="/mainform/addItem/:invoicenumber" element={<AddItems/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
