import * as React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { Button,CardActions} from '@mui/material'

export default function MultiActionAreaCard({doctorImage,doctorName,designation}) {
  return (
    <Card sx={{ maxWidth: 600, backgroundColor: '#F8F7FD' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src={doctorImage} alt='' style={{ width: 370,paddingTop:20 }} />
        <div>
          <Typography
            gutterBottom
            variant='h6'
            component='div'
            style={{ paddingTop: 50, textAlign: 'center' }}
          >
            {doctorName}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            style={{ textAlign: 'center', paddingRight: 20 }}
          >
            {designation}
          </Typography>
        </div>
      </div>
      <div>
        <CardActions>
          <Button
            size='small'
            variant='contained'
            sx={{
              marginLeft: '200px',
              backgroundColor: '#907BFF',
              padding:'10px 30px 10px 30px',
              borderRadius:20,
              color:'#FFFFF'
            }}
          >
            Read More
          </Button>
        </CardActions>
      </div>
    </Card>
  )
}
