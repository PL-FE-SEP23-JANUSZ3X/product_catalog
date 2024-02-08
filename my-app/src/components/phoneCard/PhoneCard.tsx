import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { useThemeContext } from '../../theme/ThemeContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const breakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 640, 
      lg: 1200, 
      xl: 1920,
    },
  },
});

const PhoneCard = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={4}>
        <Card sx={{ 
          width: 288, 
          height: 440,
          border: 1, 
          borderRadius: 0, 
          borderColor: "elements.main", 
          boxShadow: 0,
          p: 2,
          [breakpoints.breakpoints.up('md')]: {
            height: 506,
            width: 229
          },
          [breakpoints.breakpoints.up('lg')]: {
            width: 272,
          },
        }}>        
          <CardContent>
            <CardMedia 
              component='img'
              image='/phone.svg'
              sx={{
                width: 223,
                height: 130,
                [breakpoints.breakpoints.up('md')]: {
                  width: 165,
                  height: 196
                },
              }}
            />
            <Typography sx={{mt: 2.5, fontSize: 14}} >Apple iPhone 14 Pro 128GB Silver (MQ023)</Typography>
            <Box sx={{ display: 'flex', mt: 1 }}>
              <Typography variant='h6' sx={{ color: 'primary.main', fontWeight: 'bold' }}>$849</Typography>
              <Box sx={{ width: 4 }} />
              <Typography variant='h6' sx={{ color: 'secondary.main', textDecoration: 'line-through'}}>$1199</Typography>
            </Box>
            <Divider sx={{ my: 1, mb: 1.5 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Typography sx={{fontSize: 12, color: 'secondary.main', fontWeight: 'bold'}}>Screen</Typography>
              <Typography sx={{fontSize: 12, fontWeight: 'bold'}}>6.5” OLED</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Typography sx={{fontSize: 12, color: 'secondary.main', fontWeight: 'bold'}}>Capacity</Typography>
              <Typography sx={{fontSize: 12, fontWeight: 'bold'}}>512 GB</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Typography sx={{fontSize: 12, color: 'secondary.main', fontWeight: 'bold'}}>RAM</Typography>
              <Typography sx={{fontSize: 12, fontWeight: 'bold'}}>4 GB</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, gap: 1}}>
              <Button variant="contained" sx={{
                width: 176,
                height: 40,
                boxShadow: 0,
                borderRadius: 0,
                fontSize: 14,
                fontWeight: 500,
                textTransform: 'capitalize',
                [breakpoints.breakpoints.up('md')]: {
                  width: 117,
                },
                }}>Add to Card</Button>
              <Button variant="outlined" sx={{minWidth: 40, height: 40, borderRadius: 0, p: 0, borderColor: 'icons.main'}}>
                <FavoriteBorderIcon sx={{width: 20, height: 20, color: 'primary.main'}} />
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </ThemeProvider>
  )
}

export default PhoneCard;
