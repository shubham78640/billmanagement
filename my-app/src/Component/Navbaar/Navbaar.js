import { Box } from '@mui/system'
import React from 'react'

function Navbaar() {
  return (
    <Box sx={{display:'flex', alignItems:"center", padding:3, justifyContent:"space-between", backgroundColor:"lavender"}}>
        <Box>Billing System</Box>
        <Box>Add Bill</Box>
    </Box>
  )
}

export default Navbaar