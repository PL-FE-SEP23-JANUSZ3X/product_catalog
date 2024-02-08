import { Outlet } from 'react-router-dom';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import { Box, Container,ScopedCssBaseline } from '@mui/material';
import Header from '../header/Header';
import { Footer } from '../footer';

const Layout = () => {
  return (
    <>
    <Header />
     <Container  disableGutters sx={{
        width: {
          xs: 320, // phone
          sm: 640, // tablets
          md: 1200, // small laptop
          lg: 1440, // desktop
        },
        backgroundColor: "red",
      }}>
        <ScopedCssBaseline>
        
        <DarkModeToggle />
        <Box>
          <Outlet />
        </Box>
      <Footer />
      </ScopedCssBaseline>
      </Container>
    </>
  );
};

export default Layout;