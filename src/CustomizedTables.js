import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Graph from "./Graph";
import Grid from '@mui/material/Grid';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    borderRadius:3
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Id, Name, Type, Action) {
  return { Id, Name, Type, Action };
}

const rows = [
  createData(1234,'ABC', 'Cold', 'Done'),
  createData(5678,'ABC', 'Fever', 'Done'),
  createData(9012,'ABC', 'Headache', 'Missed'),
  createData(3456,'ABC', 'Cold', 'Done'),
  
];
const rows1 = [
  createData(7890,'ABC', 'Laziness', 'Upcoming'),
  
];

export default function CustomizedTables() {
  return (
    <>
      <Grid container spacing={2} style={{margin:'0px 30px 0px 30px'}}>
      <Grid item xs={12} sm={6}>
        <TableContainer component={Paper}><h2 style={{textAlign: 'center'}}>Past Medical Records</h2>
          <Table sx={{ maxWidth: '89%', m: 4 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Register Id</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Type</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Id}>
                  <StyledTableCell component="th" scope="row">
                    {row.Id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Name}</StyledTableCell>
                  <StyledTableCell align="right">{row.Type}</StyledTableCell>
                  <StyledTableCell align="right">{row.Action}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <TableContainer component={Paper}><h2 style={{textAlign: 'center'}}>Upcoming</h2>
            <Table sx={{ maxWidth: '89%', m: 4 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Register Id</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Type</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1.map((row) => (
                  <StyledTableRow key={row.Id}>
                    <StyledTableCell component="th" scope="row">
                      {row.Id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.Name}</StyledTableCell>
                    <StyledTableCell align="right">{row.Type}</StyledTableCell>
                    <StyledTableCell align="right">{row.Action}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Grid>
        </Grid>
        
        

{/* { <TableContainer component={Paper}>
    <Table sx={{ minWidth: 300 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0} }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>} */}


  {/* <Grid container spacing={2}>
  <Grid item sm={6}>
   <CustomizedTables/>
  </Grid>
 <Grid item sm={6}>
   <CustomizedTables/>
 </Grid>
</Grid> */}
<Graph />
      </>
  );
}
