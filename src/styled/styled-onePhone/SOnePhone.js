import styled from 'styled-components';
import { Button } from '../styled-dublicate/SDubl';

export const ImgPhone = styled.img`
  max-width: 100vw;
  max-height: 50vh;
  margin: 0 10vw 0 5vw;
  float: left;
`;

export const Wrapper = styled.div`
  margin-top: 10vh;
`;

export const PhoneName = styled.p`
  font-size: 30px;
`;

export const PhonePrice = styled.div`
  font-size: 30px;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 0.1em;
`;

export const ButtonPhone = styled(Button)`
  padding: 10px 60px;
  border: 1px solid ${(props) => (props.click ? 'red' : 'black')};
  margin: 5vh 1vw;
  &:hover {
    transform: translateY(-0.05in);
    box-shadow: 6px 3px 3px #a5a5a5;
    color: gold;
  }
`;

export const Phone_Char = styled.div`
  margin: 1vh 0 0 0;
  font-size: 20px;
  font-style: italic;
  font-weight: 600;
  letter-spacing: 0.05em;
`;
