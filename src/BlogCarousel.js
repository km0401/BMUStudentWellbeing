import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BlogCard from './BlogCard';
import blogimage1 from "./assets/download (1).jpg";
import blogimage2 from "./assets/download (2).jpg";
import blogimage3 from "./assets/download (3).jpg";
import blogimage4 from "./assets/download (4).jpg";
import blogimage5 from "./assets/download (5).jpg";
import blogimage6 from "./assets/download (6).jpg";
import blogimage7 from "./assets/download (7).jpg";
import blogimage8 from "./assets/download (8).jpg";
import blogimage9 from "./assets/download (9).jpg";
import {Typography,Box} from '@mui/material'


const cslide1 = [
  {
    title: 'Home',
    content:'Preventative care is an often overlooked but an important part of young men’s health.',
    blogimg: blogimage1,
    // icon: <HomeIcon sx={{ color: "white"}}/>,
  },
  {
    title: 'Explore',
    content: 'Regular exercise can reduce the risk of chronic diseases.',
    blogimg: blogimage2,
    // icon: <TagIcon sx={{ color: "white"}}/>,
  },
  {
    title: 'Notifications',
    content: 'Time management skills can decrease stress and increase productivity.',
    blogimg: blogimage3,
    // icon: <NotificationsIcon sx={{ color: "white"}}/>,
  },
]
const cslide2 = [
  {
    title: 'Home',
    content:'Preventative care is an often overlooked but an important part of young men’s health.',
    blogimg: blogimage1,
    // icon: <HomeIcon sx={{ color: "white"}}/>,
  },
  {
    title: 'Explore',
    content: 'Regular exercise can reduce the risk of chronic diseases.',
    blogimg: blogimage2,
    // icon: <TagIcon sx={{ color: "white"}}/>,
  },
  {
    title: 'Notifications',
    content: 'Time management skills can decrease stress and increase productivity.',
    blogimg: blogimage3,
    // icon: <NotificationsIcon sx={{ color: "white"}}/>,
  },
]
const cslide3 = [
  {
    title: 'Home',
    content:'Preventative care is an often overlooked but an important part of young men’s health.',
    blogimg: blogimage1,
    // icon: <HomeIcon sx={{ color: "white"}}/>,
  },
  {
    title: 'Explore',
    content: 'Regular exercise can reduce the risk of chronic diseases.',
    blogimg: blogimage2,
    // icon: <TagIcon sx={{ color: "white"}}/>,
  },
  {
    title: 'Notifications',
    content: 'Time management skills can decrease stress and increase productivity.',
    blogimg: blogimage3,
    // icon: <NotificationsIcon sx={{ color: "white"}}/>,
  },
]
function BlogCarousel() {
  return (
    <>
      <Box>
        <Typography
          variant='h4'
          style={{ fontWeight: '600', textAlign: 'center', marginTop: 80 }}
        >
          Blogs
        </Typography>
      </Box>
      <Carousel
        showStatus={false}
        showArrows={false}
        emulateTouch
        swipeable
        infiniteLoop
        autoPlay
        interval={3000}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          {cslide1.map((each, i) => (
            <BlogCard
              title={each.title}
              content={each.content}
              bimage={each.blogimg}
              key={i}
            />
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          {cslide2.map((each, i) => (
            <BlogCard
              title={each.title}
              content={each.content}
              bimage={each.blogimg}
              key={i}
            />
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          {cslide3.map((each, i) => (
            <BlogCard
              title={each.title}
              content={each.content}
              bimage={each.blogimg}
              key={i}
            />
          ))}
        </div>
      </Carousel>
    </>
  )
}

export default BlogCarousel