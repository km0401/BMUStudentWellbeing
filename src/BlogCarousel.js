import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BlogCard from './BlogCard';
import blogimage from "./assets/bml-color-logo.svg";

const cslide1 = [
  {
    title: "Home", content:"K",
    blogimg :blogimage
    // icon: <HomeIcon sx={{ color: "white"}}/>,
  },
  {
    title: "Explore",
    blogimg :blogimage
    // icon: <TagIcon sx={{ color: "white"}}/>,
  },
  {
    title: "Notifications",
    blogimg :blogimage
    // icon: <NotificationsIcon sx={{ color: "white"}}/>,
  }
  // 
  // {
  //   title: "Profile",
  //   // icon: <PersonOutlineIcon sx={{ color: "white"}}/>,
  // },
  // {
  //   title: "More",
  //   // icon: <MoreHorizIcon sx={{ color: "white"}}/>,
  // }
];

const cslide2 =[
  {
      title: "Messages",
      blogimg :blogimage
      // icon: <MailIcon sx={{ color: "white"}}/>,
    },
    {
      title: "Bookmarks",
      blogimg :blogimage
      // icon: <BookmarksIcon sx={{ color: "white"}}/>,
    },
    {
      title: "Lists",
      blogimg :blogimage
      // icon: <ListAltIcon sx={{ color: "white"}}/>,
    },

]


function BlogCarousel() {
  return (
    <Carousel showStatus={false} showArrows={false} emulateTouch swipeable infiniteLoop autoPlay interval={3000}>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginBottom:'30px'}}>
    {cslide1.map((each,i) => (
      <BlogCard title={each.title} content={each.content} bimage={each.blogimg} key={i}/>
    ))}
    </div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginBottom:'30px'}}>
    {cslide2.map((each,i) => (
      <BlogCard title={each.title} content={each.content} bimage={each.blogimg} key={i}/>
    ))}
    </div>
    </Carousel>
  )
}

export default BlogCarousel