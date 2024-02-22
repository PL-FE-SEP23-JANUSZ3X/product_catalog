import {
  AppBar,
  Box,
  Toolbar,
  Link,
  IconButton,
  Divider,
  useMediaQuery,
  SxProps,
  Badge,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useThemeContext } from '../../theme/ThemeContext';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import { useInteractionsContext } from '../../context/useInteractionsContext';
import SearchDrawer from '../searchDrawer/SearchDrawer';

export type CopyrightProps = {
  sx: SxProps;
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'secondary.main',
  borderBottomWidth: '2px',
  borderBottomColor: 'transparent',
  borderBottomStyle: 'solid',
  outline: "none",
  '&:hover': {
    color: 'primary.main',
  },
  py: {sm: '17px', md: '20px'}
};

const navLinkActiveStyle = {
  textDecoration: 'none',
  color: 'primary.main',
  borderBottomWidth: '2px',
  borderBottomColor: 'primary.main',
  borderBottomStyle: 'solid',
  cursor:"pointer",
  outline: "none",
  py: {sm: '17px', md: '26px'}
};

const iconLinkStyle = {
  boxSizing: "border-box",
  outline: "none",
  mr: 0,
  color: "primary.main",
  padding: {
    xs: 2,
    md: 3,
  },
  paddingRight: 0,
}

const iconLinkActiveStyle = {
  boxSizing: "border-box",
  mr: 0,
  color: "primary.main",
  padding: {
    xs: 2,
    md: 3,
  },
  paddingRight: 0,
  cursor:"pointer",
  outline: "none",
}

const badgeStyle = {
  "& .MuiBadge-badge": {
    width: '14px',
    heigth: '14px',
    fontSize: '10px',
    fontWeight: '600',
    borderSize: '1px',
    borderColor: 'badgeBorder.main',
    borderStyle: 'solid',
    color: 'badge.main',
    backgroundColor: 'red.main',
    top: {xs: '18px', md: '26px' },
    right: {xs: '14px', md: '22px'},
  }
}

type Props = {
  children: React.ReactElement;
  window?: () => Window;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 400,
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={true} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Header = (props: any) => {
  const isMobile = useMediaQuery('(max-width:640px)');
  const { theme } = useThemeContext();
  const white = theme.palette.background.paper;
  const [isOpen, setIsOpen] = useState(false);
  
  const { order, favourites } = useInteractionsContext()

  const toggleDrawer = (open: boolean) => () => setIsOpen(!open);
  
  return (
    <HideOnScroll {...props}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: white,
          boxShadow: 0,
          outline: 1,
          outlineColor:'elements.main',
          height: {xs: "48px", md: "64px"},
          paddingLeft: {xs: 2, md: 3}
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: {xs: "space-between", md: "flex-start"},
            alignItems: "center",
            minHeight: {xs: "48px", md: "64px"}
          }}
        >
          <Link 
            component={NavLink}
            to={"/"}
            sx={{
              '&:active': {
                cursor:"pointer",
                outline: "none",
              },
              paddingRight: {xs: 4, md: 6},
            }}
          >
            <Box
            component="img"
            src={theme.palette.mode === 'light' ? '/images-header/Logo-light.svg' : '/images-header/Logo-dark.svg'}
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
              <NavLink to='/' end style={{textDecoration:'none'}}> 
                {({ isActive }) => ( 
                  <Link 
                    component='div'
                    variant='link'
                    mr={5}
                    sx={isActive ? navLinkActiveStyle : navLinkStyle}
                  >
                    Home
                  </Link>
                )}
              </NavLink>
              <NavLink to='/phones' end style={{textDecoration:'none'}}> 
                {({ isActive }) => ( 
                  <Link 
                    component='div'
                    variant='link'
                    mr={5}
                    sx={isActive ? navLinkActiveStyle : navLinkStyle}
                  >
                    Phones
                  </Link>
                )}
              </NavLink>
              <NavLink to='/tablets' end style={{textDecoration:'none'}}> 
                {({ isActive }) => ( 
                  <Link 
                    component='div'
                    variant='link'
                    mr={5}
                    sx={isActive ? navLinkActiveStyle : navLinkStyle}
                  >
                    Tablets
                  </Link>
                )}
              </NavLink>
              <NavLink to='/accessories' end style={{textDecoration:'none'}}> 
                {({ isActive }) => ( 
                  <Link 
                    component='div'
                    variant='link'
                    mr={5}
                    sx={isActive ? navLinkActiveStyle : navLinkStyle}
                  >
                    Accesories
                  </Link>
                )}
              </NavLink>
            </Box>
          )}
          {isMobile ? (
            <Box display="flex" justifyContent="flex-end">
              <Divider orientation='vertical' flexItem/>
              <SearchDrawer/>
              <Divider orientation='vertical' flexItem/>
              <IconButton
                component='div'
                disableRipple 
                edge="end"
                aria-label="menu"
                sx={iconLinkStyle}
              >
                <DarkModeToggle />
              </IconButton>
              <Divider orientation='vertical' flexItem/>
              <IconButton
                component='div'
                size="large"
                edge="end"
                aria-label="menu"
                onClick={toggleDrawer(isOpen)}
                sx={iconLinkStyle}
              >
                {isOpen 
                ? <CloseRoundedIcon sx={{fontSize: '16px'}} />
                : <MenuIcon sx={{fontSize: '16px'}} />}
              </IconButton>
            </Box>
          )
          : (
            <>
              <Box flexGrow="1"/>
              <Box display="flex" flexDirection="row">
                <Divider orientation='vertical' flexItem/>
                <SearchDrawer/>
                <Divider orientation='vertical' flexItem/>
                <IconButton
                  disableRipple 
                  edge="end"
                  aria-label="menu"
                  sx={iconLinkStyle}
                >
                  <DarkModeToggle />
                </IconButton>
                <Divider orientation='vertical' flexItem/>
                <NavLink to='/favourites' end style={{textDecoration:'none'}}> 
                  {({ isActive }) => ( 
                    <Badge
                      overlap="circular"
                      badgeContent={favourites.length}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      sx={badgeStyle}
                    >
                      <IconButton 
                        disableRipple
                        edge="end"
                        aria-label="menu"
                        sx={isActive ? iconLinkActiveStyle : iconLinkStyle}
                      >
                        {isActive 
                          ? <FavoriteIcon sx={{fontSize: '16px'}} />
                          : <FavoriteBorderIcon sx={{fontSize: '16px'}} />
                        }
                      </IconButton>
                    </Badge>
                  )}
                </NavLink>
                <Divider orientation='vertical' flexItem/>
                <NavLink to='/cart' end style={{textDecoration:'none'}}> 
                  {({ isActive }) => ( 
                    <Badge
                      overlap="circular"
                      badgeContent={order.length}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      sx={badgeStyle}
                    >
                      <IconButton 
                        disableRipple
                        edge="end"
                        aria-label="menu"
                        sx={isActive ? iconLinkActiveStyle : iconLinkStyle}
                      >
                        {isActive 
                          ? <LocalMallIcon sx={{fontSize: '16px'}} />
                          : <LocalMallOutlinedIcon sx={{fontSize: '16px'}} />
                        }
                      </IconButton>
                    </Badge>
                  )}
                </NavLink>
              </Box>
            </>
          )}
          {isMobile && (
            <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          )}
        </Toolbar>
      </AppBar>
      </HideOnScroll>
  )
};

export default Header;
