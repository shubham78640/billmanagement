import React from 'react'
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
function MainForm() {

    const [value, setValue] = React.useState(null);
  return (
    <>
    <Box p={5} sx={{ display:"flex",gap:"20px" , flexWrap:'wrap', }}> 

    <TextField sx={{ width: 300 }} id="outlined-basic" label="Employee Code" variant="outlined" />

    <TextField sx={{ width: 300 }} id="outlined-basic" label="Employee Name" variant="outlined" />

    <TextField sx={{ width: 300 }} id="outlined-basic" label="Email" variant="outlined" />

    <TextField sx={{ width: 300 }} id="outlined-basic" label="Invoice Number" variant="outlined" />
     

    <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Invoice Date"
             // value={birthday}
            //   onChange={(newValue) => {
            //     (newValue);
            //   }}
              renderInput={(params) => (
                <TextField required {...params} size="medium" sx={{ width: 300 }} />
              )}
            />
          </LocalizationProvider>


    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Brand" />}
    />
     
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Sub Brand" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Department" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Category" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Sub Category1" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Sub Category2" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Expense Type" />}
    />
   <TextField sx={{ width: 300 }} id="outlined-basic" label="Pre Tax Amount" variant="outlined" />
     <TextField sx={{ width: 300 }} id="outlined-basic" label="Total Amount" variant="outlined" />
    
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="GST Applicable" />}
    />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="TDS Type" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="TDS Amount" variant="outlined" />
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Payment Mode" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Payment Method" />}
    />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Pay Direct Card Details" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Expense Category" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Partner/Customer Code" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Partner/Customer Name" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Invoice Description" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Service Category" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Invoice Attachment" variant="outlined" />
      <TextField sx={{ width: 300 }} id="outlined-basic" label="Payment Status" variant="outlined" />
     <Button sx={{ width: 300 }}  variant="contained" color="success">Add Items</Button>

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