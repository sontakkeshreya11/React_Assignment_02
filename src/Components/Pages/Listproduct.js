import axios from "axios";
import { useEffect, useState } from "react";
import Alignproducts from "../Alignment/Alignproducts";
function Listproduct( {val,limit}){
    const [products,setProducts]=useState([]);

    const getProducts=async()=>{
        const limit_int=parseInt(limit);
        if(val===undefined){
            const response= await axios.get(`https://fakestoreapi.com/products?limit=${limit_int}`);
            setProducts(response.data);
        }
        else{
            const response= await axios.get(`https://fakestoreapi.com/products/category/${val}`);
            setProducts(response.data);
        }
    }
    useEffect(()=>getProducts());
    return(
    <><Alignproducts productData={products}/></>);

}
export default Listproduct;