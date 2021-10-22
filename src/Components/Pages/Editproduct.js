import React from "react";
import { Form, Button, Row, Col, Offcanvas } from "react-bootstrap";
import Productstyle from "../Alignment/AlignEditedproduct";
import { useRef, useState } from "react";
import "../Style/Style.css";
import { editProduct, getProductapi } from "../../Api/Api";
function Editproduct() {
  const [productdetails, setProductdetails] = useState({
    id: "",
    title: "",
    category: "",
    price: "",
    image: "",
    details: "",
  });
  const [show, setShow] = useState(false);
  const [valid, setValid] = useState(false);
  const [product, setProduct] = useState([]);
  const [oldproduct, setOldproduct] = useState([]);
  const title_value = useRef(null);
  const image_value = useRef(null);
  const price_value = useRef(null);
  const category_value = useRef(null);
  const details_value = useRef(null);
  const id_value = useRef(null);
  const [errors, setErrors] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const newProduct = async () => {
    setErrors("");
    const ide = parseInt(productdetails.id);
    try {
      const response = await editProduct(ide, productdetails);
      setProduct(response.data);
      SetIsLoading(false);
    } catch (e) {
      console.log(e);
    }
    try {
      const response_old = await getProductapi(ide);
      setOldproduct(response_old.data);
      isLoading(false);
    } catch (e) {
      console.log(e);
    }

    handleShow();
    [
      id_value,
      title_value,
      image_value,
      category_value,
      price_value,
      details_value,
    ].map((values) => (values.current.value = ""));
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductdetails({ ...productdetails, [name]: value });
  };
  const validation = () => {
    setValid(true);
    const id = productdetails.id;
    const title = productdetails.title;
    const price = productdetails.price;
    const image = productdetails.image;
    const details = productdetails.details;
    const category = productdetails.category;
    if (parseInt(id) > 20 || parseInt(id) < 1) {
      setErrors("Id Is Invalid");
      setValid(false);
    }
    if (!id || !title || !image || !details || !price || !category) {
      setErrors("Field cant be empty ");
      setValid(false);
    }
    if (
      title.indexOf(" ") === 0 ||
      image.indexOf(" ") === 0 ||
      details.indexOf(" ") === 0 ||
      price.indexOf(" ") === 0 ||
      category.indexOf(" ") === 0
    ) {
      setErrors("Field Cant Be whitespace");
      setValid(false);
    }
    submitstatus();
  };
  const submitstatus = () => {
    if (valid === true) {
      newProduct();
    }
  };
  return (
    <>
      <div className="container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="input"
              placeholder="Enter id you want to edit"
              name="id"
              ref={id_value}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Title</Form.Label>
            <Form.Control
              type="input"
              placeholder="Enter Product Title"
              name="title"
              ref={title_value}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="input"
              placeholder="Enter Category"
              name="category"
              ref={category_value}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="input"
              placeholder="Enter price (in $)"
              name="price"
              ref={price_value}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="input"
              placeholder="Enter Image Path"
              name="image"
              ref={image_value}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Details of product"
              ref={details_value}
              name="details"
              onChange={handleInput}
            />
          </Form.Group>
          <span>
            <p className="para">{errors}</p>
          </span>
          <Form.Group className="mb-3">
            <Row>
              <Col xs={5}></Col>
              <Col xs={6}>
                <Button
                  variant="outline-warning"
                  type="reset"
                  size="lg"
                  onClick={() => setErrors("")}
                >
                  Reset
                </Button>
                {"  "}{" "}
                <Button
                  variant="outline-success"
                  size="lg"
                  onClick={() => validation()}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="bottom"
          className="offcanvas"
        >
          {isLoading ? (
            <p className="loading">loading...</p>
          ) : (
            <>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Your Edited product</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Productstyle
                  title={product.title}
                  image={product.image}
                  description={product.description}
                  price={product.price}
                  category={product.category}
                />
                <Offcanvas.Title>Your previous product</Offcanvas.Title>
                <Productstyle
                  title={oldproduct.title}
                  image={oldproduct.image}
                  description={oldproduct.description}
                  price={oldproduct.price}
                  category={oldproduct.category}
                />
              </Offcanvas.Body>
            </>
          )}
        </Offcanvas>
      </div>
    </>
  );
}

export default Editproduct;
