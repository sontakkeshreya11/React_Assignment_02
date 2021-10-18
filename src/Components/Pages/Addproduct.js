import React from 'react';
import {Form,Button,Row,Col,Offcanvas} from 'react-bootstrap';
import Productstyle from '../Alignment/AlignEditedproduct';
import axios from 'axios';
import {useRef,useState} from 'react';
import './Style.css'
const Addproduct = () => {
  const [show, setShow] = useState(false);
  const[valid,setValid]=useState(false);
  const[product,setProduct]=useState([]);
  const title_value=useRef(null);
  const image_value=useRef(null);
  const price_value=useRef(null);
  const category_value=useRef(null);
  const details_value=useRef(null);
  const [errors,setErrors]=useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const newProduct= async(valid_title,valid_image,valid_details,valid_price,valid_categoty)=>{
    setErrors("");
    const response= await axios.post('https://fakestoreapi.com/products',{
      title: valid_title,
      price: valid_price,
      description: valid_details,
      image: valid_image,
      category:valid_categoty
  });
    setProduct(response.data);
    handleShow();
    [title_value,image_value,category_value,price_value,details_value].map((values)=>values.current.value="")
  }
  const validation=(title,image,details,price,category)=>{
    console.log("in validation title",title);
    if(!title || !image || !details || !price || !category || title.indexOf(' ')===0 || price.indexOf(' ')===0){
       setErrors("Field cant be empty or whitespace");
    }
    else{setValid(true);};
    if(valid===true){newProduct(title,image,details,price,category);}
  
  } 
    return (
        <>
        <div className="container">
            <Form>
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
      <Button variant="outline-success" size="lg" onClick={()=>validation(title_value.current.value,image_value.current.value,details_value.current.value,price_value.current.value,category_value.current.value)}>Submit</Button>
      </Col>
    </Row>
    </Form.Group>
</Form>
<Offcanvas show={show} onHide={handleClose} placement="bottom" className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>You Added product</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <Productstyle title={product.title} image={product.image} description={product.description} price={product.price} category={product.category}/>
        </Offcanvas.Body>
      </Offcanvas>
</div>
        </>
    )
}

export default Addproduct
