import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCartThunk, getCartThunk } from '../store/slices/cart.slice';

const CartSideBar = ({ show, handleClose }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk())
  }, []);

  const cart = useSelector((state) => state.cart);

  console.log(cart)

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shop cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map(product => (
            <div
              style={{
                disaplay: "flex",
                marginBottom: "3rem",
                border: '1px solid gray',
                padding: '10px',
                borderRadius: '5px'
              }}
              key={product.id}>
              <p><b>{product.title}</b></p>
              <p><b>Quantity: </b>{product.productsInCart.quantity}</p>
              <p><b>Total: </b>${product.price * product.productsInCart.quantity}</p>
            </div>
          ))}
          <Button onClick={()=> dispatch(checkoutCartThunk())}>Checkout</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartSideBar;