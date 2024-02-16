import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Divider
} from '@mui/material';
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';
import './PhonePageStyle.css';
import { useEffect, useState } from 'react';
import { getPhone } from '../../../utils/fetchHelper';
import { Phone } from '../../../types';
import { ErrorMessage } from '../../../types/ErrorMessages';
import Section from '../../section/Section';
import ProductVariantsActions from '../../productVariantsActions/ProductVariantsActions';

export const PhonePage = () => {

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
          setPhoneData(data);
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
      original:
        `${phoneData?.images[0]}`,
      thumbnail:
        `${phoneData?.images[0]}`,
    },
    {
      original:
        `${phoneData?.images[1]}`,
      thumbnail:
        `${phoneData?.images[1]}`,
    },
    {
      original:
        `${phoneData?.images[2]}`,
      thumbnail:
        `${phoneData?.images[2]}`,
    },
    {
      original:
        `${phoneData?.images[3]}`,
      thumbnail:
        `${phoneData?.images[3]}`,
    },
    {
      original:
        `${phoneData?.images[4]}`,
      thumbnail:
        `${phoneData?.images[4]}`,
    },
  ];

    if (error !== null) {
      return (
        <>
          <Typography>{error}</Typography>
        </>
      );
    }
  
  return (

    <Section>
      <Container>
        {isLoading && <h2>Loading...</h2>}
        <img src='/images/icons/arr-left-light.svg' />
        <Typography mb="2" variant="caption" sx={{ color: 'secondary.main', mt:{xs:"24px", md:"40px"}}}>
            Back
        </Typography>
        <Typography variant="h2" color="text.primary">
          {phoneData?.name}
        </Typography>
        <Box sx={{
          display:"flex",
          flexDirection:{xs: "column", md: "row"},
          mt:{xs:"32px", md:"40px"},
          justifyContent:"space-between",
          mb:"80px"}}>
        <Box sx={{ 
          width:{xs:"288px", md:"560px"},
          height:{xs:"288px", md:"464px"}
        }}>
            <ImageGallery
              items={images}
              thumbnailPosition={isMobile ? 'bottom' : 'left'}
              showPlayButton={false}
              showBullets={false}
              showNav={false}
              showFullscreenButton={false}
            />
        </Box>
          <Box>
            <Box sx={{
              width:{xs:"288px", md:"320px"},
              display:"flex",
              justifyContent:"space-between"}}>
            </Box>
            <ProductVariantsActions phoneData={phoneData}/>
          </Box>
          <Typography>
                ID: 802390
          </Typography>
        </Box>
        <Box sx={{
          display:"flex",
           flexDirection:{xs:"column", md:"row"},
            justifyContent:"space-between",
             mb:"80px",
             gap:"64px"}}>
          <Box sx={{width:"559px"}}>
           <Typography variant='h2'>About</Typography>
           <Divider/>
           <Box>
              <Typography variant='h3'>And then there was Pro</Typography>
              <Typography >A transformative triple‑camera system that adds tons of capability without complexity.

An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.</Typography>
              <Typography variant='h3'>Camera</Typography>
              <Typography>Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.</Typography>
              <Typography variant='h3'>Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.</Typography>
              <Typography>iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.</Typography>
           </Box>
          </Box>
          <Box sx={{width:"512px"}}>
            <Typography variant='h2'>Tech Specs</Typography>
            <Divider/>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography>Screen</Typography>
              <Typography>6.5” OLED</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography>Resolution</Typography>
              <Typography>2688x1242</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography>Processor</Typography>
              <Typography>Apple A12 Bionic</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography>RAM</Typography>
              <Typography>3 GB</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography>Built in memory</Typography>
              <Typography>64 GB</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography>Camera</Typography>
              <Typography>12 Mp + 12 Mp + 12 Mp (Triple)</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography>Zoom</Typography>
              <Typography>Optical, 2x</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography>Cell</Typography>
              <Typography>GSM, LTE, UMTS</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          width:{xs:"744px", md:"1136px"},
          height:"571px",
          mb:"81px",
          borderColor: 'secondary.main',
          borderWidth: '2px',
          borderStyle: 'solid',
          boxSizing: "border-box"}}>
          <Typography variant='h2'>You may also like</Typography>
          <Box>Phonecard</Box>
        </Box>
      </Container>
    </Section>

  );
};

export default PhonePage;

