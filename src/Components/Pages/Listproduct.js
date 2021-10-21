import axios from "axios";
import { useEffect, useState } from "react";
import Alignproducts from "../Alignment/Alignproducts";
function Listproduct( {val,limit}){
    const [products,setProducts]=useState([]);
    const getProducts=async(value,limit_value)=>{
        const limit_int=parseInt(limit_value);
        if(value===undefined){
            const response= await axios.get(`https://fakestoreapi.com/products?limit=${limit_int}`);
            setProducts(response.data);
        }
        else{
            const response= await axios.get(`https://fakestoreapi.com/products/category/${value}`);
            setProducts(response.data);
        }
    }
    useEffect(()=>getProducts(val,limit),[val,limit]);
    return(
    <><Alignproducts productData={products}/></>);
}
export default Listproduct;