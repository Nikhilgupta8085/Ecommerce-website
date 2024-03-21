import React from "react";
import { useState,useEffect } from "react";
import { Button,ButtonGroup,Grid,useMediaQuery } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import {useDispatch} from  'react-redux';
export default function PlusMinus(props){
    const matches = useMediaQuery("(max-width:600px)");
    var dispatch=useDispatch()
 var product=props.product  
 const [value,setValue]=useState(product.qty)
 const handlePlus=()=>{
    var v=value+1
    product['qty']=v
    dispatch({type:'ADD_CART',payload:[product.productlistid,product]})
    setValue(v)
    props.pageRefresh()

 }

 const handleMinus=()=>{
    var v=value-1
    if(v==0)
    {dispatch({type:'DELETE_CART',payload:[product.productlistid]})
    props.pageRefresh()
   }
   else
    if(v>0)
   {  product['qty']=v
      setValue(v)
      dispatch({type:'ADD_CART',payload:[product.productlistid,product]})
  
      props.pageRefresh()}
 }

    return(
        <ButtonGroup sx={{ ml: "auto" }} disableElevation variant="contained" aria-label="Disabled elevation buttons">
        <div style={{cursor:'pointer', width: 36,height: 36,display: "flex" }}>
        <AddOutlinedIcon onClick={handlePlus}/>
        </div>
        <div>{value}</div>
        <div style={{cursor:'pointer',background: "#FFF",width: 36,height: 36 }}>
            <RemoveOutlinedIcon onClick={handleMinus} style={{marginLeft:15}}/>
        </div>
      </ButtonGroup>

    )
}