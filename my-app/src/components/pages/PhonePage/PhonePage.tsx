import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';
import './PhonePageStyle.css';
import { useEffect, useState } from 'react';
import { getPhone } from '../../../utils/fetchHelper';
import { Phone } from '../../../types';

export const PhonePage = () => {
  const [phoneData, setPhoneData] = useState<Phone | null>(null);
  const [error, setError] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // getting phoneId from url
  const { phoneId } = useParams();

  useEffect(() => {
    const fetchPhoneData = async () => {
      if (typeof phoneId === 'string') {
        try {
          const data = await getPhone(phoneId);
          setPhoneData(data);
        } catch (error) {
          console.error('Failed to fetch phone data:', error);
        }
      } else {
        console.error('phoneId is undefined');
      }
    };

    fetchPhoneData();
  }, [phoneId]);

  // images placeholders
  const images = [
    {
      original:
        'https://storage.googleapis.com/image-storage-mate/img/phones/apple-iphone-11/black/00.webp',
      thumbnail:
        'https://storage.googleapis.com/image-storage-mate/img/phones/apple-iphone-11/black/00.webp',
    },
    {
      original:
        'https://storage.googleapis.com/image-storage-mate/img/phones/apple-iphone-11/black/02.webp',
      thumbnail:
        'https://storage.googleapis.com/image-storage-mate/img/phones/apple-iphone-11/black/02.webp',
    },
    {
      original:
        'https://storage.googleapis.com/image-storage-mate/img/phones/apple-iphone-11/black/03.webp',
      thumbnail:
        'https://storage.googleapis.com/image-storage-mate/img/phones/apple-iphone-11/black/03.webp',
    },
    {
      original:
        'https://storage.googleapis.com/image-storage-mate/img/phones/apple-iphone-11/black/04.webp',
      thumbnail:
        'https://storage.googleapis.com/image-storage-mate/img/phones/apple-iphone-11/black/04.webp',
    },
  ];

  console.log(phoneData);

  return (
    <Container>
      <Typography variant="h1" color="text.primary" mb="32px">
        phoneData:
      </Typography>

      <Typography>Name: {phoneData?.name}</Typography>
      <Typography>Color: {phoneData?.color}</Typography>
      <Typography>Capacity: {phoneData?.capacity}</Typography>

      <Box>
        <ImageGallery
          items={images}
          thumbnailPosition={isMobile ? 'bottom' : 'left'}
          showPlayButton={false}
          showBullets={false}
          showNav={false}
          showFullscreenButton={false}
        />
      </Box>
    </Container>
  );
};

export default PhonePage;
