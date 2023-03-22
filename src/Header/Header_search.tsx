import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks.ts';
import { useNavigate } from 'react-router-dom';
import * as Header_Search_style from '../styled/styled-header/SHeader';
import { Modalcontent } from '../styled/styled-modal/SModal';
import { filterSearchPhone } from '../store/internet_shop_slice.ts';
const Header_search: React.FC = () => {
  const filter = useAppSelector((state) => state.shop.filterSearch);
  const dispatch = useAppDispatch();
  const [search, SetSearch] = useState('');
  const [searchModal, SetSearchModal] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(filterSearchPhone(search));
  }, [search]);
  return (
    <div>
      <Header_Search_style.ModalSearchWrapper
        searchModal={searchModal}
        onClick={() => SetSearchModal(false)}
      >
        <Modalcontent
          title="Modal content"
          onClick={(e) => e.stopPropagation()}
        >
          <Header_Search_style.WrapperResult>
            {filter.map((phone) => (
              <Header_Search_style.Searching_phone
                key={phone.id}
                onClick={() => {
                  navigate(`${phone.id}`);
                  SetSearchModal(false);
                }}
              >
                {phone.name}
              </Header_Search_style.Searching_phone>
            ))}
          </Header_Search_style.WrapperResult>
        </Modalcontent>
      </Header_Search_style.ModalSearchWrapper>
      <Header_Search_style.Header_input
        type="search"
        placeholder="please,seach..."
        value={search}
        searchModal={searchModal}
        onChange={(e) => {
          SetSearch(e.target.value);
        }}
        onClick={() => SetSearchModal(true)}
      />
    </div>
  );
};
export default Header_search;
