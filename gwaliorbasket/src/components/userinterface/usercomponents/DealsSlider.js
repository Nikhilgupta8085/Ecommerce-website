import React,{createRef} from "react";
import Slider from "react-slick";
import {ServerURL} from "../../services/ServerServices"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
export default function DealsSlider()
{ 
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrow: false,
  };
  var slider=createRef()
  var images=['d2.jpg','d3.jpg','d4.jpg','d5.jpg','d6.jpg','d7.jpg']
  function handleLeftClick(){
  slider.current.slickPrev()
  }
  function handleRightClick()
  {
    slider.current.slickNext()

  }
  function playImages()
  { return images.map((item)=>{
        return(<div ><img src={`${ServerURL}/images/${item}`} style={{width:'99%'}}/></div>)
  })
  } 


  return(
    <div style={{position:'relative'}}>
      
      {matches?<></>:
      <div style={{ background:'#FFF',width:36,height:36,borderRadius:18,display:'flex',alignItems:'center', position:'absolute',left:'1%',top:'40%',zIndex:1,opacity:0.7 }}>
      <KeyboardArrowLeftIcon onClick={handleLeftClick} style={{fontSize:34,cursor:'pointer'}}/>
      </div>}
      <Slider ref={slider} {...settings}>
        {playImages()}
      </Slider>  
      {matches?<></>:
      <div style={{ background:'#FFF',width:36,height:36,borderRadius:18,display:'flex',alignItems:'center', position:'absolute',right:'1%',top:'40%',zIndex:1,opacity:0.7 }}>
       <KeyboardArrowRightIcon onClick={handleRightClick} style={{fontSize:34,cursor:'pointer'}}/>
       </div>}
       </div> 

      
   
  )

}