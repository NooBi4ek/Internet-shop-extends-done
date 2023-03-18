import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPhones } from '../models/models';
import {
  DeleteInVersus,
  versusMaxPrice,
  versusMaxThreads,
} from '../store/internet_shop_slice.ts';
import { ButtonPhone } from '../styled/styled-onePhone/SOnePhone';
import {
  Fill,
  PhoneChar,
  PhoneInfo,
  PhoneName,
  Price,
  Threads,
  Wrapper,
} from '../styled/styled-versus/SVersus';
const Versus: React.FC = () => {
  const dispatch = useDispatch();
  const versus = useSelector((state) => state.shop.versus_Phone);
  useEffect(() => {
    dispatch(versusMaxPrice());
    dispatch(versusMaxThreads());
  }, [versus]);
  const max_price = useSelector((state) => state.shop.maxPrice);
  const max_threads = useSelector((state) => state.shop.maxThreads);

  return (
    <div>
      {versus.length > 0 ? (
        versus.map((phone: IPhones) => (
          <Wrapper key={phone.id}>
            <PhoneName>{phone.name}</PhoneName>
            <PhoneInfo>
              Price:{' '}
              <Price max={max_price} price={phone.price}>
                {phone.price} UAH
              </Price>
            </PhoneInfo>
            <PhoneInfo>
              Quantity threads:
              <Threads
                max_threads={max_threads}
                threads={phone.quantity_threads}
              >
                {phone.quantity_threads} threads
              </Threads>
            </PhoneInfo>
            <PhoneInfo>
              Front camera: <PhoneChar>{phone.front_camera}</PhoneChar>
            </PhoneInfo>
            <PhoneInfo>
              Main camera: <PhoneChar>{phone.main_camera}</PhoneChar>
            </PhoneInfo>
            <PhoneInfo>
              Thread name: <PhoneChar>{phone.threads_name}</PhoneChar>
            </PhoneInfo>
            <PhoneInfo>
              Phone memory: <PhoneChar>{phone.memory} GB</PhoneChar>
            </PhoneInfo>
            <ButtonPhone onClick={() => dispatch(DeleteInVersus({ phone }))}>
              Remove in versus
            </ButtonPhone>
          </Wrapper>
        ))
      ) : (
        <Fill>Versus in fill</Fill>
      )}
    </div>
  );
};
export default Versus;
