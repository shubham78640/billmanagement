import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import pinch from "../../images/Pinch.png"
function Navbaar() {
  const EMPCODE = localStorage.getItem("employeeCode");
  const EMPNAME = localStorage.getItem("name");
  const EMPEMAIL = localStorage.getItem("email");
  const userType = localStorage.getItem("User");

  const handleonclickLogOut = async () => {
    console.log({});
    try {
      let response = await axios.post(
        `http://13.126.160.155:8088/bill/login/logout?email=${EMPEMAIL}&employeeCode=${EMPCODE}`,
        {
          email: EMPEMAIL,
        }
      );
      alert("Logout successfully");
      console.log(response);
      localStorage.clear();
      navigate("/");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  let navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 1,
        justifyContent: "space-between",
        backgroundColor: "rgba(190, 232, 201, 0.6)",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      }}
    >
      <Box sx={{marginLeft:{ sm: 4, xs: 1 },  display:"grid", alignItems:"center", justifyContent:"center"}}>
        <img
          onClick={() => {
            {
              userType == "ADMIN" && navigate("/billtable");
            }
          }}
          style={{
            cursor:"pointer",
          }}
          width={"50px"}
          src={pinch}
          alt=""
        />
      </Box>
      <Box sx={{ display: "flex", gap: "30px" }}>
        <Button mt={0.8} color="success">
          <Link
            style={{ color: "white", fontWeight: "600", color: "green" }}
            to="/mainform"
          >
            Add Bill
          </Link>
        </Button>

        <Button
          sx={{ color: "green", fontWeight: "800" }}
          endIcon={<LogoutIcon />}
          color="success"
          onClick={handleonclickLogOut}
        ></Button>
      </Box>
    </Box>
  );
}

export default Navbaar;
