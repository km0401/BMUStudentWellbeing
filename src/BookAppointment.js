import {Grid, TextField, MenuItem } from '@mui/material'
import { Typography, Box } from '@mui/material'
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
function BookAppointment() {
  return (
    <>
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
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ marginTop: 30,marginBottom:30 }}
      >
        <Grid item xs={6} md={6}>
          <TextField
            id='outlined-basic'
            label='Name'
            variant='outlined'
            style={{ marginLeft: 100, paddingBottom: 30, width: 500 }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            id='outlined-basic'
            label='Enrollment No.'
            variant='outlined'
            style={{ marginLeft: 100, paddingBottom: 30, width: 500 }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            id='outlined-basic'
            label='Symptoms'
            variant='outlined'
            style={{ marginLeft: 100, paddingBottom: 30, width: 500 }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            id='outlined-basic'
            label='Concerend Department'
            variant='outlined'
            style={{ marginLeft: 100, paddingBottom: 30, width: 500 }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            id='outlined-basic'
            select
            label='Select'
            defaultValue='Dr. Jaspal Bhatia'
            variant='outlined'
            style={{ marginLeft: 100, paddingBottom: 30, width: 500 }}
          >
            {doctors.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            id='outlined-basic'
            label='Email ID'
            variant='outlined'
            style={{ marginLeft: 100, paddingBottom: 30, width: 500 }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default BookAppointment
