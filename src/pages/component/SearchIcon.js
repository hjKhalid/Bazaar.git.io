import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { useState } from 'react';

export default function FreeSolo() {
  const [productDetailsSearch, setProductDetails] = useState("")
  React.useEffect(() => {
    const url = "http://localhost:3000/api/products"
    async function searchProductDetails() {
      try {
        const response = await axios.get(url);

        setProductDetails(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    searchProductDetails();

  }, [])

  return (
    <Stack spacing={2} sx={{ width: 300, height: 50 }}>

      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={productDetailsSearch ? productDetailsSearch.map((e) => e.name) : ""}
        renderInput={(params) => (
          <TextField style={{ color: "white" }}
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

