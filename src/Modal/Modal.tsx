import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  CheckOut,
  Modalcontent,
  ModalWrapper,
  Modal_div,
  Sum,
} from '../styled/styled-modal/SModal';
import ModalBusket from './ModalBusket/ModalBusket.tsx';
interface IModalWindow {
  modal: boolean;
  Setmodal(): boolean;
}
const ModalWindow: React.FC<IModalWindow> = ({ modal, Setmodal }) => {
  const orders = useSelector((state) => state.shop.orders);
  const navigate = useNavigate();
  let sum = 0;
  orders.forEach((el) => {
    sum += el.count * el.price;
  });
  return (
    <ModalWrapper modal={modal} onClick={() => Setmodal(false)}>
      <Modalcontent onClick={(e) => e.stopPropagation()}>
        {orders.length > 0 ? (
          <div>
            {orders.map((el) => (
              <ModalBusket key={el.id} orders={el} id={el.id} />
            ))}
            <Sum> Total sum: {sum}</Sum>
            <CheckOut
              onClick={() => {
                navigate('/checkout');
                Setmodal(false);
              }}
            >
              Check Out
            </CheckOut>
          </div>
        ) : (
          <Modal_div>This busket is empty</Modal_div>
        )}
      </Modalcontent>
    </ModalWrapper>
  );
};
export default ModalWindow;
