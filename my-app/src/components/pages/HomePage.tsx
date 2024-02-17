import { Container, SxProps, Typography, useMediaQuery } from "@mui/material";
import Slider from '../slider/Slider'
import Section from "../section/Section";
import Carousel from "../carousel/Carousel";
import { useEffect, useState } from "react";
import { useThemeContext } from "../../theme/ThemeContext";
import { Product } from "../../types/Product";

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
  const [newModels, setNewModels] = useState<Product[]>([]);
  const { theme } = useThemeContext();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const images = isMobile ? MOBILE_BANNER_IMAGES : BANNER_IMAGES;

  const newModelScectionTitle = 'Brand new models'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://phone-catalog-f9j4.onrender.com/phones/pagination/newest-0-20-asc`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const phonesData = await response.json();
        setNewModels(phonesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])

  return (
    <>
      <Container sx={{ padding: 0, width: { xs: '320px', sm: '635px', md: '1200px' } }}>
        <Typography variant="h1" sx={{
          my: { xs: '32px', md: '52px' },
          fontSize: 32,
          lineHeight: '41px',
        }}>Welcome to Nice Gadgets store!</Typography>
        <Slider images={images} />
      </Container>
      <Section>
        <Carousel title={newModelScectionTitle} products={newModels} />
      </Section>
    </>
  );
};

export default HomePage;