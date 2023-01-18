import styled from 'styled-components';

export const Img = styled.img`
  max-width: 10vw;
  height: 25vh;
  float: left;
  margin-right: 2vw;
`;

export const Box = styled.div`
  width: 25vw;
  height: 30vh;
  border: 1px solid #a7a7a7;
  float: left;
  margin: 5vh 2vw;
  padding: 2vh 2vw;
`;

export const MarginDiv = styled.div`
  margin-bottom: 2vh;
`;

export const DivOrder = styled(MarginDiv)`
  font-size: 18px;
  font-weight: 600;
`;

export const OrderWrapper = styled.div`
  width: 70vw;
  float: left;
`;

export const FormBox = styled.div`
  width: 20vw;
  height: 40vh;
  float: left;
  margin-top: 5vh;
  border: 2px solid #777777;
  border-radius: 5px;
  padding: 5vh 2vw;
`;

export const Sum = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 1vh 0;
`;
