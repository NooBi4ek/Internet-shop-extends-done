import React from 'react';
import { useAppDispatch } from '../store/hooks.ts';
import { filterCategories } from '../store/internet_shop_slice.ts';
import * as Main from '../styled/styled-main/SMain';
interface ButtonMain {
  namecat: string;
}
const Button_Main: React.FC<ButtonMain> = ({ namecat }) => {
  const dispatch = useAppDispatch();
  return (
    <Main.Button onClick={() => dispatch(filterCategories(namecat))}>
      {namecat}
    </Main.Button>
  );
};
export default Button_Main;
