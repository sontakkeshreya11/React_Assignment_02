import axios from 'axios';
import React from 'react';
import { useState ,useRef} from 'react';
import Productstyle from '../Alignment/AlignEditedproduct';
import {Form,Row,Col,Button,Offcanvas} from 'react-bootstrap'
import '../Style/Style.css';
function Deleteproduct() {
  const [show, setShow] = useState(false);
  const[product,setProduct]=useState([]);
  const reference=useRef(null);
  const errors=useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteById= async(delete_id)=>{
    delete_id=parseInt(delete_id);
    if(delete_id<1 || delete_id>20){
         errors.current.value="Id must be in range 1-20";
         reference.current.value="";
    }
    else{
    console.log(delete_id);
    const response= await axios.delete(`https://fakestoreapi.com/products/${delete_id}`);
    setProduct(response.data);
    handleShow();
    reference.current.value="";
  }
}
    return (
        <>
    <div className="container">
    <Form>
    <Row>
    <Col xs={6}>
    <Form.Group className="mb-3" controlId="input">
    <Form.Label>Enter Id:</Form.Label>
    <Form.Control type="text" placeholder="Enter Id To delete" ref={reference} />
    </Form.Group>
    </Col>
    <Col xs={3}>
    <br/>
    <Form.Group  className="mb-3">
      <Button variant="danger"onClick={()=>deleteById(reference.current.value)}>Delete</Button>
    </Form.Group>
    </Col>
    </Row>
    </Form>
    <span><p ref={errors}></p></span>
    <Offcanvas show={show} onHide={handleClose} placement="bottom" className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>You deleted product</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <Productstyle title={product.title} image={product.image} description={product.description} price={product.price} category={product.category}/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
        </>
    );
}

export default Deleteproduct;
