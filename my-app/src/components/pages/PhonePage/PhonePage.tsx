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

export const PhonePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // getting phoneId from url
  const { phoneId } = useParams();
  console.log(phoneId);

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

  return (
    <Container>
      <Typography variant="h1" color="text.primary" mb="32px">
        One Phone Page
      </Typography>
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
