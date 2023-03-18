import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../models/modelCategory';
import { filterCategories } from '../store/internet_shop_slice.ts';
import { Main_Wrapper } from '../styled/styled-main/SMain';
import Main_phone from './Main_phone.tsx';
const Main: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.shop.categories);
  return (
    <>
      {categories.map((el: Category) => (
        <button key={el.id} onClick={() => dispatch(filterCategories({ el }))}>
          {el.namecat}
        </button>
      ))}
      <Main_Wrapper>
        <Main_phone />
      </Main_Wrapper>
    </>
  );
};
export default Main;
