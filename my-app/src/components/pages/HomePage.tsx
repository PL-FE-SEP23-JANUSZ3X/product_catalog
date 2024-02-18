import { Box, CardMedia, Container, SxProps, Typography, useMediaQuery } from "@mui/material";
import Slider from '../slider/Slider'
import Section from "../section/Section";
import Carousel from "../carousel/Carousel";
import { useEffect, useState } from "react";
import { useThemeContext } from "../../theme/ThemeContext";
import { NavLink } from "react-router-dom";
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

  const newModelSectionTitle = 'Brand new models'

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
        <Carousel title={newModelSectionTitle} products={newModels} />
      </Section>
      <Section>
        <Box>
          <Typography variant="h2" sx={{fontSize: { xs: '24px', sm: '32px' }, mb: '24px'}}>Shop by category</Typography>
          <Box sx={{ display: 'flex', flexWrap: ['wrap', 'nowrap'], gap: '16px' }}>
            <NavLink to={"/phones"} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box 
                sx={{width: { xs: '288px', sm: '187px', md: '368px' },
                  height: { xs: '288px', sm: '187px', md: '368px' },
                  position: 'relative', backgroundColor: '#6D6474', overflow: 'hidden'
                }}
              >
                <CardMedia
                  component="img"
                  src="img/categories/category-phone.png"
                  sx={{position:'relative', left: { xs: '32px', sm: '24px', md: '21px' }, top: { xs: '35px', sm: '20px', md: '40px' },
                  width: { xs: '302.09px', sm: '196.15px', md: '386px' },
                  height: { xs: '357.65px', sm: '232.23px', md: '457px' }}}
                />
              </Box>
              <Typography variant='h4' sx={{mt: '24px'}}>Mobile phones</Typography>
              <Typography variant='body1' sx={{mt: '4px', color: 'secondary.main'}}>95 models</Typography>
            </NavLink>
            <NavLink to={"/tablets"} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box 
                sx={{width: { xs: '288px', sm: '187px', md: '368px' },
                  height: { xs: '288px', sm: '187px', md: '368px' },
                  position: 'relative', backgroundColor: '#6D6474', overflow: 'hidden'
                }}
              >
                <CardMedia
                  component="img"
                  src="img/categories/category-tablets.png"
                  sx={{position:'relative', left: { xs: '17px', sm: '10px', md: '49px' }, top: { xs: '23.1px', sm: '20px', md: '40px' },
                  width: { xs: '427.3px', sm: '277.45px', md: '546px' },
                  height: { xs: '427.3px', sm: '277.45px', md: '546px' }}}
                />
              </Box>
              <Typography variant='h4' sx={{mt: '24px'}}>Tablets</Typography>
              <Typography variant='body1' sx={{mt: '4px', color: 'secondary.main'}}>24 models</Typography>
            </NavLink>
            <NavLink to={"/accessories"} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box 
                sx={{width: { xs: '288px', sm: '187px', md: '368px' },
                  height: { xs: '288px', sm: '187px', md: '368px' },
                  position: 'relative', backgroundColor: '#6D6474', overflow: 'hidden'
                }}
              >
                <CardMedia
                  component="img"
                  src="img/categories/category-accesories.png"
                  sx={{position:'relative', left: { xs: '-289.65px', sm: '-189px', md: '-368px' }, top: { xs: '-355.9px', sm: '-218px', md: '-439px' },
                  width: { xs: '1152px', sm: '748px', md: '1472px' },
                  height: { xs: '688.7px', sm: '447.17px', md: '880px' }}}
                />  
              </Box>
              <Typography variant='h4' sx={{mt: '24px'}}>Accessories</Typography>
              <Typography variant='body1' sx={{mt: '4px', color: 'secondary.main'}}>100 models</Typography>
            </NavLink>
          </Box>
        </Box>
      </Section>
    </>
  );
};

export default HomePage;
