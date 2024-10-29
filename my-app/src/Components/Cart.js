import { useContext } from "react";
import CartContext from "./CartContext";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Cart = () => {
  // const { cart, addCart } = useContext(CartContext);
  console.log("cart", cart);
  return cart.map((res) => (
    <Accordion key={res.card.info.id}>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>{res.card.info.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {res.card.info.description}
          <button>Remove From Cart</button>
        </Typography>
      </AccordionDetails>
    </Accordion>
  ));
};

export default Cart;
