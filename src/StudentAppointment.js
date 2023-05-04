import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";

function StudentAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getColor = (date) => {
    const currentDate = new Date();
    // const currentTime = currentDate.toLocaleTimeString();
    const appointmentDate = new Date(date);
    if (appointmentDate.toDateString() === currentDate.toDateString()) {
      return "#B3E5FC"; // Light blue color for current date
    } else if (appointmentDate < currentDate) {
      return "#FFCDD2"; // Red color for past dates
    } else {
      return "#C8E6C9"; // Green color for future dates
    }
  };

  const fetchInvitee = async (appointment) => {
    try {
      const response = await fetch(`${appointment.uri}/invitees?fields=email,name`, {
        headers: {
          authorization: "Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjgzMTc4NTE3LCJqdGkiOiI1NGYyMzQyYy0yOGQ5LTQ4NDQtYjgxYi01MmY5OTZjNDU1NWMiLCJ1c2VyX3V1aWQiOiI5ZjE0N2YxOC1jY2E4LTRiNGMtOGVlNS01N2RhMTNmYWYxYzEifQ.ldB2petcYCLrW2VNfLDNbkA6K8n2AAxa1_7lIDVei8Z4HsbYb9xKil0c6GOJQnwn6qRIDwI6z9QOfWzywieAMQ",
          "content-type": "application/json",
        },
        method: "GET",
      });
      const data = await response.json();
      return { ...appointment, invitee: data.collection[0].name };
    } catch (error) {
      console.error(error);
      return appointment;
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await fetch(
        "https://api.calendly.com/scheduled_events?user=https://api.calendly.com/users/9f147f18-cca8-4b4c-8ee5-57da13faf1c1&status=active&include=invitee",
        {
          headers: {
            authorization: "Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjgzMTc4NTE3LCJqdGkiOiI1NGYyMzQyYy0yOGQ5LTQ4NDQtYjgxYi01MmY5OTZjNDU1NWMiLCJ1c2VyX3V1aWQiOiI5ZjE0N2YxOC1jY2E4LTRiNGMtOGVlNS01N2RhMTNmYWYxYzEifQ.ldB2petcYCLrW2VNfLDNbkA6K8n2AAxa1_7lIDVei8Z4HsbYb9xKil0c6GOJQnwn6qRIDwI6z9QOfWzywieAMQ",
            "content-type": "application/json",
          },
          method: "GET",
        }
      );
      const data = await response.json();
      const appointmentsWithInvitees = await Promise.all(
        data.collection.map(async (appointment) => {
          const updatedAppointment = await fetchInvitee(appointment);
          return updatedAppointment;
        })
      );
      appointmentsWithInvitees.sort((a, b) => {
        const aTime = new Date(a.start_time);
        const bTime = new Date(b.start_time);
        return aTime - bTime;
      });
      setAppointments(appointmentsWithInvitees);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  fetchAppointments();
  

  if (isLoading) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

  return (
    <>
      <TableContainer component={Paper} sx={{width:400}}>
        <Table sx={{ width: 400 }} aria-label="appointments table">
          <TableHead>
            <TableRow style={{ backgroundColor: '#00BFA5' }}>
              <TableCell style={{ color: '#FFFFFF' , fontSize:'15px'}}>Invitee Name</TableCell>
              <TableCell style={{ color: '#FFFFFF' , fontSize:'15px'}}>Meeting Date</TableCell>
              <TableCell style={{ color: '#FFFFFF' , fontSize:'15px'}}>Meeting Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow
                key={appointment.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ backgroundColor: getColor(appointment.start_time), fontSize:'15px' }}>
                  {appointment.invitee}
                </TableCell>
                <TableCell sx={{ backgroundColor: getColor(appointment.start_time), fontSize:'15px' }}>
                {new Date(appointment.start_time).toLocaleDateString('en-GB')}
                </TableCell>
                <TableCell sx={{ backgroundColor: getColor(appointment.start_time), fontSize:'15px' }}>{new Date(appointment.start_time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

  export default StudentAppointment
