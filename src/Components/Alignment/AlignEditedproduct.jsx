import { Card, Image, Row, Col, Table, Container } from "react-bootstrap";
import "../Style/Style.css";

function Productstyle({ title, price, image, description, category }) {
  return (
    <>
      <Container fluid="sm">
        <Card className="cart-card">
          <Card.Body>
            <Row>
              <Col xs={3}>
                <Image src={image} rounded className="card-image" />
              </Col>
              <Col xs={1}></Col>
              <Col xs={7}>
                <h2>{title}</h2>
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>
                        <b>Price</b>
                      </td>
                      <td>${price}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Category</b>
                      </td>
                      <td>{category}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Description</b>
                      </td>
                      <td>{description}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Productstyle;
