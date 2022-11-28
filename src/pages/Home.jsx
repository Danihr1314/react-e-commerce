import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterProductsThunk, getProductsThunk, searchProductThunk } from '../store/slices/products.slice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [categoryList, setCategoryList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  useEffect(() => {
    axios.get(`https://e-commerce-api.academlo.tech/api/v1/products/categories`)
      .then(res => setCategoryList(res.data.data.categories))
  }, [])

  //console.log(products);

  return (
    <div>
      <Row>
        <Col lg={3}>
          <ListGroup>
            {categoryList.map((category) => (
              <ListGroup.Item
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(filterProductsThunk(category.id))}
                variant="dark"
                key={category.id}
              >{category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col lg={9}>
          <h1>Products</h1>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search product"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />
            <Button
              onClick={() => dispatch(searchProductThunk(searchInput))}
              variant="outline-secondary"
            >
              Search
            </Button>
          </InputGroup>
          <Row xs={1} md={2} lg={3} className="g-4">
            {products.map(product => (
              <Col
                key={product.id}
              >
                <Card
                  style={{
                    width: 300,
                    height: 400
                  }}>
                  <Link to={`/product/${[product.id]}`} style={{ textDecoration: "none" }}>
                    <div className='card-image'>
                      <Card.Img
                        className="d-block mw-100 mh-100"
                        variant="top"
                        src={product.productImgs[0]}
                        style={{
                          width: "80%",
                          height: "auto",
                          objectFit: "contain"
                        }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text style={{ color: "rgba(100, 100, 100)" }}>
                        <span>Price</span><br></br>$ {product.price}
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;