import { createTheme } from '@mui/material/styles';
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Phone from './PhoneCard.types';

const breakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 600, 
      lg: 1200, 
      xl: 1920,
    },
  },
});

const PhoneCard = ( phone: Phone ) => {
  const { images, name, priceRegular, priceDiscount, screen, capacityAvailable, ram } = phone.phone
  console.log(screen)
  return (
    <Grid>
      <Card sx={{ 
        width: {xs: "288px", md: "229px", lg: "272px"},
        height: {xs: "440", md: "506px"},
        border: 1, 
        borderRadius: 0, 
        borderColor: "elements.main", 
        boxShadow: 0,
        p: 2,
      }}>    
          <CardContent>
            <CardMedia 
              component='img'
              src={`https://storage.googleapis.com/image-storage-mate/${images[0]}`}
              sx={{
                objectFit: 'contain',
                width: {xs: "223px", md: "165px", lg: "196px"},
                height:{xs: "130px", md: "196px", lg: "208px"},
              }}
            />
            <Typography sx={{mt: 2.5, fontSize: 14}} >{name}</Typography>
            <Box sx={{ display: 'flex', mt: 1 }}>
              <Typography variant='h6' sx={{ color: 'primary.main', fontWeight: 'bold' }}>{priceRegular}</Typography>
              <Box sx={{ width: 4 }} />
              <Typography variant='h6' sx={{ color: 'secondary.main', textDecoration: 'line-through'}}>{priceDiscount}</Typography>
            </Box>
            <Divider 
              sx={{ my: 1, mb: 1.5,
                [breakpoints.breakpoints.up('lg')]: {
                  mb: 0,
                },}} /> 
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: {xs: 0.5, md: 0.5, lg: 2} }}>
              <Typography sx={{fontSize: 12, color: 'secondary.main', fontWeight: 'bold'}}>Screen</Typography>
              <Typography sx={{fontSize: 12, fontWeight: 'bold'}}>{screen}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
              <Typography sx={{fontSize: 12, color: 'secondary.main', fontWeight: 'bold'}}>Capacity</Typography>
              <Typography sx={{fontSize: 12, fontWeight: 'bold'}}>{capacityAvailable}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
              <Typography sx={{fontSize: 12, color: 'secondary.main', fontWeight: 'bold'}}>RAM</Typography>
              <Typography sx={{fontSize: 12, fontWeight: 'bold'}}>{ram}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2}}>
              <Button variant="contained" sx={{
                width: {xs: "176px", md: "117px", lg: "160px"},
                height: 40,
                boxShadow: 0,
                borderRadius: 0,
                fontSize: 14,
                fontWeight: 500,
                textTransform: 'capitalize',
                }}
              >
                Add to Card
              </Button>
              <Button variant="outlined" sx={{minWidth: 40, height: 40, borderRadius: 0, p: 0, borderColor: 'icons.main'}}>
                <FavoriteBorderIcon sx={{width: 20, height: 20, color: 'primary.main'}} />
              </Button>
            </Box>
          </CardContent>
        </Card>
    </Grid>
  )
}

export default PhoneCard;
