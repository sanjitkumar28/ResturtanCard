import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import axios from "axios";
import { useContext } from "react";
import CartContext from "./CartContext";
import { useSelector, useDispatch } from "react-redux";
import {addCart} from '../cartSlice'

const ResturantMenu = () => {
  const { id } = useParams();
  const dispatch =useDispatch();
  const [resMenuData, setResMenuData] = useState([]);
  // const { cart, addCart}=useContext(CartContext);

  const addCartToMenu=(res)=>{
  console.log('res',res);
  dispatch(addCart(res))
  }
  useEffect(() => {
    axios
      .get(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.90662&lng=77.611412&restaurantId=${id}`
      )
      .then((res) => {
        console.log('r',res?.data?.data?.cards[4]?.groupedCard?.cardGroupMap);
        console.log('res', res?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards);
        if(res?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards){
            setResMenuData(res?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards);
        }
        else{
            setResMenuData([]);
        }
      });
  }, []);

  
  return (
    resMenuData.map((res)=>(
        <Accordion key={res.card.info.id}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{res.card.info.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{display:"flex", justifyContent:"space-between"}}>
             {res.card.info.description}
             <button onClick={()=>addCartToMenu(res)}>Add To Cart</button>
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))
  ) 
};
export default ResturantMenu;
