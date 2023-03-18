import styled from 'styled-components';
import { ModalWindow } from '../styled-dublicate/SDubl';
export const ModalWrapper = styled(ModalWindow)`
  opacity: ${(props) => (props.modal ? '1' : '0')};
  pointer-events: ${(props) => (props.modal ? 'all' : 'none')};
`;
export const Modalcontent = styled.div`
  overflow-y: auto;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  width: 40vw;
  height: 80vh;
`;
export const Modal_div = styled.div`
  margin: 50% auto;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`;

export const Sum = styled.div`
  float: left;
`;

export const CheckOut = styled.div`
  float: right;
  font-weight: 600;
  cursor: pointer;
`;
