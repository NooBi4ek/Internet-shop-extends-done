import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks.ts';
import { IPhones } from '../models/models';
import { countSum } from '../store/internet_shop_slice.ts';
import * as Checkout from '../styled/styled-checkout/SCheckOut';
const CheckOut_Buy_Form = React.lazy(() => import('./CheckOut_Buy_Form.tsx'));
const CheckOut: React.FC = () => {
  const orders = useAppSelector((state) => state.shop.orders);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(countSum());
  }, [orders]);
  return (
    <div>
      <Checkout.OrderWrapper>
        {orders.length > 0 ? (
          orders.map((order: IPhones) => (
            <Checkout.Box>
              <Checkout.Img src={'./img/' + order.img} />
              <Checkout.DivOrder>{order.name}</Checkout.DivOrder>
              <Checkout.DivOrder>
                {order.price * order.count} UAH
              </Checkout.DivOrder>
              <Checkout.DivOrder>
                Quanitity device: {order.count}
              </Checkout.DivOrder>
            </Checkout.Box>
          ))
        ) : (
          <h2>Checkout is fill</h2>
        )}
      </Checkout.OrderWrapper>
      <CheckOut_Buy_Form fallback={<div>Loading form...</div>} />
    </div>
  );
};

export default CheckOut;
