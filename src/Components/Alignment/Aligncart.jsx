import {Card,Image,Row,Col,Table} from 'react-bootstrap';
import './Style.css';
import axios from 'axios';
import {useState} from 'react'
function Alignproduct({productId,date,quantity}){
    const [product,setProduct]=useState([]);
    const q=parseInt(quantity);
    const getcart=async()=>{
        productId=parseInt(productId);
        const response=await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
    }
    getcart();
   return(
       <>
        <container fluid>
        <Card className="cart-card">
        <Card.Body>
        <Row>
        <Col xs={3}>
          <Image src={product.image} rounded className="card-image" />
        </Col>
        <Col xs={1}></Col>
        <Col xs={7}>
        <Table striped bordered hover>
          <h2>{product.title}</h2>
      <tbody>
       <tr>
        <td><b>Price</b></td>
        <td>${product.price}</td>
        </tr>
        <tr>
        <td><b>Category</b></td>
        <td>{product.category}</td>
        </tr>
        <tr>
        <td><b>Date</b></td>
        <td>{date}</td>
        </tr>
        <tr>
        <td><b>Quantity</b></td>
        <td>{quantity}</td>
        </tr>
        <tr>
        <td><b>Total</b></td>
        <td>${q*parseInt(product.price)}</td>
        </tr>
        </tbody>
</Table>
        </Col>
        </Row>
        </Card.Body>
        </Card>
        </container>
    </>
    );
}
export default Alignproduct;