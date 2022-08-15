import React from 'react';
import { Nav,Container,FormControl, Navbar,Dropdown } from 'react-bootstrap'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { CartState } from '../Component2/Context';

//Navbar 

 function Header() {
   
    const {
        state:{ cart },
        productDispatch
       }= CartState();


  return (
    <Navbar bg="gray" variant="light" style={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/" ><h2>TeeRex Store</h2></Link>
            </Navbar.Brand>
        
        <Navbar.Text className="search">
            <FormControl
              style={{ width: 370}} 
              placeholder="search a product"
              className="m-auto"
              onChange={(e)=>{
                productDispatch({
                    type:"FILTER_BY_SEARCH",
                    payload: e.target.value,
                });
              }}
              />
        </Navbar.Text>
         <Link to="/cart">
        <Nav>
        <Dropdown >
            <Dropdown.Toggle variant="success" >
                <AiOutlineShoppingCart color="white" fontSize="25px"/>
                <> {cart.length}</>
            </Dropdown.Toggle>

       
        </Dropdown>
        </Nav>
       </Link> 
    </Container>
    </Navbar>
  )
}
export default Header;