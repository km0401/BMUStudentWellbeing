import * as React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { Button,CardActions} from '@mui/material'
import { CenterFocusStrong } from '@mui/icons-material'

export default function MultiActionAreaCard({doctorImage,doctorName,designation}) {
  return (
    <Card sx={{ maxWidth: 600, backgroundColor: '#F8F7FD', borderRadius: 10 }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img
          src={doctorImage}
          alt=''
          style={{
            height: 200,
            width: 270,
            paddingTop: 20,
            paddingLeft: 15,
            borderRadius: 50,
          }}
        />
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
            style={{ textAlign: 'center', padding: 20 }}
          >
            {designation}
          </Typography>
          <CardActions
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              size='small'
              variant='contained'
              sx={{
                display: 'flex',
                backgroundColor: '#907BFF',
                padding: '10px 30px 10px 30px',
                borderRadius: 20,
                color: '#FFFFF',
              }}
            >
              Read More
            </Button>
          </CardActions>
        </div>
      </div>
      <div></div>
    </Card>
  )
}
