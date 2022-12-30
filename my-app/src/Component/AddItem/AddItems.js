import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

function AddItems() {
  return (
    <Box border={3} gap={3} sx={{display:"flex", flexDirection:"column", padding:{sm:"8px", xs:"40px"}}}>

      <Typography variant="h5" color="initial">
        Invoice number:00000001
      </Typography>

      <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 223 }}
          renderInput={(params) => <TextField {...params} label="Source" />}
        />

        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 223 }}
          renderInput={(params) => <TextField {...params} label="Category" />}
        />

        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 223 }}
          renderInput={(params) => (
            <TextField {...params} label="Name of Item" />
          )}
        />

        <TextField label="Quantity" size="small" />

        <TextField label="Rate" size="small" />

        <TextField label="Amount" size="small" />

        <TextField label="Delivery Charges" size="small" />

        <TextField label="Packaging Charges" size="small" />

        <TextField label="SGST" size="small" />

        <TextField label="CGST" size="small" />

        <TextField label="IGST" size="small" />

        <TextField label="Discount" size="small" />

        <TextField label="Redeem" size="small" />

        <TextField label="Bill Amount" size="small" />
    </Box>

    <Box textAlign={"center"}><Button variant="contained">Submitt Bill</Button></Box>
</Box>
  );
}

export default AddItems;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];
