import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks.ts';
import * as Mainphone from '../styled/styled-mainphone/SMainphone';
import { addToOrder, afterAddOrder } from '../store/internet_shop_slice.ts';
interface MainPhone {
  id: number;
  name: string;
  price: string | number;
  img: string;
  click: boolean;
  company: string;
}

const Main_phone: React.FC<MainPhone> = ({
  id,
  name,
  img,
  price,
  click,
  company,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <>
      <Mainphone.Main_onephone_block>
        <Mainphone.Main_onephone_img
          src={'./img/' + img}
          alt={name}
          onClick={() => {
            navigate(`${id}`);
          }}
        />
        <div className="phoneName">{name}</div>
        <div className="phoneName">{price} UAH</div>
        <Mainphone.Button_buy
          key={id}
          onClick={() => {
            dispatch(addToOrder(id));
            dispatch(afterAddOrder(company));
          }}
          title="Buy"
        >
          {click ? 'In the box' : 'Buy'}
        </Mainphone.Button_buy>
      </Mainphone.Main_onephone_block>
    </>
  );
};
export default Main_phone;
