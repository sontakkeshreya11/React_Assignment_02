import React from 'react';
import {Form,Col,Row} from 'react-bootstrap';
import Listproduct from '../Pages/Listproduct';
import {useState,useRef} from 'react';
import {Button} from 'react-bootstrap';
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
    <>
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
    </>
  );
}
export default Home;