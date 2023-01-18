import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPhones } from '../models/models';
import { deleteOrder } from '../store/internet_shop_slice.ts';
import {
  Box,
  Button,
  DivOrder,
  FormBox,
  Img,
  Label,
  OrderWrapper,
  Sum,
} from '../styled/styled-checkout/SCheckOut';
const CheckOut = () => {
  const orders = useSelector((state) => state.shop.orders);
  const phones = useSelector((state) => state.shop.phones);
  const dispatch = useDispatch();
  let sum = 0;
  orders.forEach((el) => {
    sum += el.count * el.price;
  });
  return (
    <div>
      <OrderWrapper>
        {orders.map((order: IPhones) => (
          <Box>
            <Img src={'./img/' + order.img} />
            <DivOrder>{order.name}</DivOrder>
            <DivOrder>{order.price * order.count} UAH</DivOrder>
            <DivOrder>Quanitity device: {order.count}</DivOrder>
          </Box>
        ))}
      </OrderWrapper>
      <FormBox>
        <Sum>Total sum: {sum} UAH</Sum>
        <Label>
          Name: <input />
        </Label>
        <Label>
          Surname: <input />
        </Label>
        <Label>
          E-mail: <input />
        </Label>
        <Label>
          Number Phone: <input />
        </Label>
        <button>Submit checkout</button>
      </FormBox>
    </div>
  );
};

export default CheckOut;
