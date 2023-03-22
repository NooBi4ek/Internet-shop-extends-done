import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { IPhones } from '../models/models';
import {
  versusMaxPrice,
  versusMaxThreads,
} from '../store/internet_shop_slice.ts';
import VersusBlock from './VersusBlock.tsx';
import { Fill } from '../styled/styled-versus/SVersus';
const Versus: React.FC = () => {
  const dispatch = useAppDispatch();
  const versus = useAppSelector((state) => state.shop.versus_Phone);
  useEffect(() => {
    dispatch(versusMaxPrice());
    dispatch(versusMaxThreads());
  }, [versus]);

  return (
    <div>
      {versus.length > 0 ? (
        versus.map((phone: IPhones) => (
          <VersusBlock key={phone.id} {...phone} />
        ))
      ) : (
        <Fill>Versus in fill</Fill>
      )}
    </div>
  );
};
export default Versus;
