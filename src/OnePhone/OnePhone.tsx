import React from 'react';
import { useParams } from 'react-router-dom';
import { IPhones } from '../models/models';
import OnePhoneBlock from './OnePhoneBlock.tsx';

interface OnePhone {
  phones: IPhones;
}
const OnePhone: React.FC<OnePhone> = ({ phones }) => {
  const { id } = useParams();
  return (
    <div>
      {phones.map(
        (phone: IPhones) =>
          phone.id == id && <OnePhoneBlock key={phone.id} {...phone} />,
      )}
    </div>
  );
};

export default OnePhone;
