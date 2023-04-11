import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

export default function Name(props) {
    return(
      <Box sx={{ m: 2 }}>
      <Typography variant="h2">Hello, {props.name}</Typography>
      </Box>
    )
  }
  
  Name.propTypes={name: PropTypes.string}