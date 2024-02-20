import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
  Skeleton,
  Link,
} from '@mui/material';
import ImageGallery from 'react-image-gallery';
import { NavLink, useParams } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';
import './PhonePage.style.css';
import { useEffect, useState } from 'react';
import { getPhone, getRecommended } from '../../../utils/fetchHelper';
import { Phone } from '../../../types';
import { ErrorMessage } from '../../../types/ErrorMessages';
import Section from '../../section/Section';
import ProductVariantsActions from '../../productVariantsActions/ProductVariantsActions';
import CustomBreadcrumbs from '../../navigation/CustomBreadcrumbs';
import { colors } from '../../../theme/colors';
import Carousel from '../../carousel/Carousel';
import { Product } from '../../../types/Product';

export const PhonePage = () => {
  const [recommendedModels, setRecommendedModels] = useState<Product[]>([]);
  const [phoneData, setPhoneData] = useState<Phone | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { phoneId } = useParams();

  useEffect(() => {
    const fetchPhoneData = async () => {
      if (typeof phoneId === 'string') {
        setError(null);
        setIsLoading(true);
        try {
          const data = await getPhone(phoneId);
          const recommendedData = await getRecommended(phoneId);
          setPhoneData(data);
          setRecommendedModels(recommendedData);
        } catch (error) {
          setError(ErrorMessage.LOAD);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.error('Id is undefined');
      }
    };

    fetchPhoneData();
  }, [phoneId]);

  const images = [
    {
      original: `${phoneData?.images[0]}`,
      thumbnail: `${phoneData?.images[0]}`,
    },
    {
      original: `${phoneData?.images[1]}`,
      thumbnail: `${phoneData?.images[1]}`,
    },
    {
      original: `${phoneData?.images[2]}`,
      thumbnail: `${phoneData?.images[2]}`,
    },
    {
      original: `${phoneData?.images[3]}`,
      thumbnail: `${phoneData?.images[3]}`,
    },
    {
      original: `${phoneData?.images[4]}`,
      thumbnail: `${phoneData?.images[4]}`,
    },
  ];

  if (error !== null) {
    return (
      <>
        <Typography>{error}</Typography>
      </>
    );
  }

  if (isLoading) {
    return (
      <Skeleton
        variant="rounded"
        sx={{
          width: { xs: '288px', sm: '592px', md: '752px' },
          height: { xs: '160px', sm: '128px' },
        }}
      />
    );
  }

  const navlinkStyle = {
    ml: 1,
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '15px',
    color:
      theme.palette.mode === 'light'
        ? colors.breadcrumbsLight
        : colors.breadcrumbsDark,
    ':hover': {
      color:
        theme.palette.mode === 'light'
          ? colors.breadcrumbsHoverLight
          : colors.breadcrumbsHoverDark,
    },
  };

  return (
    <Section>
      <Container sx={{ border: '1px solid red' }}>
        {/* BREADCRUMBS */}
        <CustomBreadcrumbs parrentLink="phones" currentPage="Favourites" />

        {/* BACK BUTTON */}
        <Box>
          <Box
            component="img"
            height={10}
            src={
              theme.palette.mode === 'light'
                ? '/images/icons/arr-left-light.svg'
                : '/images/icons/arr-left-dark.svg'
            }
          />
          <NavLink
            to={`/phones`}
            end
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            <Link component="div" variant="body2" sx={navlinkStyle}>
              Back
            </Link>
          </NavLink>
        </Box>

        {/* PRODUCT NAME */}
        <Typography variant="h2" color="text.primary">
          {phoneData?.name} (iMT9G2FS/A)
        </Typography>

        {/* IMAGE GALLERY & SPECS CONTAINER */}
        <Box
          sx={{
            border: '1px solid green',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: { xs: 'flex-start', sm: 'space-between' },
          }}
        >
          {/* IMAGE GALLERY */}
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

          {/* SPECS */}
          <Box>
            <ProductVariantsActions phoneData={phoneData} />
          </Box>
        </Box>

        {/* ABOUT & TECH SPECS CONTAINER*/}
        <Box
          sx={{
            border: '1px solid blue',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
          }}
        >
          {/* ABOUT */}
          <Box>
            <Typography variant="h3">About</Typography>
            <Divider sx={{ mb: '32px' }} />
            <Box>
              <Typography variant="h4">
                {phoneData?.description[0].title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                {phoneData?.description[0].text[0]}
              </Typography>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                {phoneData?.description[0].text[1]}
              </Typography>
              <Typography variant="h4">
                {phoneData?.description[1].title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                {phoneData?.description[1].text}
              </Typography>
              <Typography variant="h4">
                {phoneData?.description[2].title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                {phoneData?.description[2].text}
              </Typography>
            </Box>
          </Box>

          {/* TECH SPECS */}
          <Box>
            <Typography variant="h2">Tech Specs</Typography>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                Screen
              </Typography>
              <Typography variant="body1">{phoneData?.screen}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                Resolution
              </Typography>
              <Typography variant="body1">{phoneData?.resolution}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                Processor
              </Typography>
              <Typography variant="body1">{phoneData?.processor}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                RAM
              </Typography>
              <Typography variant="body1">{phoneData?.ram}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                Built in memory
              </Typography>
              <Typography variant="body1">{phoneData?.capacity}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                Camera
              </Typography>
              <Typography variant="body1">{phoneData?.camera}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                Zoom
              </Typography>
              <Typography variant="body1">{phoneData?.zoom}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                variant="body1"
                sx={{ mr: '12px', color: 'secondary.main' }}
              >
                Cell
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'right' }}>
                {phoneData?.cell.join(', ')}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Carousel title={'You may also like'} products={recommendedModels} />
        </Box>
      </Container>
    </Section>
  );
};

export default PhonePage;
