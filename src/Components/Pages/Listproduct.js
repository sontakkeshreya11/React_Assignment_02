import { useEffect, useState } from "react";
import Alignproducts from "../Alignment/Alignproducts";
import {limitProduct,getCategory, getAllProducts} from "../../Api/Api";

function Listproduct( {val,limit}){
    const [products,setProducts]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
    const getProducts=async(value,limit_value)=>{
        const limit=parseInt(limit_value);
        if(value===undefined){
            if(limit===NaN){
           try {
               const response=await getAllProducts();
               setProducts(response.data);
               setIsLoading(false);
              }
            catch(e){
                console.log(e);
            }
        }
        else{
            try {
                const response=await limitProduct(limit);
                setProducts(response.data);
                setIsLoading(false);
               }
             catch(e){
                 console.log(e);
             }
        }
      }
        else{
            try{
            const response= await getCategory(val);
            setProducts(response.data);
            setIsLoading(false);
            }
            catch(e){
                console.log(e);
            }
        }
    }
    useEffect(()=>getProducts(val,limit),[val,limit]);
    return(
          <>
            {isLoading?<p className="loading">loading....</p>:
            <Alignproducts productData={products}/>}
          </>
        );
}
export default Listproduct;