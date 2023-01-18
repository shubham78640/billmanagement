import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavbaar from "../../Component/Navbaar/DashboardNavbaar";

function randomColor() {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  let color = "#" + hex.toString(16);

  return color;
}

const BOX1 = styled(Box)({
  display: "grid",
  padding:"20px",
  width:"100%"
});

const BOX2 = styled(Box)({
  minWidth: "300px",
  minHeight: "170px",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  padding:"10px",
  "&:hover": {
    backgroundColor:randomColor(),
    cursor: "pointer",
  },
});

function DashBoard() {
  const userType = localStorage.getItem("User");
  let navigate = useNavigate();
  return (
    <>
    <BOX1>
      <Box
        sx={{
          display: "flex",
          justifyContent: {sm:"left", xs:"center"},
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Apps list */}
        <BOX2
           sx={{ backgroundColor: "rgba(255, 186, 255, 0.54)"}}
          onClick={() => {
            userType==="ADMIN"?navigate("/billtable"):navigate("/billtabledatauser")
            localStorage.setItem("App","expense");
          }}>
          <img
            width={"100px"}
            style={{ margin:"auto"}}
            src="https://www.thegreatapps.com/application/upload/Apps/2017/03/expense-manager-22.png"
            alt="Expense Managemnet"
          />
          <p style={{ fontWeight: "400", fontFamily: "sans-serif", }}>
            Expense Management
          </p>
        </BOX2>

        <BOX2
        sx={{ backgroundColor: "rgba(93, 236, 255, 0.54)"}}
        onClick={() => {
          userType==="ADMIN"?navigate("/approvaladmindatatable"):navigate("/approvaluserdatatable")
          localStorage.setItem("App","approval");
        }}
        >
          <img
            width={"110px"}
            style={{ margin:"auto"}}
            src="https://static.vecteezy.com/system/resources/previews/008/501/624/original/approved-stamp-mark-illustration-free-png.png"
            alt="Expense Managemnet"
          />
          <p style={{ fontWeight: "400", fontFamily: "sans-serif" }}>
            Approval Management
          </p>
        </BOX2>
      </Box>
    </BOX1>
    </>
  );
}

export default DashBoard;
