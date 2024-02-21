import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from '../header/Header';
import { Footer } from '../footer';
import { useThemeContext } from '../../theme/ThemeContext';

const Layout = () => {
  const { theme } = useThemeContext();
  const containerStyle = {
    [theme.breakpoints.up("xs")]: {
      width: 320, // phone
      minHeight: `calc(100vh - 48px - 257px)`,
      marginTop: '48px',
    },
    [theme.breakpoints.up("sm")]: {
      width: 640, // tablets
      minHeight: `calc(100vh - 48px - 96px)`,
      marginTop: '48px',
    },
    [theme.breakpoints.up("md")]: {
      width: 1200, // small laptop
      minHeight: `calc(100vh - 64px - 96px)`,
      marginTop: '64px',
    },
    [theme.breakpoints.up("lg")]: {
      width: 1440, // desktop
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }

  return (
    <>
      <Header />
      <Container  disableGutters sx={containerStyle}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;