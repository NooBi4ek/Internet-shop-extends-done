import React from 'react';
import { useAppDispatch } from '../store/hooks.ts';
import { filterCategories } from '../store/internet_shop_slice.ts';

interface ButtonMain {
  namecat: string;
}
const Button_Main: React.FC<ButtonMain> = ({ namecat }) => {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(filterCategories(namecat))}>
      {namecat}
    </button>
  );
};
export default Button_Main;
