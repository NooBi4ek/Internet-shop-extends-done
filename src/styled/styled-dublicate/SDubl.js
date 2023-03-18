import styled from 'styled-components';

export const ModalWindow = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  border-radius: 7px;
  font-weight: 600;
  font-size: 18px;
  font-style: italic;
  border: none;
  transition: 0.5s ease-in-out;
`;
