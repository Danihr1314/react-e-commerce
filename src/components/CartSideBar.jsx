import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../store/slices/cart.slice';

const CartSideBar = ({show, handleClose}) => {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCartThunk())
  },[]); 

  const cart = useSelector((state)=> state.cart);

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shop cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map(product => (
            <div key={product.id}>{product.title}</div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartSideBar;