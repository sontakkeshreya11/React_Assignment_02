import { Container, Card, Image, Row, Col, Table } from "react-bootstrap";
import "../Style/Style.css";
import { useState, useEffect } from "react";
import { getProductapi } from "../../Api/Api";

function Alignproduct({ productId, date, quantity }) {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const q = parseInt(quantity);
  const getcart = async () => {
    try {
      productId = parseInt(productId);
      const response = await getProductapi(productId);
      setProduct(response.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getcart();
  }, []);
  return (
    <>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <Container fluid>
            <Card className="cart-card">
              <Card.Body>
                <Row>
                  <Col xs={3}>
                    <Image src={product.image} rounded className="card-image" />
                  </Col>
                  <Col xs={1}></Col>
                  <Col xs={7}>
                    <h2>{product.title}</h2>
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>
                            <b>Price</b>
                          </td>
                          <td>${product.price}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Category</b>
                          </td>
                          <td>{product.category}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Date</b>
                          </td>
                          <td>{date}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Quantity</b>
                          </td>
                          <td>{quantity}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Total</b>
                          </td>
                          <td>${q * parseFloat(product.price)}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </>
      )}
    </>
  );
}

export default Alignproduct;
