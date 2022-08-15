import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../Component2/Context";

//For each Product
const SingleProduct = ({prod}) => {

   const {
    state:{ cart },
    dispatch,
   }= CartState();



  return (
    <div className="products">
     <Card>
      <Card.Img variant="top" src={prod.imageURL} alt={prod.name}/>
       <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Subtitle style={{ paddingBottom:10}}>
          <span>Rs {prod.price}</span>
        </Card.Subtitle>
        {/* {cart.some((p)=>p.id===prod.id)?(
           <Button onClick={()=>{
            dispatch({
              type:"REMOVE_FROM_CART",
              payload: prod,
            });
          }}>
          Remove from cart
          </Button>  ):(  */}
        <Button onClick={()=>{
          dispatch({
            type:"ADD_TO_CART",
            payload: prod,
          }) }}>
        Add_to_cart
        </Button>
       {/* )
        
        } */}
        
       </Card.Body>
     </Card>
    </div>
  )
};

export default SingleProduct;
