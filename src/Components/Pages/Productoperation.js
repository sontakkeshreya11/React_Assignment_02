import React from 'react'
import Addproduct from './Addproduct';
import Deleteproduct from './Deleteproduct';
import Editproduct from './Editproduct';
function  Productoperation ({val}) {
    return(
        <>
        {val==='addproduct' ?<Addproduct/>:<p></p>}
        {val==='editproduct' ?<Editproduct/>:<p></p>}
        {val==='deleteproduct' ?<Deleteproduct/>:<p></p>}       </>
    );
}

export default Productoperation;
