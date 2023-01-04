import { Box } from "@mui/system";
import React from "react";

function Navbaar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 1,
        justifyContent: "space-between",
        backgroundColor: "#fab100",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      }}
    >
      <Box sx={{marginLeft:{ sm: 4, xs: 1 },  display:"grid", alignItems:"center", justifyContent:"center"}}>
        <img
          style={{
            borderRadius: "50%",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          }}
          width={"50px"}
          src="https://media.licdn.com/dms/image/C4D0BAQFLfwyhVhoTow/company-logo_200_200/0/1667996664233?e=1678924800&v=beta&t=45r3-39fVU5rmGzZEf0ozbtcfJbY4f4mlvtAUpeuVug"
          alt=""
        />
        <p style={{textAlign:"center", color:"#b04325", fontFamily:"Garamond, serif", fontWeight:"800"}}>pinch</p>
      </Box>
      <Box pr={2} sx={{ fontWeight: "800" }} color={"#b04325"}>
        Add Bill
      </Box>
    </Box>
  );
}

export default Navbaar;
