import {Card,ListGroup} from 'react-bootstrap';
import '../Style/Style.css';
import {Container} from 'react-bootstrap';

function Alignproducts({productData}){
   return(
       <>
        <Container fluid>
        <section className="main-card--cointainer">
        {productData.map((curElem) => {
          const { id,title, category, image, description,price } = curElem;

          return (
            <>
              <div className="card-container">
                <Card className="card " key={id}>
                <Card.Img variant="top" src={image} />
                  <div className="card-body">
                    
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    </Card.Text>
                  </div>
                  <ListGroup variant="flush">
                            <ListGroup.Item><b>Category</b>{' '}<span className="card-author subtle"> {category}</span></ListGroup.Item>
                            <ListGroup.Item><b>Price</b>{''}<span>$ {price}</span></ListGroup.Item>
                 </ListGroup>

                  <span className="card-tag  subtle">Order Now</span>
                </Card>
              </div>
            </>
          );
        })}
      </section>
        </Container>
       </>
    );
}

export default Alignproducts;