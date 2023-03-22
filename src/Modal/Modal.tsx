import React from 'react';
import { useAppSelector } from '../store/hooks.ts';
import { useNavigate } from 'react-router-dom';
import * as Modal from '../styled/styled-modal/SModal';
import ModalBusket from './ModalBusket/ModalBusket.tsx';
interface IModalWindow {
  modal: boolean;
  Setmodal: boolean;
}
const ModalWindow: React.FC<IModalWindow> = React.memo(function ModalWindow({
  modal,
  Setmodal,
}) {
  const orders = useAppSelector((state) => state.shop.orders);
  const navigate = useNavigate();
  let sum = 0;
  orders.forEach((el) => {
    sum += el.count * el.price;
  });
  return (
    <Modal.ModalWrapper modal={modal} onClick={() => Setmodal(false)}>
      <Modal.Modalcontent onClick={(e) => e.stopPropagation()}>
        {orders.length > 0 ? (
          <div>
            {orders.map((el) => (
              <ModalBusket key={el.id} orders={el} id={el.id} />
            ))}
            <Modal.Sum> Total sum: {sum}</Modal.Sum>
            <Modal.CheckOut
              onClick={() => {
                navigate('/checkout');
                Setmodal(false);
              }}
            >
              Check Out
            </Modal.CheckOut>
          </div>
        ) : (
          <Modal.Modal_div>This busket is empty</Modal.Modal_div>
        )}
      </Modal.Modalcontent>
    </Modal.ModalWrapper>
  );
});
export default ModalWindow;
