import React, { createRef,useState,useEffect } from "react";

import { ServerURL,getData } from "../../services/ServerServices";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Rowing } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function ExploreCategory(){
      
    const theme = useTheme();
    const navigate=useNavigate()
  const xs = useMediaQuery(theme.breakpoints.down('xs'))
  const sm = useMediaQuery(theme.breakpoints.down('sm'))
  const md = useMediaQuery(theme.breakpoints.down('md'))
  const lg = useMediaQuery(theme.breakpoints.down('lg'))
  const xl = useMediaQuery(theme.breakpoints.down('xl'))
  const [categoryList,setCategoryList]=useState([])

 var settings = {
    dots: false,
    infinite: true,
    speed: false,
    slidesToShow: 8,
    slidesToScroll: false,
    autoplay: false,
    
  };


  const fetchCategories=async()=>{
    var result=await getData('userinterface/fetch_all_category')

    setCategoryList(result.data)
  }
  useEffect(function(){
    fetchCategories()
  },[])

  const handleClick=(categoryid)=>{
    navigate(`/AllCategory`,{state:{categoryid:categoryid,page:'ExploreCategory'}})   
 
   }
 
  function ExploreImage()
  { return categoryList.map((item)=>{
        return(<div onClick={()=>handleClick(item.categoryid)} style={{width:'8%',padding:10,background:'#D6A2E8',borderRadius:
        '5%',margin:3,display:'flex',alignItems:'center',flexDirection:'column',cursor:'pointer'}}><div style={{color:'#3B3B98',fontFamily:'Poppins',fontSize:xs?4:sm?6:md?8:lg?16:16,fontWeight:'bolder',cursor:'pointer'}}>{item.categoryname}<div style={{marginTop:15}}></div></div><img src={`${ServerURL}/images/${item.icon}`} style={{width:'60%', height:'60%' }}/></div>)
  })
  } 





    return(<div>
        
<h3>Explore By Categories</h3>
 <div style={{padding:5,display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
 {ExploreImage()}
 </div>


    </div>);


}

