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
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ProductPage.style.css';
import { useEffect, useState } from 'react';
import {
  getAccessory,
  getPhone,
  getRecommended,
  getTablet,
} from '../../../utils/fetchHelper';
import { Phone } from '../../../types';
import { ErrorMessage } from '../../../types/ErrorMessages';
import Section from '../../section/Section';
import ProductVariantsActions from '../../productVariantsActions/ProductVariantsActions';
import CustomBreadcrumbs from '../../navigation/CustomBreadcrumbs';
import { colors } from '../../../theme/colors';
import Carousel from '../../carousel/Carousel';
import { Product } from '../../../types/Product';

export const ProductPage = () => {
  const [recommendedModels, setRecommendedModels] = useState<Product[]>([]);
  const [productData, setProductData] = useState<Phone | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { itemId } = useParams<Record<string, string>>();

  const category = useLocation()
    .pathname.split('/')
    .filter((element) => element)[0];

  useEffect(() => {
    const fetchProductData = async () => {
      if (typeof itemId === 'string') {
        setError(null);
        setIsLoading(true);
        try {
          let data;

          switch (category) {
            case 'phones':
              data = await getPhone(itemId);
              break;
            case 'tablets':
              data = await getTablet(itemId);
              break;
            case 'accessories':
              data = await getAccessory(itemId);
              break;
            default:
              break;
          }

          const recommendedData = await getRecommended(itemId);

          setProductData(data);
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

    fetchProductData();
  }, [itemId]);

  const images = productData
    ? productData.images.map((imgLink) => ({
        original: imgLink,
        thumbnail: imgLink,
      }))
    : [];

  if (error !== null) {
    return (
      <>
        <Typography>{error}</Typography>
      </>
    );
  }

  if (isLoading) {
    return (
      <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <Skeleton
          variant="rounded"
          sx={{
            width: { xs: '95%', sm: '90%', md: '85%', lg: '80%' },
            my: { xs: '72px', sm: '92px' },
            height: { xs: '100vh', sm: '100vh' },
          }}
        />
      </Box>
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
      <Container  sx={{minWidth: '1136px'}}>
        {/* BREADCRUMBS */}
        <CustomBreadcrumbs
          parrentLink={`${category}`}
          currentPage={`${productData?.namespaceId}`}
        />

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
            onClick={() => {
              navigate(-1);
            }}
          >
            <Link component="div" variant="body2" sx={navlinkStyle}>
              Back
            </Link>
          </NavLink>
        </Box>

        {/* PRODUCT NAME */}
        <Typography
          variant="h3"
          color="text.primary"
          sx={{ m: '12px 0 30px 0' }}
        >
          {productData?.name} (iMT9G2FS/A)
        </Typography>

        {/* IMAGE GALLERY & SPECS CONTAINER */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: { xs: 'flex-start', sm: 'space-between' },
            gap: { xs: '30px', sm: '12px', md: '60px' },
          }}
        >
          {/* IMAGE GALLERY */}
          <Box sx={{ flex: '0 1 60%' }}>
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
          <Box sx={{ flex: '0 1 40%' }}>
            <ProductVariantsActions
              productData={productData}
              category={category}
            />
          </Box>
        </Box>

        {/* ABOUT & TECH SPECS CONTAINER*/}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: { sm: '12px', md: '64px' },
          }}
        >
          {/* ABOUT */}
          <Box
            sx={{
              flex: '0 1 60%',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              mb: '60px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Typography variant="h3">About</Typography>
              <Divider />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Typography variant="h4">
                {productData?.description[0].title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                {productData?.description[0].text[0]}
              </Typography>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                {productData?.description[0].text[1]}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Typography variant="h4">
                {productData?.description[1].title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                {productData?.description[1].text}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Typography variant="h4">
                {productData?.description[2].title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                {productData?.description[2].text}
              </Typography>
            </Box>
          </Box>

          {/* TECH SPECS */}
          <Box
            sx={{
              flex: '0 1 40%',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              mb: '60px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Typography variant="h3">Tech Specs</Typography>
              <Divider />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                  Screen
                </Typography>
                <Typography variant="body1">{productData?.screen}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                  Resolution
                </Typography>
                <Typography variant="body1">
                  {productData?.resolution}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                  Processor
                </Typography>
                <Typography variant="body1">
                  {productData?.processor}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                  RAM
                </Typography>
                <Typography variant="body1">{productData?.ram}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                  Built in memory
                </Typography>
                <Typography variant="body1">{productData?.capacity}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                  Camera
                </Typography>
                <Typography variant="body1">{productData?.camera}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                  Zoom
                </Typography>
                <Typography variant="body1">{productData?.zoom}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  variant="body1"
                  sx={{ mr: '12px', color: 'secondary.main' }}
                >
                  Cell
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'right' }}>
                  {productData?.cell.join(', ')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Carousel title={'You may also like'} products={recommendedModels} />
      </Container>
    </Section>
  );
};
