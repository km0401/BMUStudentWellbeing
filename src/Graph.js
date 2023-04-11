import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';

const labels = ["January", "February", "March", "April", "May", "June","July","August", "September", "October", "November", "December"];

const data = {
  datasets: [
      {
          backgroundColor: "rgb(3, 2, 2)",
          borderColor: "rgb(3, 2, 2)",
          data: [0, 3, 1, 1, 0, 0, 0, 1, 2, 1, 5, 1],
          label: "Checkups per Month",
      },
  ],
  labels:labels,
};

const options = {
scales: {
  y: {
    beginAtZero: true,
    max: 8,
    stepSize: 1
  }
}
}

const LineChart = () => {
return (
  <>
  <Box sx={{ m: 3 }}>
  <Typography varient="h2"><b>Checkups per Month</b></Typography>
  <Grid container justifyContent="flex-start" maxWidth="sm">
    <Line data={data} options={options} />
  </Grid>
  </Box>
  </>
);
};

export default LineChart;
