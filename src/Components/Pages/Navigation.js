import React from "react";
import { useRef,useState,useEffect } from "react";
import {Form,Button,Row,Col} from 'react-bootstrap'
 import{ BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Listproduct from "./Listproduct";
import Usercart from "./Usercart";
import Productoperation from "./Productoperation"
import './Style.css';
import axios from "axios";
export default function Navigation() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/" className="Link">Home</Link>
          </li>
          <li>
            <Link to="/categories" className="Link">Category</Link>
          </li>
          <li>
            <Link to="/cart" className="Link">Cart</Link>
          </li>
          <li>
            <Link to="/manageproduct" className="Link">Manage Product</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categories">
            <Topics />
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path='/manageproduct'>
            <Manageproduct/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Cart(){
  return (
    <>
      <Usercart/> 
    </>
  );
}
function Home() {
  const[limitvalue,setLimitvalue]=useState([]);
  const reference=useRef(null);
  const setlimit = (limit_value)=>{
     if(parseInt(limit_value)>20 || parseInt(limit_value)<1){setLimitvalue('20')}
      setLimitvalue(limit_value);
      reference.current.value="";
    }
    const resetval= ()=>{
      
       reference.current.value="";
       setLimitvalue(20);
    }
  return (
    <div>
      <Form>
    <Row>
    <Col xs={2}></Col>
    <Col xs={5}>
    <Form.Group className="mb-3" controlId="input">
    <Form.Label>Enter limit:</Form.Label>
    <Form.Control type="text" placeholder="Enter limit" ref={reference} />
    </Form.Group>
    </Col>
    <Col xs={3}>
    <br/>
    <Form.Group  className="mb-3">
      <Button variant="success"onClick={()=>setlimit(reference.current.value)}>Enter</Button>{' '}
      <Button variant="primary"onClick={()=>resetval()}>Reset</Button>
    </Form.Group>
    </Col>
    </Row>
    </Form>
    {
     !limitvalue ? <Listproduct/>:<Listproduct limit={limitvalue}/>
    }
    </div>
  );
}

function Topics() {
  let { path, url } = useRouteMatch();
  const[categories,setCategories]=useState([]);
  const getCategories=async()=>{
    const response=await axios.get('https://fakestoreapi.com/products/categories');
    setCategories(response.data);
  }
  useEffect(() =>getCategories(),[])
  return (
    <div>
      <ul>
        {categories.map((category)=> {return(<li>
          <Link to={`${url}/${category}` } className="Link1">{category}</Link>
        </li>);})}
      </ul>

      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}
function Manageproduct() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/addproduct` }className="Link1">Add Product</Link>
        </li>
        <li>
          <Link to={`${url}/editproduct`} className="Link1">Edit Product</Link>
        </li>
        <li>
          <Link to={`${url}/deleteproduct`} className="Link1">Delete Product </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:operationId`}>
          <Operation />
        </Route>
      </Switch>
    </div>
  );
}
function Topic() {
  let { topicId } = useParams();

  return (
    <div>
          
          <Listproduct val={topicId}/>
    </div>
  );
}
function Operation(){
  let {operationId}=useParams();
  return(
  <>
     <Productoperation val={operationId}/>
  </>);
}
