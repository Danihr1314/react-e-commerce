import React, { useEffect } from 'react';
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
      Purchases
      {purchases.map(purchase => (
        <ul key={purchase.id}>
          {purchase.cart.products.map(product => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <li>
                <h3><b>Product: </b>{product.title}</h3>
                <h3><b>Price: </b>${product.price}</h3>
                <h3><b>Purchase Date: </b>{product.createdAt}</h3>
              </li>
            </Link>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Purchases;