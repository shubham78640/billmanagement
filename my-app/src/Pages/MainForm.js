import React from 'react'
import ComponentAutoComplete from '../Component/ComponentAutoComplete'
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';

function MainForm() {
  return (
    <>
    <Box p={5} sx={{ display:"flex",gap:"20px" , flexWrap:'wrap', }}> 
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <ComponentAutoComplete/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
    
    </>
  )
}

export default MainForm ;


const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]