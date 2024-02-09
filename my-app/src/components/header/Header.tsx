import {
  AppBar,
  Box,
  Toolbar,
  Link,
  IconButton,
  Divider,
  useMediaQuery,
  SxProps,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useThemeContext } from '../../theme/ThemeContext';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';

export type CopyrightProps = {
  sx: SxProps;
};

const navLinkStyle = {
  textTransform: 'uppercase',
  textDecoration: 'none',
  '&:hover': {
    color: 'primary.main',
  },
  '&:active': {
    color: 'primary.main',
    cursor:"pointer",
    outline: "none",
  },
};

const iconLinkStyle = {
  boxSizing: "border-box",
  mr: 0,
  color: 'black',
  padding: {
    xs: 2,
    md: 3,
  },
  paddingRight: 0,
  '&:hover': {
    color: 'primary.main',
  },
  '&:active': {
    color: 'primary.main',
    cursor:"pointer",
    outline: "none",
  },
}

const Header = () => {
  const isMobile = useMediaQuery('(max-width:640px)');
  const { theme } = useThemeContext();
  const white = theme.palette.background.paper;

  return (
      <AppBar
        component="nav"
        position="static"
        sx={{
          backgroundColor: white,
          boxShadow: 0,
          outline: 1,
          outlineColor:'elements.main',
          height: {xs: "48px", md: "64px"},
          paddingLeft: {xs: 2, md: 3}
        }}
      >
        <Toolbar disableGutters sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: {xs: "space-between", md: "flex-start"},
            alignItems: "center",
            minHeight: {xs: "48px", md: "64px"}
          }}>
          <Link 
            component={NavLink}
            to={"/"}
            sx={{
              '&:active': {
                cursor:"pointer",
                outline: "none",
              },
              paddingRight: {xs: 4, md: 6}}}
            >
              <Box
              component="img"
              src='/images-header/Logo.svg'
              alt="Nice Gadgets"
              sx={{width: {xs: "64px", md: "80px"}}}
              />
            </Link>
          {!isMobile && (
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Link 
                component={NavLink}
                to={"/"}
                variant='upper' 
                color='secondary'
                pr={5}
                sx={navLinkStyle}
              >
              Home
              </Link>
              <Link 
                component={NavLink}
                to={"/phones"}
                variant='upper' 
                color='secondary'
                pr={5}
                sx={navLinkStyle}>
              Phones
              </Link>
              <Link 
                component={NavLink}
                to={"/tablets"}
                variant='upper' 
                color='secondary'
                pr={5}
                sx={navLinkStyle}>
              Tablets
              </Link>
              <Link 
                component={NavLink}
                to={"/accessories"}
                variant='upper' 
                color='secondary'
                pr={5}
                sx={navLinkStyle}
              >
              Accesories
              </Link>
            </Box>
          )}
          {isMobile ? (
            <Box display="flex" justifyContent="flex-end">
              <Divider orientation='vertical' flexItem/>
              <IconButton
                component={NavLink} 
                to={"/cart"}
                disableRipple 
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={iconLinkStyle}
              >
                <DarkModeToggle />
              </IconButton>
              <Divider orientation='vertical' flexItem/>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={iconLinkStyle}
              >
                <MenuIcon sx={{fontSize: '16px'}} />
              </IconButton>
            </Box>
          )
        : (
          <>
          <Box flexGrow="1"/>
          <Box display="flex" flexDirection="row">
          <Divider orientation='vertical' flexItem/>
          <IconButton
            component={NavLink} 
            to={"/cart"}
            disableRipple 
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={iconLinkStyle}
          >
            <DarkModeToggle />
          </IconButton>
          <Divider orientation='vertical' flexItem/>
          <IconButton
            component={NavLink}
            to={"/favourites"}
            disableRipple 
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={iconLinkStyle}
            >
              <FavoriteBorderIcon sx={{fontSize: '16px'}}/>
            </IconButton>
            <Divider orientation='vertical' flexItem/>
          <IconButton
            component={NavLink} 
            to={"/cart"}
            disableRipple 
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={iconLinkStyle}
          >
            <LocalMallOutlinedIcon sx={{fontSize: '16px'}}/>
          </IconButton>
          </Box>
          </>
        )}
          
        </Toolbar>
      </AppBar>
  )
};

export default Header;
