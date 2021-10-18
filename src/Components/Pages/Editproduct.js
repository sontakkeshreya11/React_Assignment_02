import React from 'react';
import {Form,Button,Row,Col,Offcanvas} from 'react-bootstrap';
import Productstyle from '../Alignment/AlignEditedproduct';
import axios from 'axios';
import {useRef,useState} from 'react';
import './Style.css'
const Editproduct= () => {
  const [show, setShow] = useState(false);
  const[valid,setValid]=useState(false);
  const[product,setProduct]=useState([]);
  const[previousproduct,setPreviousproduct]=useState([]);
  const title_value=useRef(null);
  const image_value=useRef(null);
  const price_value=useRef(null);
  const category_value=useRef(null);
  const details_value=useRef(null);
  const id_value=useRef(null);
  const [errors,setErrors]=useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const editProduct= async(valid_id,valid_title,valid_image,valid_details,valid_price,valid_categoty)=>{
    setErrors("");
    valid_id=parseInt(valid_id);
    const response= await axios.put(`https://fakestoreapi.com/products/${valid_id}`,{
      title: valid_title,
      price: valid_price,
      description: valid_details,
      image: valid_image,
      category:valid_categoty
  });
  setProduct(response.data);
   const response_prev=await axios.get(`https://fakestoreapi.com/products/${valid_id}`);
    setPreviousproduct(response_prev.data);
    handleShow();
    [title_value,image_value,category_value,price_value,details_value].map((values)=>values.current.value="")
  }
  const validation=(id,title,image,details,price,category)=>{
    console.log("in validation title",title);
    if(!id || !title || !image || !details || !price || !category || title.indexOf(' ')===0){
       setErrors("Field cant be empty or whitespace");
    }
    else{setValid(true);}
    if(valid===true){editProduct(id,title,image,details,price,category)}}
    
    return (
        <>
    <div className="container">
            <Form>
   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Id</Form.Label>
    <Form.Control type="input" placeholder="Enter Product Title" ref={id_value}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Product Title</Form.Label>
    <Form.Control type="input" placeholder="Enter Product Title" ref={title_value}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
    <Form.Label>Category</Form.Label>
    <Form.Control type="input" placeholder="Enter Category" ref={category_value} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
    <Form.Label>Price</Form.Label>
    <Form.Control type="input" placeholder="Enter price (in $)"  ref={price_value}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
    <Form.Label>Image</Form.Label>
    <Form.Control type="input" placeholder="Enter Image Path" ref={image_value}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} ref={details_value}/>
  </Form.Group>
  <span><p className="para">{errors}</p></span>
  <Form.Group  className="mb-3">
    <Row>
      <Col xs={5}></Col>
      <Col xs={6}>
      <Button variant="outline-warning" type="reset" size="lg"onClick={()=>setErrors("")}>Reset</Button>{'  '}{' '}
      <Button variant="outline-success" size="lg" onClick={()=>validation(id_value.current.value,title_value.current.value,image_value.current.value,details_value.current.value,price_value.current.value,category_value.current.value)}>Submit</Button>
      </Col>
    </Row>
    </Form.Group>
</Form>
<Offcanvas show={show} onHide={handleClose} placement="bottom" className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Edited product</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <Productstyle title={product.title} image={product.image} description={product.description} price={product.price} category={product.category}/>
           <Offcanvas.Title>Your Previous Product</Offcanvas.Title>
           <Productstyle title={previousproduct.title} image={previousproduct.image} description={previousproduct.description} price={previousproduct.price} category={previousproduct.category}/>      </Offcanvas.Body>
      </Offcanvas>
</div>
        </>
    )
}

export default Editproduct;
