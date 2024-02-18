import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
  Skeleton,
  Link
} from '@mui/material';
import ImageGallery from 'react-image-gallery';
import { NavLink, useParams } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';
import './PhonePageStyle.css';
import { useEffect, useState } from 'react';
import { getPhone } from '../../../utils/fetchHelper';
import { Phone } from '../../../types';
import { ErrorMessage } from '../../../types/ErrorMessages';
import Section from '../../section/Section';
import ProductVariantsActions from '../../productVariantsActions/ProductVariantsActions';
import CustomBreadcrumbs from '../../navigation/CustomBreadcrumbs';
import { colors } from '../../../theme/colors';

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

  if (isLoading) {
    return (
      <Skeleton
        variant="rounded"
        sx={{width: {xs: "288px", sm: "592px", md: "752px"},
          height: {xs: "160px", sm: "128px"}}}
      />
    )
  }

  const navlinkStyle = {
    ml: 1,
    textDecoration: 'none', 
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '15px',
    color: theme.palette.mode === 'light' ? colors.breadcrumbsLight : colors.breadcrumbsDark,
    ':hover': {
      color: theme.palette.mode === 'light' ? colors.breadcrumbsHoverLight : colors.breadcrumbsHoverDark,
    },
  }


  return (
    <Section>
      <Container>
        <CustomBreadcrumbs parrentLink='phones' currentPage='Favourites'/>
        <Box mb={2}>
          <Box component='img' height={10}
            src={theme.palette.mode === 'light'
              ? '/images/icons/arr-left-light.svg'
              : '/images/icons/arr-left-dark.svg'
            }
          />
          <NavLink to={`/phones`} end style={{textDecoration:'none', display: 'inline-block'}}> 
            <Link 
              component='div'
              variant='body2'
              sx={navlinkStyle}
            >
              Back
            </Link>
          </NavLink>
        </Box>
        <Typography variant="h2" color="text.primary" sx={{width:{xs:"288px", sm:"592px", md:"1136px"}}}>
          {phoneData?.name} (iMT9G2FS/A)
        </Typography>
        <Box sx={{ 
          width:{md:"592"},
          display:"flex",
          flexDirection:{xs: "column", sm: "row"},
          mt:{xs:"32px", sm:"40px"},
          mb:"80px",
          justifyContent:{xs:"flex-start", sm:"space-between"}
          }}>
        <Box sx={{
          width:{xs:"288px", sm:"338px", md:"560px"},
          height:{xs:"353px",  sm:"288px", md:"464px"},
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
          <Box sx={{mt:{xs:"40px", sm:"0px"}}}>
            <ProductVariantsActions phoneData={phoneData}/>
          </Box>
          <Typography variant="body2"sx={{fontWeight: 700, color: "icons.main", display:{xs:"none", md:"block"}}}>
                ID: 802390
          </Typography>
        </Box>
        <Box sx={{
          display:"flex",
          flexDirection:{xs:"column", md:"row"},
          justifyContent:"space-between",
          mb:"80px",
          gap:"64px"}}>
          <Box sx={{width:{xs:"287px", sm:"559px"}}}>
           <Typography variant='h3' sx={{mb:"16px"}}>About</Typography>
           <Divider sx={{mb:"32px"}}/>
           <Box>
              <Typography variant='h4' sx={{mb:"16px"}}>{phoneData?.description[0].title}</Typography>
              <Typography variant="body1" sx={{mb:"16px", color:"secondary.main"}} >{phoneData?.description[0].text[0]}</Typography>
              <Typography variant="body1" sx={{mb:"32px", color:"secondary.main"}}>{phoneData?.description[0].text[1]}</Typography>
              <Typography variant='h4' sx={{mb:"16px"}}>{phoneData?.description[1].title}</Typography>
              <Typography variant="body1" sx={{mb:"32px", color:"secondary.main"}}>{phoneData?.description[1].text}</Typography>
              <Typography variant='h4' sx={{mb:"16px"}}>{phoneData?.description[2].title}</Typography>
              <Typography variant="body1"sx={{mb:"32px", color:"secondary.main"}}>{phoneData?.description[2].text}</Typography>
           </Box>
          </Box>
          <Box sx={{width:{xs:"287px", sm:"559px"}}}>
            <Typography variant='h2' sx={{mb:"16px"}}>Tech Specs</Typography>
            <Divider sx={{mb:"25px"}}/>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography variant="body1" sx={{mb:"8px", color:"secondary.main"}}>Screen</Typography>
              <Typography variant="body1">{phoneData?.screen}</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography variant="body1" sx={{mb:"8px", color:"secondary.main"}}>Resolution</Typography>
              <Typography variant="body1">{phoneData?.resolution}</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography variant="body1" sx={{mb:"8px", color:"secondary.main"}}>Processor</Typography>
              <Typography variant="body1">{phoneData?.processor}</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography variant="body1" sx={{mb:"8px", color:"secondary.main"}}>RAM</Typography>
              <Typography variant="body1">{phoneData?.ram}</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography variant="body1" sx={{mb:"8px", color:"secondary.main"}}>Built in memory</Typography>
              <Typography variant="body1">{phoneData?.capacity}</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography variant="body1" sx={{mb:"8px", color:"secondary.main"}}>Camera</Typography>
              <Typography variant="body1">{phoneData?.camera}</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography variant="body1" sx={{mb:"8px", color:"secondary.main"}}>Zoom</Typography>
              <Typography variant="body1">{phoneData?.zoom}</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography variant="body1" sx={{mb:"8px", color:"secondary.main"}}>Cell</Typography>
              <Box sx={{display:"flex", gap:"5px"}}>
                {phoneData?.cell.map((item) => (
                  <Typography variant="body1" sx={{p:"0px", m:"0px"}}>{item}</Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          width:{xs:"288px", sm:"591px", md:"1136px"},
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

