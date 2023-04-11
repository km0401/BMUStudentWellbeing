import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActions, Grid } from '@mui/material'
import img from './assets/doctor1.jpg'
export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 600, marginLeft: 10 }}>
      <Grid container spacing={2}>
        <Grid item style={{ width: 380 }}>
          <CardMedia
            component='img'
            height='345'
            width='600'
            image={img}
            alt='green iguana'
          />
        </Grid>

        <Grid item xs={8} md={4}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}
