import React from "react";
import {CartState}  from "../Component2/Context";
import SingleProduct from "./ProductPage";
import "./style.css";
import Filters from "./Filter";

//Landing page 
const Home = () => {
    const { state: {products },
    productState:{byRed,byBlue,byGreen,byMen,byWomen,byPrice1,byPrice2,byPrice3,byPolo,byHoodie,byBasic,searchQuery}
  } = CartState();
    const transformProducts=()=>{
      let sortedProducts=products;
      if(byRed){
        console.log(byRed);
        sortedProducts=sortedProducts.filter((prod)=>
       prod.color==="Red")
      }
      if(byBlue){
        sortedProducts=sortedProducts.filter((prod)=>
       prod.color==="Blue")
      }
      if(byGreen){
        sortedProducts=sortedProducts.filter((prod)=>
       prod.color==="Green")
      }
      if(byMen){
        sortedProducts=sortedProducts.filter((prod)=>
           prod.gender==="Men")
      }
      if(byWomen){
        sortedProducts=sortedProducts.filter((prod)=>
       prod.gender==="Women")
      }

      if(byPrice1){
        sortedProducts=sortedProducts.filter((prod)=>prod.price>=0 && prod.price<=250)};
      
      if(byPrice2){
        sortedProducts=sortedProducts.filter((prod)=>prod.price>250 && prod.price<=450);
      }
      if(byPrice3){
        sortedProducts=sortedProducts.filter((prod)=>prod.price>450);
      }
      if(byPolo){
        sortedProducts=sortedProducts.filter((prod)=>prod.type==="Polo")
      }
      if(byHoodie){
        sortedProducts=sortedProducts.filter((prod)=>
       prod.type==="Hoodie")
      }
      if(byBasic){
        sortedProducts=sortedProducts.filter((prod)=>
       prod.type==="Basic")
      }


      if(searchQuery){
        sortedProducts=sortedProducts.filter((prod)=>
        prod.name.includes(searchQuery)
      );
    }
    return sortedProducts;
      
    }
    return (
    <div className="home">
      <Filters/>
      
      <div className="productContainer "> 
      {
        transformProducts().map((prod)=>{
          return  <SingleProduct prod={prod} key={prod.id}/>
        })}
      </div>
    </div>);
};

export default Home;
