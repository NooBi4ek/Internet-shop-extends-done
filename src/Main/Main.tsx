import React from 'react';
import { useAppSelector } from '../store/hooks.ts';
import { Category } from '../models/modelCategory';
import { Main_Wrapper } from '../styled/styled-main/SMain';
import Button_Main from './Button_Main.tsx';
import Main_phones from './Main_phones.tsx';
const Main: React.FC = () => {
  const categories = useAppSelector((state) => state.shop.categories);
  return (
    <>
      {categories.map((el: Category) => (
        <Button_Main key={el.id} {...el} />
      ))}
      <Main_Wrapper>
        <Main_phones />
      </Main_Wrapper>
    </>
  );
};
export default Main;
