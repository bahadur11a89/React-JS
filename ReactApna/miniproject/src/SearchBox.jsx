import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";

export default function BasicTextFields() {

  const [city, setCity] = useState('Raipur City');

  return (
    <Box className='SearchBox'>

      <TextField 
        id="outlined-basic" 
        label="Outlined" 
        variant="outlined" 
        value={city}
        onChange={(e) => setCity(e.target.value)}
      /> 

      <br /><br />

      <TextField 
        id="filled-basic" 
        label="Filled" 
        variant="filled" 
      /> 

      <br /><br />

      <TextField 
        id="standard-basic" 
        label="Standard" 
        variant="standard" 
      /> 

      <br /><br />

      <button type='submit'>Search</button>

    </Box>
  );
}