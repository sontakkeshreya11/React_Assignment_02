import { useEffect, useState } from "react";
import Alignproduct from "../Alignment/Aligncart";
import { getUserCart } from "../../Api/Api";

function Usercart(){
    const[cart,setCart]=useState([]);
    const[isLoading,SetIsLoading]=useState(true);
    const getcart=async()=>{
        try
        {
            const response=await getUserCart();
            setCart(response.data);
            SetIsLoading(false);
        }
        catch(e)
        {
             console.log(e);
        }
    }
    useEffect(()=>getcart(),[]);
    return(
      <>
        {isLoading?<p className="loading">loading .....</p>:
            cart.map((item)=>
            <span key={item.products.productId}>{item.products.map((product)=><Alignproduct productId={product.productId} date={item.date} quantity={product.quantity}/>)}</span>
            )
        }
        
     </>
    );
}
export default Usercart;