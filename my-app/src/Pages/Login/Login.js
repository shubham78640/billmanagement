import React from "react";
import "./login.css";
import { Box } from "@mui/material";

function Login() {
  return (
    <div className="Body">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form action="">
        <Box
          sx={{
            mt:"-30px",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              borderRadius: "50%",
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
            }}
            width={"70px"}
            src="https://media.licdn.com/dms/image/C4D0BAQFLfwyhVhoTow/company-logo_200_200/0/1667996664233?e=1678924800&v=beta&t=45r3-39fVU5rmGzZEf0ozbtcfJbY4f4mlvtAUpeuVug"
            alt=""
          />
          <p
            style={{
              textAlign: "center",
              color: "#b04325",
              fontFamily: "Garamond, serif",
              fontWeight: "800",
              fontSize:"17px"
            }}
          >
            pinch
          </p>
        </Box>

        <label for="username">Employee Code</label>
        <input type="text" placeholder="Employee Code" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
