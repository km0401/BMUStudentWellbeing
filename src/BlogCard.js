import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import { Typography, Button } from '@mui/material';




function BlogCard({title,content,bimage}) {
  return (
    <>
    {/* {demo.map((each) => ( */}
    <Card sx={{maxWidth:300, margin:'20px',padding:'20px',borderRadius:'10px'}} raised={false} >
    <CardMedia>
    <img src={bimage} alt="blog"/>
    </CardMedia>
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {content}
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed erat ligula, scelerisque vel augue id, iaculis lobortis dui. 
        Proin dignissim eleifend magna et ultrices */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions> 
    </Card>
    {/* ))} */}
    </>
    
  )
}

export default BlogCard