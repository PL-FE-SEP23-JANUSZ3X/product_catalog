import { Container, SxProps, Typography, useMediaQuery } from "@mui/material";
import '../../App.css'
import Slider from '../slider/Slider'

export type CopyrightProps = {
  sx: SxProps;
};

const BANNER_IMAGES = [
  '/img/banner/banner-page.png',
  '/img/banner/banner-phones.png',
  '/img/banner/banner-tablets.png'
]

const MOBILE_BANNER_IMAGES = [
  '/img/banner/banner-page-mobile.png',
  '/img/banner/banner-phones.png',
  '/img/banner/banner-tablets.png'
]

const HomePage = () => {

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const images = isMobile ? MOBILE_BANNER_IMAGES : BANNER_IMAGES;

  return (
    <Container sx={{padding: 0}}>
      <Typography variant="h1" sx={
        {
          my: { xs: '32px', md: '52px' },
          fontSize: 32,
          lineHeight: '41px',
        }}>Welcome to Nice Gadgets store!</Typography>
      <Slider images={images} />
    </ Container>
  );
};

export default HomePage;
