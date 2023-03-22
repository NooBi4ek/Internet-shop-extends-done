import React from 'react';
import { ButtonPhone } from '../styled/styled-onePhone/SOnePhone';
import * as Versus_phone from '../styled/styled-versus/SVersus';
import { useAppSelector, useAppDispatch } from '../store/hooks.ts';
import { IPhones } from '../models/modelPhone';
import { DeleteInVersus } from '../store/internet_shop_slice.ts';
const VersusBlock: React.FC<IPhones> = ({
  id,
  name,
  price,
  quantity_threads,
  front_camera,
  main_camera,
  threads_name,
  memory,
}) => {
  const dispatch = useAppDispatch();
  const max_price = useAppSelector((state) => state.shop.maxPrice);
  const max_threads = useAppSelector((state) => state.shop.maxThreads);
  return (
    <Versus_phone.Wrapper key={id}>
      <Versus_phone.PhoneName>{name}</Versus_phone.PhoneName>
      <Versus_phone.PhoneInfo>
        Price:{' '}
        <Versus_phone.Price max={max_price} price={price}>
          {price} UAH
        </Versus_phone.Price>
      </Versus_phone.PhoneInfo>
      <Versus_phone.PhoneInfo>
        Quantity threads:
        <Versus_phone.Threads
          max_threads={max_threads}
          threads={quantity_threads}
        >
          {quantity_threads} threads
        </Versus_phone.Threads>
      </Versus_phone.PhoneInfo>
      <Versus_phone.PhoneInfo>
        Front camera:{' '}
        <Versus_phone.PhoneChar>{front_camera}</Versus_phone.PhoneChar>
      </Versus_phone.PhoneInfo>
      <Versus_phone.PhoneInfo>
        Main camera:{' '}
        <Versus_phone.PhoneChar>{main_camera}</Versus_phone.PhoneChar>
      </Versus_phone.PhoneInfo>
      <Versus_phone.PhoneInfo>
        Thread name:{' '}
        <Versus_phone.PhoneChar>{threads_name}</Versus_phone.PhoneChar>
      </Versus_phone.PhoneInfo>
      <Versus_phone.PhoneInfo>
        Phone memory:{' '}
        <Versus_phone.PhoneChar>{memory} GB</Versus_phone.PhoneChar>
      </Versus_phone.PhoneInfo>
      <ButtonPhone onClick={() => dispatch(DeleteInVersus(id))}>
        Remove in versus
      </ButtonPhone>
    </Versus_phone.Wrapper>
  );
};
export default VersusBlock;
