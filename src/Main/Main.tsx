import React from 'react';
import { useAppSelector } from '../store/hooks.ts';
import { Category } from '../models/modelCategory';
import * as Main_category from '../styled/styled-main/SMain';
import Main_phones from './Main_phones.tsx';
const Button_Main = React.lazy(() => import('./Button_Main.tsx'));
const Main: React.FC = () => {
  const categories = useAppSelector((state) => state.shop.categories);
  return (
    <>
      {categories.map((el: Category) => (
        <Button_Main
          key={el.id}
          {...el}
          suspens={<div>Loading button category...</div>}
        />
      ))}
      <Main_category.Wrapper>
        <Main_phones />
      </Main_category.Wrapper>
    </>
  );
};
export default Main;
