import React from 'react'
import { Box } from '@mui/material'
import StudentAppointment from '../StudentAppointment'
import GoogleCalendar from '../GoogleCalendar'

function Doctor() {
  return (
    <>
        <Box>
            Doctor Page
        </Box>
        <StudentAppointment/>
        <GoogleCalendar/>
    </>
  )
}

export default Doctor