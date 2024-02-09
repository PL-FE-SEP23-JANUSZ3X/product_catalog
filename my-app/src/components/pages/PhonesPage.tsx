import { Typography } from '@mui/material';
import axios from 'axios';
import { FC, Key, useEffect, useState } from 'react';

type DescriptionItem = {
  text: string[];
  title: string;
};

type Phone = {
  camera: string;
  capacity: string;
  capacityAvailable: '{64GB,128GB,256GB}';
  cell: string[];
  color: string;
  colorsAvailable: string[];
  createdAt: string;
  description: DescriptionItem[];
  id: string;
  images: string[];
  name: string;
  namespaceId: string;
  priceDiscount: number;
  priceRegular: number;
  processor: string;
  ram: string;
  resolution: string;
  screen: string;
  updatedAt: string;
  zoom: string;
};

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
        phones.map((phone) => <p key={phone.id}>{phone.name}</p>)}
    </>
  );
};

export default PhonesPage;
