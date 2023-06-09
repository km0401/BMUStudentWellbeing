import {Grid, TextField, MenuItem } from '@mui/material'
import { Typography, Box, Button} from '@mui/material'
import { styled } from '@mui/system';
import { useState } from "react";
import { useHistory, useNavigate} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from 'react'
const doctors = [
  {
    value: 'Dr. Jaspal Bhatia',
  },
  {
    value: 'Dr. Rupa Murghai',
  },
  {
    value: 'Dr. Pankaj Suneja',
  },
]

const theme = createTheme({ 
  typography: {
    fontFamily:'Poppins',
    button: {
      textTransform: 'none'
    }
  }
});

const BootstrapButton = styled(Button)({
  borderRadius:'20px',
  fontSize:"15px",
  fontWeight:'350',
  padding: '6px 35px',
  });

function BookAppointment() {
  const [selectedValue, setSelectedValue] = useState("");
  // const history = useHistory();
  const navigate = useNavigate();

  const handleRouting = (event) =>{
    event.preventDefault();
    if (selectedValue === "Dr. Jaspal Bhatia") {
      navigate('/book1');
    } else if (selectedValue !== "Dr. Jaspal Bhatia") {
      navigate('/book2');
    }
  }
  return (
    <ThemeProvider theme={theme}>
    {/* <> */}
      <Box>
        <Typography
          variant='h4'
          style={{ fontWeight: '600', textAlign: 'center', marginTop: 30 }}
        >
          Book your Appointment
        </Typography>
      </Box>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ marginTop: 30,marginBottom:30, display:'flex',justifyContent:'space-around'}}
      >
        <Grid item xs={6} md={6}>
          <TextField
            id='outlined-basic'
            label='Name'
            variant='outlined'
            style={{ marginLeft: 100, paddingBottom: 30, width: 400 }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label='Enrollment No.'
            variant='outlined'
            style={{ marginLeft: 100, paddingBottom: 30, width: 400 }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
        <TextField
            id='outlined-basic'
            label='Email ID'
            variant='outlined'
            style={{ marginLeft: 100, paddingBottom: 30, width:400 }}
          />  
        </Grid>
        <Grid item xs={6} md={6}>
        <TextField
            id='outlined-basic'
            label='Symptoms'
            variant='outlined'
            style={{ marginLeft: 100, paddingBottom: 30, width: 400 }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
        <TextField
            id='outlined-basic'
            label='Concerend Department'
            variant='outlined'
            style={{ marginLeft: 100, paddingBottom: 30, width: 400 }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
        <TextField
            id='outlined-basic'
            select
            label='Select'
            defaultValue='Dr. Jaspal Bhatia'
            value={selectedValue}
            onChange ={e => setSelectedValue(e.target.value)}
            variant='outlined'
            style={{ marginLeft: 100, paddingBottom: 30, width: 400 }}
          >
            {doctors.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
        <BootstrapButton onClick={handleRouting} variant="contained" size="small" color="secondary">Book Consultation Now</BootstrapButton>
        </Grid>
      </Grid>
      {/* </> */}
      </ThemeProvider>
  )
}

export default BookAppointment
