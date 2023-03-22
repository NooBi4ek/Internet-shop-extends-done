import React from 'react';
import { useAppDispatch } from '../../store/hooks.ts';
import { IPhones } from '../../models/modelPhone';
import { addcount, deleteOrder } from '../../store/internet_shop_slice.ts';
import * as Modalbusket from '../../styled/styled-busket/SBusket';
interface ModalBusket {
  orders: IPhones;
  id: number;
}
const ModalBusket: React.FC<ModalBusket> = ({ orders, id }) => {
  const dispatch = useAppDispatch();
  return (
    <Modalbusket.Basket_wrapper>
      <Modalbusket.Basket_img src={'./img/' + orders.img} />
      <Modalbusket.Basket_div>
        <div>{orders.name}</div>
        <div>{orders.price * orders.count} UAH</div>
        <div>{orders.count}</div>
        <Modalbusket.Basket_button
          onClick={() => {
            dispatch(addcount(id));
          }}
        >
          Add count
        </Modalbusket.Basket_button>
        <Modalbusket.Basket_button
          onClick={() => {
            dispatch(deleteOrder({ orders }));
          }}
        >
          Delete count
        </Modalbusket.Basket_button>
      </Modalbusket.Basket_div>
    </Modalbusket.Basket_wrapper>
  );
};
export default ModalBusket;
