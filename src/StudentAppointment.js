import React, { useState, useEffect } from "react";
import axios from "axios";
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

  useEffect(() => {
    const fetchAppointments = async () => {
        console.log('fetchingAppointment')
      try {
        console.log('try block')
        const response = await axios.get(
          "https://api.calendly.com/scheduled_events",
          {
            headers: {
              Authorization: "Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjgzMTc4NTE3LCJqdGkiOiI1NGYyMzQyYy0yOGQ5LTQ4NDQtYjgxYi01MmY5OTZjNDU1NWMiLCJ1c2VyX3V1aWQiOiI5ZjE0N2YxOC1jY2E4LTRiNGMtOGVlNS01N2RhMTNmYWYxYzEifQ.ldB2petcYCLrW2VNfLDNbkA6K8n2AAxa1_7lIDVei8Z4HsbYb9xKil0c6GOJQnwn6qRIDwI6z9QOfWzywieAMQ",
              'Content-Type': 'application/json',
              'Accept': 'application/json'

            },
          }
        );
        console.log('get request sent')
        setAppointments(response.data.collection);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppointments();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Invitee Name</TableCell>
            <TableCell align="right">Meeting Time</TableCell>
            <TableCell align="right">Meeting Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.uuid}>
              <TableCell component="th" scope="row">
                {appointment.invitee.name}
              </TableCell>
              <TableCell align="right">
                {new Date(appointment.start_time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </TableCell>
              <TableCell align="right">
                {new Date(appointment.start_time).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentAppointment;
