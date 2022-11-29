import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

  const dispatch = useDispatch();

  const purchases = useSelector((state) => state.purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk())
  }, [])


  return (
    <div>
      <h1>Purchases</h1>
      {purchases.map(purchase => (
        <ul
          key={purchase.id}
          style={{
            width: "50%",
            display: "flex",
            flexWrap: "wrap"
            
          }}
        >
          {purchase.cart.products.map(product => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card
                border="light"
                style={{
                  width: '20rem'
                }}>
                <Card.Header>{product.createdAt}</Card.Header>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    ${product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Link>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Purchases;