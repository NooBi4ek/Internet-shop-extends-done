import styled from 'styled-components';
import { ModalWindow } from '../styled-dublicate/SDubl';
export const Header_Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 15vh;
  width: 100vw;
  background-color: #050402;
  align-items: center;
  color: #fff;
`;

export const Header_div = styled.div`
  color: #fff;
  font-weight: 400;
`;

export const Header_name_company = styled(Header_div)`
  font-size: 20px;
  margin-bottom: 2vh;
  cursor: pointer;
`;

export const Header_div_normal = styled(Header_div)`
  font-size: 24px;
`;

export const Header_input = styled.input`
  width: 25vw;
  height: 3vh;
  font-size: 24px;
  outline: none;
  background-color: #050402;
  border: 0px;
  color: #fff;
  border: 1px solid #524336;
  padding: 5px 0;
  position: ${(props) => (props.searchModal ? 'fixed' : 'absolute')};
  margin-left: 2vw;
`;
export const Header_button = styled.button`
  background-color: #050402;
  color: #fff;
  border: none;
  font-size: 1vh 2vw;
  transition: 0.3s ease-in-out;
  border: none;
  &:hover {
    color: gold;
  }
`;

export const ModalSearchWrapper = styled(ModalWindow)`
  opacity: ${(props) => (props.searchModal ? '1' : '0')};
  pointer-events: ${(props) => (props.searchModal ? 'all' : 'none')};
`;

export const WrapperResult = styled.div`
  margin-top: 10vh;
  color: #000;
`;

export const Searching_phone = styled.div`
  max-width: 30vw;
  font-size: 30px;
  margin-top: 2vh;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    text-shadow: 1px 1px 5px #a5a5a5;
    letter-spacing: 0.05em;
    font-weight: 600;
  }
`;
