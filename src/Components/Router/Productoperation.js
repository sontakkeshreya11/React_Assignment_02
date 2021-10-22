import React from 'react'
import Addproduct from '../Pages/Addproduct';
import Deleteproduct from '../Pages/Deleteproduct';
import Editproduct from '../Pages/Editproduct';
import{ useParams,} from "react-router-dom";

function  Productoperation () {
    let {operationId}=useParams();
    return(
        <>
            {operationId==='addproduct' ?<Addproduct/>:<p></p>}
            {operationId==='editproduct' ?<Editproduct/>:<p></p>}
            {operationId==='deleteproduct' ?<Deleteproduct/>:<p></p>}       
       </>
    );
}

export default Productoperation;
