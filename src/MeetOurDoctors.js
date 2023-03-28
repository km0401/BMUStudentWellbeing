import * as React from 'react'
import DoctorCardUsingFlex from './DoctorCardUsingFlex.js'
import img from './assets/Group 11.svg'
import {Grid} from '@mui/material'
import Typography from '@mui/material/Typography'
function MeetOurDoctors(){
    return (
      <div>
        <Typography variant='h4' style={{fontWeight:600, textAlign:'center',paddingBottom:10}}>
          Meet Our Doctors
        </Typography>
        <Grid container={3} spacing={3} justifyContent='space-around'>
          <Grid item>
            <DoctorCardUsingFlex
              doctorImage={img}
              doctorName={'Dr. Jaspal Bhatia'}
              designation={
                'Lizards are a widespread group of squamate reptiles, with over, 6,000 species, ranging across all continents except Antarctica'
              }
            />
          </Grid>
          <Grid item>
            <DoctorCardUsingFlex
              doctorImage={img}
              doctorName={'Dr. Jaspal Bhatia'}
              designation={
                'Lizards are a widespread group of squamate reptiles, with over, 6,000 species, ranging across all continents except Antarctica'
              }
            />
          </Grid>
          <Grid item>
            <DoctorCardUsingFlex
              doctorImage={img}
              doctorName={'Dr. Jaspal Bhatia'}
              designation={
                'Lizards are a widespread group of squamate reptiles, with over, 6,000 species, ranging across all continents except Antarctica'
              }
            />
          </Grid>
        </Grid>
      </div>
    )
}
export default MeetOurDoctors