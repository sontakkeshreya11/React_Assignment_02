import React from 'react';
import {Form,Button,Row,Col,Offcanvas} from 'react-bootstrap';
import Productstyle from '../Alignment/AlignEditedproduct';
import axios from 'axios';
import {useRef,useState} from 'react';
import '../Style/Style.css';
const Addproduct = () => {
  const [productdetails,setProductdetails]=useState({title:"",category:"",price:"",image:"",details:""});
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
  const newProduct= async()=>{
    setErrors("");
    const response= await axios.post('https://fakestoreapi.com/products',{
      title:productdetails.title,
      price: productdetails.price,
      description: productdetails.details,
      image: productdetails.image,
      category:productdetails.category
  });
    setProduct(response.data);
    handleShow();
    [title_value,image_value,category_value,price_value,details_value].map((values)=>values.current.value="");
    setProductdetails({});
  }
  const handleInput=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setProductdetails({...productdetails,[name]:value});
    
  }
  const validation=()=>{
    setValid(true);
    const title=productdetails.title;
    const price=productdetails.price;
    const image=productdetails.image;
    const details=productdetails.details;
    const category=productdetails.category;
    if(!title || !image || !details || !price || !category){
       setErrors("Field cant be empty ");
       setValid(false);
    }
    if(title.indexOf(" ")===0||image.indexOf(" ")===0||details.indexOf(" ")===0||price.indexOf(" ")===0||category.indexOf(" ")===0)
    {setErrors("Field Cant Be whitespace");setValid(false)}

    submitstatus();
  } 
  const submitstatus=()=>{
    if(valid===true){ newProduct()}
  }
    return (
  <>
  <div className="container">
  <Form> 
  <Form.Group className="mb-3" >
    <Form.Label>Product Title</Form.Label>
    <Form.Control type="input" placeholder="Enter Product Title" name="title"ref={title_value} onChange={handleInput} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Category</Form.Label>
  <Form.Control type="input" placeholder="Enter Category" name="category"ref={category_value}  onChange={handleInput}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Price</Form.Label>
    <Form.Control type="input" placeholder="Enter price (in $)" name="price" ref={price_value} onChange={handleInput} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Image</Form.Label>
    <Form.Control type="input" placeholder="Enter Image Path" name="image" ref={image_value} onChange={handleInput} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Enter Details of product" ref={details_value} name="details" onChange={handleInput} />
  </Form.Group>
  <span><p className="para">{errors}</p></span>
  <Form.Group  className="mb-3">
    <Row>
      <Col xs={5}></Col>
      <Col xs={6}>
      <Button variant="outline-warning" type="reset" size="lg"onClick={()=>setErrors("")}>Reset</Button>{'  '}{' '}
      <Button variant="outline-success" size="lg" onClick={()=>validation()}>Submit</Button>
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
