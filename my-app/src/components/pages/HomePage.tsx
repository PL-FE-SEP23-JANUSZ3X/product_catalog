import { Container, SxProps, Typography, useMediaQuery } from "@mui/material";
import Slider from '../slider/Slider'
import { useThemeContext } from "../../theme/ThemeContext";

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
  const { theme } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const images = isMobile ? MOBILE_BANNER_IMAGES : BANNER_IMAGES;

  return (
    <Container sx={{padding: 0, width: { xs: '320px', sm: '635px', md: '1200px'} }}>
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
