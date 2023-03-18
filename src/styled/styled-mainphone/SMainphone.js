import styled from 'styled-components';
import { Button } from '../styled-dublicate/SDubl';

export const Main_phone_wrapper = styled.div``;

export const Main_onephone_block = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 350px;
  min-height: 400px;
  float: left;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin: 2vw 4.2vw;
  user-select: none;
  font-size: 18px;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    box-shadow: 10px 5px 5px #000, -1em 0 0.4em #a5a5a5;
    transform: translateX(-2em);
    transform: translateY(-0.1in);
  }
`;

export const Main_onephone_img = styled.img`
  min-width: 50px;
  max-height: 200px;
`;

export const Button_buy = styled(Button)`
  padding: 5px 30px;
  border: 1px solid ${(props) => (props.click ? 'red' : 'black')};
  margin: 15px 0 20px 0;
  &:hover {
    color: gold;
  }
`;
