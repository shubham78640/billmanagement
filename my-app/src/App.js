import MainForm from "./Pages/MainForm";
import React from "react";
import Navbaar from "./Component/Navbaar/Navbaar";
import AddItems from "./Component/AddItem/AddItems";

function App() {
  return (
    <div>
      <Navbaar/>
      <MainForm/>
      <AddItems/>
    </div>
  );
}

export default App;
