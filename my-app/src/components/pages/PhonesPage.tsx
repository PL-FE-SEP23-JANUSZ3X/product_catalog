import { Typography } from '@mui/material';
import axios from 'axios';
import { FC, Key, useEffect, useState } from 'react';
import PhoneCard from '../phoneCard/PhoneCard';
import { Phone } from '../../types';

const PhonesPage: FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    const loadPhones = async () => {
      try {
        const response = await axios.get('http://localhost:3000/phones');
        setPhones(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    loadPhones();
  }, []);

  return (
    <>
      <Typography variant="h1" color="text.primary" mb="32px">
        PhonesPage
      </Typography>
      {phones.length > 0 &&
        phones.map((phone) => <PhoneCard key={phone.id} phone={phone} />)}
    </>
  );
};

export default PhonesPage;
