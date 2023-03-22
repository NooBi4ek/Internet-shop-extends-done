import React from 'react';
import '../styled/styled-header/SHeader.css';
import { useNavigate } from 'react-router-dom';
import Header_search from './Header_search.tsx';
import * as Header_Style from '../styled/styled-header/SHeader';
interface Header {
  Setmodal(): boolean;
}

const Header: React.FC<Header> = ({ Setmodal }) => {
  const navigate = useNavigate();
  return (
    <Header_Style.Header_Wrapper>
      <Header_Style.Header_div>mail@gmail.com</Header_Style.Header_div>
      <Header_Style.Header_div_normal className="search_and_name">
        <Header_Style.Header_name_company
          className="name_company"
          onClick={() => navigate('/')}
        >
          Name company
        </Header_Style.Header_name_company>
        <Header_search />
      </Header_Style.Header_div_normal>
      <Header_Style.Header_button onClick={() => Setmodal(true)}>
        Busket
      </Header_Style.Header_button>
      <Header_Style.Header_button onClick={() => navigate('/versus')}>
        Check versus
      </Header_Style.Header_button>
    </Header_Style.Header_Wrapper>
  );
};
export default Header;
