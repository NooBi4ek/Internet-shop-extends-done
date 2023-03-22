import React from 'react';
import * as Onephone from '../styled/styled-onePhone/SOnePhone';
import { addToVersus, addToOrder } from '../store/internet_shop_slice.ts';
import { useAppDispatch } from '../store/hooks.ts';
import { IPhones } from '../models/modelPhone';
const OnePhoneBlock: React.FC<IPhones> = ({
  id,
  img,
  name,
  price,
  click,
  click_versus,
  front_camera,
  quantity_threads,
  main_camera,
}) => {
  const dispatch = useAppDispatch();
  return (
    <Onephone.Wrapper key={id}>
      <Onephone.ImgPhone src={`./img/${img}`} alt={`${name}`} />
      <Onephone.PhoneName>{name}</Onephone.PhoneName>
      <Onephone.PhonePrice>{price} UAH</Onephone.PhonePrice>
      <Onephone.ButtonPhone
        key={id}
        onClick={() => {
          dispatch(addToOrder(id));
        }}
        click={click}
        disabled={click ? true : false}
      >
        {click ? 'In the box' : 'Buy'}
      </Onephone.ButtonPhone>
      <Onephone.ButtonPhone
        onClick={() => {
          dispatch(addToVersus(id));
        }}
        disabled={click_versus ? true : false}
      >
        {click_versus ? 'Added to versus' : 'Add to versus'}
      </Onephone.ButtonPhone>
      <h1>Phone Characteristics</h1>
      <Onephone.Phone_Char>Front Camera: {front_camera}</Onephone.Phone_Char>
      <Onephone.Phone_Char>
        Quantity threads: {quantity_threads} threads
      </Onephone.Phone_Char>
      <Onephone.Phone_Char>Main Camera: {main_camera}</Onephone.Phone_Char>
    </Onephone.Wrapper>
  );
};
export default OnePhoneBlock;
