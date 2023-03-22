import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import React, { useEffect } from 'react';
import { startPhone } from '../store/internet_shop_slice.ts';
import * as Mainphone from '../styled/styled-mainphone/SMainphone';
import '../styled/styled-mainphone/SMainphone.css';
import { IPhones } from '../models/modelPhone';
import Main_phone from './Main_phone.tsx';
const Main_phones: React.FC = () => {
  const dispatch = useAppDispatch();
  const filterphone = useAppSelector((state) => state.shop.filter_phone);
  useEffect(() => {
    dispatch(startPhone());
  }, []);
  return (
    <Mainphone.Main_phone_wrapper>
      {filterphone.map((phone: IPhones) => (
        <Main_phone key={phone.id} {...phone} />
      ))}
    </Mainphone.Main_phone_wrapper>
  );
};
export default Main_phones;
