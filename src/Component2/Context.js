import React, { useEffect, useState } from "react";
import { createContext,useReducer,useContext } from "react";
import cartReducer, { productReducer } from "./ContextReducer";
import data from "../Component/data";
const Cart=createContext();
const Context =({children})=>{
   
  useEffect(()=>{
    fetchItems();
  },[]);



   const [items,setproducts]=useState([]);
   const fetchItems=async()=>{
    const data=await fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`);
    const items=await data.json();
    setproducts(items);
   };
  
   const products=data;
  
    const [state, dispatch]=useReducer(cartReducer,{
        products: products,
        cart: []
    });
  
  const [productState, productDispatch]=useReducer(productReducer,{
    byBlue:false
    ,byRed:false
    ,byGreen:false
    ,byMen:false
    ,byWomen:false
    ,byPrice1:false
    ,byPrice2:false
    ,byPrice3:false
    ,byPolo:false
    ,byHoodie:false
    ,byBasic:false
    ,searchQuery:"",
    })

  
   return(<Cart.Provider value={{ state, dispatch,productState,productDispatch  }}>
    {children}
  </Cart.Provider>
  );
};


export default Context;

export const CartState=()=>{
    return useContext(Cart);
};

