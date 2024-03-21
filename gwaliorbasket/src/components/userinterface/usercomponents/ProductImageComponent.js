import React,{createRef,useEffect,useState} from "react";
import Slider from "react-slick";
import { getData, postData, ServerURL } from "../../services/ServerServices";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useLocation } from "react-router-dom";

var productImage = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    focusOnSelect:true,
    
}

var sliderNav = {
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    centerMode: true
}

var slider=createRef()
var images =["1.webp","2.webp","3.webp","4.webp","5.webp"] 
  function handleLeftClick(){
  slider.current.slickPrev()
  }
  function handleRightClick()
  {
    slider.current.slickNext()

  }


export default function ProductImageComponent(props) {
  console.log("product image:",props.data)
  const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
 {/*
  let location=useLocation()
  

    
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productId, setProductId] = useState(location.state.productid);
    const [categoryId, setCategoryId] = useState(location.state.categoryid);

    useEffect(() => {
      async function getCategories() {
        let result = await getData("userinterface/fetch_all_category");
         
        setCategories(result.data);
      }
  
      
  
      getCategories();
    }, []);

    useEffect(() => {
      async function getProducts() {
        let result = await postData("userinterface/fetch_products", { categoryid: categoryId });
        alert(JSON.stringify(result))
        setProducts(result.data);
      }
      async function getProductList() {
        let result = await getData("userinterface/fetch_all_productlist_by_product",{productid:productId});
         
        setProducts(result.data);
      }
  
      
    getProducts();
    }, [productId]);
  
  */}
  const [trendingProduct,setTrendingProduct]=useState([])
  
  const PopularProducts=async()=>{
    var result=await postData('userinterface/fetch_all_productlist_by_product')
   // alert(JSON.stringify(result))
    setTrendingProduct(result.data)
    
  }
  useEffect(function(){
    PopularProducts()
  },[])
  console.log("product",PopularProducts)


    function setImageSlider() {
        return images.map((item) => {
            return (<div style={{ display: 'flex', justifyContent:'center',width:'50%'}}>
                <img src={`${ServerURL}/images/${item}`} alt="xx" style={{ display: 'flex', justifyContent:'center',width: '50%',paddingLeft:'25%'}} />
            </div>)
        })

    }

   

return(
    <div style={{position:'relative'}}>
       
       <div style={{ width: '100%',border:'1px solid #b2bec3', borderRadius:'5px',margin:'10px 5px 5px 10px' }}>
   {matches?<></>:
    <div style={{ background:'#FFF',width:36,height:36,borderRadius:18,display:'flex',alignItems:'center', position:'absolute',left:'3%',top:'40%',zIndex:1,opacity:0.7 }}>
    <KeyboardArrowLeftIcon onClick={handleLeftClick} style={{fontSize:34,cursor:'pointer' }}/>
    </div>}
    

    <Slider ref={slider} {...productImage}>
      {setImageSlider()}
    </Slider>
   
    {matches?<></>:  
    <div style={{ background:'#FFF',width:36,height:36,borderRadius:18,display:'flex',alignItems:'center', position:'absolute',right:'1%',top:'40%',zIndex:1,opacity:0.7 }}>
     <KeyboardArrowRightIcon onClick={handleRightClick} style={{fontSize:34,cursor:'pointer'}}/>
     </div>}
    </div>
     </div> 

    
 
)
  }

