import React from 'react';
import { useSelector } from 'react-redux';
import * as Checkout_Buy from '../styled/styled-checkout/SCheckOut';

const CheckOut_Buy_Form: React.FC = () => {
  const orders = useSelector((state) => state.shop.orders);
  const sum = useSelector((state) => state.shop.sum);
  return (
    <>
      {orders.length > 0 && (
        <Checkout_Buy.FormBox>
          <Checkout_Buy.Sum>Total sum: {sum} UAH</Checkout_Buy.Sum>
          <Checkout_Buy.Label>
            Name: <input />
          </Checkout_Buy.Label>
          <Checkout_Buy.Label>
            Surname: <input />
          </Checkout_Buy.Label>
          <Checkout_Buy.Label>
            E-mail: <input />
          </Checkout_Buy.Label>
          <Checkout_Buy.Label>
            Number Phone: <input />
          </Checkout_Buy.Label>
          <button>Submit checkout</button>
        </Checkout_Buy.FormBox>
      )}
    </>
  );
};
export default CheckOut_Buy_Form;
