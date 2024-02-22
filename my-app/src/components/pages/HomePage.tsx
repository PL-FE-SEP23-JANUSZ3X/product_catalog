import { Box, CardMedia, Container, SxProps, Typography, useMediaQuery } from "@mui/material";
import Slider from '../slider/Slider'
import Section from "../section/Section";
import Carousel from "../carousel/Carousel";
import { useEffect, useState } from "react";
import { useThemeContext } from "../../theme/ThemeContext";
import { NavLink } from "react-router-dom";
import { Product } from "../../types/Product";
import { getCategory, getSortedProducts } from "../../utils/fetchHelper";

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
  const [hotPrices, setHotPrices] = useState<Product[]>([]);

  const [phonesLength, setPhonesLength] = useState<number>(0);
  const [tabletsLength, setTabletsLength] = useState<number>(0);
  const [accessoriesLength, setAccesoriesLength] = useState<number>(0);

  const { theme } = useThemeContext();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const images = isMobile ? MOBILE_BANNER_IMAGES : BANNER_IMAGES;

  const newModelSectionTitle = 'Brand new models';
  const hotPricesSectionTitle = 'Hot prices';

  const category = 'phones';
  const sortHotPrices = 'hotprice';
  const sortNewModel = 'newest';
  const startIndex = 0;
  const limitIndex = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseHotPrices = await getSortedProducts(category, sortHotPrices, +startIndex, +limitIndex);
        const responseNewModel = await getSortedProducts(category, sortNewModel, +startIndex, +limitIndex);

        const pLength = await getCategory('phones')
        const tLength = await getCategory('tablets')
        const aLength = await getCategory('accessories')

        setPhonesLength(pLength)
        setTabletsLength(tLength)
        setAccesoriesLength(aLength)

        setHotPrices(responseHotPrices)
        setNewModels(responseNewModel);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])

  return (
    <>
      <Container
        sx={{
          px:{xs: 0, sm: 0, md: 0, lg: 0},
          maxWidth: { sm: '592px', md: '1136px', lg:'1136px'},
          width: {md: '1136px'},
          mt: { xs: '24px', m: '32px', md: '56px' },
          mb: { xs: '56px', sm: '64px', md: '80px' },
        }}
      >
        <Typography variant={isMobile ? "h1" : "h1Mob"}
          sx={{
            display: 'block',
            mb: '32px',
            px: { xs: '16px', sm: 0},
            fontSize: 32,
            lineHeight: '41px',
          }}
        >Welcome to Nice Gadgets store!</Typography>
        <Slider images={images} />
      </Container>

      <Section>
        <Carousel title={newModelSectionTitle} products={newModels} />
      </Section>

      <Section>
        <Box>

          <Typography variant={isMobile ? "h2" : "h2Mob"} sx={{fontSize: { xs: '24px', sm: '32px' }, mb: '50px'}}>Shop by category</Typography>
          <Box sx={{ display: 'flex', flexWrap: ['wrap', 'nowrap'], gap: '16px', mt: '24px' }}>

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
              <Typography variant={"h4"} sx={{mt: '24px'}}>Mobile phones</Typography>
              <Typography variant='body1' sx={{mt: '4px', color: 'secondary.main'}}>{`${phonesLength} models`}</Typography>
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
              <Typography variant='body1' sx={{mt: '4px', color: 'secondary.main'}}>{`${tabletsLength} models`}</Typography>
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
              <Typography variant='body1' sx={{mt: '4px', color: 'secondary.main'}}>{`${accessoriesLength} models`}</Typography>
            </NavLink>
          </Box>
        </Box>
      </Section>
  
      <Section>
        <Carousel title={hotPricesSectionTitle} products={hotPrices} />
      </Section>
    </>
  );
};

export default HomePage;