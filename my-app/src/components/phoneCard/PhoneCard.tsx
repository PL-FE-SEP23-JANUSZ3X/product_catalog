import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Grid, Typography, } from "@mui/material";
import { useThemeContext } from '../../theme/ThemeContext';

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
  const gray = theme.palette.elements.main

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={4}>
        <Card sx={{ 
          width: 288, 
          height: 440,
          border: 1, 
          borderRadius: 0, 
          borderColor: "elements.main", 
          p: 4,
        }}>        
          <CardContent>
            <CardMedia 
              component='img'
              image='/phone.svg'
            />
          </CardContent>
        </Card>
      </Grid>
    </ThemeProvider>
  )
}

export default PhoneCard;
