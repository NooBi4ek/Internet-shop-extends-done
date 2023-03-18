import React from 'react';
import { useDispatch } from 'react-redux';
import { IPhones } from '../../models/modelPhone';
import { addcount, deleteOrder } from '../../store/internet_shop_slice.ts';
import {
  Basket_button,
  Basket_div,
  Basket_img,
  Basket_wrapper,
} from '../../styled/styled-busket/SBusket';
interface ModalBusket {
  orders: IPhones;
  id: number;
}
const ModalBusket: React.FC<ModalBusket> = ({ orders, id }) => {
  const dispatch = useDispatch();
  return (
    <Basket_wrapper>
      <Basket_img src={'./img/' + orders.img} />
      <Basket_div>
        <div>{orders.name}</div>
        <div>{orders.price * orders.count} UAH</div>
        <div>{orders.count}</div>
        <Basket_button
          onClick={() => {
            dispatch(addcount({ id }));
          }}
        >
          Add count
        </Basket_button>
        <Basket_button
          onClick={() => {
            dispatch(deleteOrder({ orders }));
          }}
        >
          Delete count
        </Basket_button>
      </Basket_div>
    </Basket_wrapper>
  );
};
export default ModalBusket;
