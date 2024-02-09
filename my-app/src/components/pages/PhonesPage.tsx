import { Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import PhoneCard from '../phoneCard/PhoneCard';
import { Phone } from '../../types';
import { getPhones } from '../../utils/fetchHelper';

const PhonesPage: FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadPhones = async () => {
      try {
        setIsLoading(true);
        const phones = await getPhones();
        setPhones(phones);
      } catch (err) {
        if (err instanceof Error) {
          setErrorMessage(err.message);
          return;
        }

        console.error('An unknown error occurred', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadPhones();
  }, []);

  return (
    <>
      <Typography variant="h1" color="text.primary" mb="32px">
        PhonesPage
      </Typography>
      {isLoading && <h1>Loading...</h1>}
      {errorMessage != null && <h1>{errorMessage}</h1>}
      {phones.length > 0 &&
        phones.map((phone) => <PhoneCard key={phone.id} phone={phone} />)}
    </>
  );
};

export default PhonesPage;
