import axios from "axios";
import { useEffect, useState } from "react";
import Alignproduct from "../Alignment/Aligncart";
function Usercart(){
    const[cart,setCart]=useState([]);
    const getcart=async()=>{
        const response=await axios.get('https://fakestoreapi.com/carts/user/1');
        setCart(response.data);
    }
    useEffect(()=>getcart(),[]);
    return(
        <>
        {cart.map((item)=>
           <span>{item.products.map((product)=><Alignproduct productId={product.productId} date={item.date} quantity={product.quantity}/>)}</span>
        )}
        </>
    )
}
export default Usercart;