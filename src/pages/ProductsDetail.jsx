import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductsDetail = () => {


  const { id } = useParams();
  const dispatch = useDispatch();
  const productsListed = useSelector(state => state.products);
  const product = productsListed.find((productId) => productId.id === Number(id))

  //console.log(product?.category.id)

  const similarProducts = productsListed.filter((prodId) =>
    prodId.category.id === product.category?.id
  );

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  return (
    <div>
      <Row lg>
        <Col lg={6}><img style={{width: 576, heigth: 576}} src={product?.productImgs[0]} alt="" /></Col>
        <Col lg={6}>
          <h3>{product?.title}</h3>
          <p>{product?.description}</p>
          <p><span>Price </span><br></br>{product?.price}</p>
        </Col>
      </Row>
      <h1>Related products</h1>
      <Row xs={1} md={2} lg={3} className="g-5">
        {similarProducts.map(newProduct => (
          <Col key={newProduct.id}>
            <Card
              style={{
                width: 300,
                height: 400
              }}
            >
              <Link to={`/product/${[product.id]}`} style={{ textDecoration: "none" }}>
                <div className='card-image'>
                  <Card.Img
                    variant="top"
                    src={newProduct.productImgs[0]}
                    style={{
                      width: 300,
                      height: 200
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{newProduct.title}</Card.Title>
                  <Card.Text>
                    Price
                    $ {newProduct.price}
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsDetail;