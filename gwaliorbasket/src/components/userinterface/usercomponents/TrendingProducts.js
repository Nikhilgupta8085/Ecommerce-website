import React, {useState,useEffect} from "react";

import { ServerURL,getData } from "../../services/ServerServices";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Rowing } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function TrendingProducts(){
    const navigate=useNavigate()  
    const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'))
  const sm = useMediaQuery(theme.breakpoints.down('sm'))
  const md = useMediaQuery(theme.breakpoints.down('md'))
  const lg = useMediaQuery(theme.breakpoints.down('lg'))
  const xl = useMediaQuery(theme.breakpoints.down('xl'))
  const [productList,setProductList]=useState([])
 var settings = {
    dots: false,
    infinite: true,
    speed: false,
    slidesToShow: 6,
    slidesToScroll: false,
    autoplay: false,
    autoplaySpeed: false,
    arrow: false,
    
    
  };

  const [trendingProduct,setTrendingProduct]=useState([])
  const handleClick=async(pid)=>{
    navigate(`/AllCategory`,{state:{productid:pid,page:'BestDeals'}})   
  }
  const PopularProducts=async()=>{
    var result=await getData('userinterface/fetch_all_productstrending')

    setTrendingProduct(result.data)
  }
  useEffect(function(){
    PopularProducts()
  },[])
  
  function ExplorImage()
  { return trendingProduct.map((item)=>{
        return(<div onClick={()=>handleClick(item.productid)} style={{width:'10%',padding:'10px 10px 0px 10px',background: 'linear-gradient(180deg, rgba(170,128,28,1) 22%, rgba(102,75,15,1) 76%)',borderRadius:
        '5%',margin:3,display:'flex',alignItems:'center',flexDirection:'column',cursor:'pointer'}}>
          <div
          style={{
          color: "rgba(170,128,28,1)",
          background: "#fff",
          fontFamily: "Poppins",
          fontSize: xs ? 4 : sm ? 6 : md ? 8 : lg ? 14 : 14,
          fontWeight: "bolder",
          textAlign: "center",
          padding: 3,
          borderRadius: "0.3rem",
          width: "60%",
          marginBottom: '15%',
        }}
      >
        Trending
      </div>
<div style={{color:'white',fontFamily:'Poppins',fontSize: xs ? 4 : sm ? 6 : md ? 8 : lg ? 14 : 14,fontWeight:'bolder',textAlign:'center',marginBottom:'15%'}}>{item.productname}</div>
<img src={`${ServerURL}/images/${item.image}`} style={{width:'60%'}}/></div>)
  })
  } 

    return(<div>
        
<h3>Most Popular Products</h3>
 <div style={{padding:5,display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
 {ExplorImage()}
 </div>



    </div>)

}