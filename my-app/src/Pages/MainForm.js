import React from 'react'
import ComponentAutoComplete from '../Component/ComponentAutoComplete'
import Box from "@mui/material/Box";


function MainForm() {
  return (
    <>
    <Box p={5} sx={{ display:"flex",gap:"20px" , flexWrap:'wrap', }}> 
    
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
    </Box>
    
    </>
  )
}

export default MainForm ;