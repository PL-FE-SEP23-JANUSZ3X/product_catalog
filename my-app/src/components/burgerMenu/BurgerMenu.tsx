import { Badge, Box, Divider, IconButton, Link, Stack } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useInteractionsContext } from "../../context/useInteractionsContext";

const iconLinkStyle = {
  width: '100%',
  p: 2.3,
  borderRadius: 0,
  borderBottomWidth: '4px',
  borderBottomColor: 'transparent',
  borderBottomStyle: 'solid',
  outline: "none",
  color: "primary.main",
}

const iconLinkActiveStyle = {
  width: '100%',
  p: 2.3,
  borderRadius: 0,
  borderBottomWidth: '4px',
  borderBottomColor: 'primary.main',
  borderBottomStyle: 'solid',
  boxSizing: "border-box",
  color: "primary.main",
  cursor:"pointer",
  outline: "none",
}

const navLinkStyle = {
  textDecoration: 'none',
  color: 'secondary.main',
  borderBottomWidth: '2px',
  borderBottomColor: 'transparent',
  borderBottomStyle: 'solid',
  outline: "none",
  paddingBottom: '5px',
  '&:hover': {
    color: 'primary.main',
  },
};

const navLinkActiveStyle = {
  textDecoration: 'none',
  color: 'primary.main',
  borderBottomWidth: '2px',
  borderBottomColor: 'primary.main',
  borderBottomStyle: 'solid',
  cursor:"pointer",
  outline: "none",
  paddingBottom: '5px'
};

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
    top: {xs: '4px', md: '26px' },
    right: {xs: '2px', md: '22px'},
  }
}

const BurgerMenu = ({ isOpen }: {isOpen: boolean}) => {
  const goodsTypes = [
    {name: 'Phones', link: './phones'},
    {name: 'Tablets', link: './tablets'},
    {name: 'Accesories', link: './accessories'}
  ];

  const burgerBoxStyle = {
    position: 'fixed',
    top: 49,
    right: 0,
    left: 0,
    backgroundColor: 'background.default',
    display: 'flex',
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 'tooltip',
    height: '100%',
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  const { order, favorites } = useInteractionsContext()

  useEffect(() => {
    console.log("BurgerMenu rerendered");
  }, [isOpen]);

  return (
      <>
        <Box sx={burgerBoxStyle}>

          <Stack spacing={3} padding={4} height='100%' alignItems="center">

            <NavLink to='/' end style={{textDecoration:'none'}}> 
                {({ isActive }) => ( 
                  <Link 
                    component='div'
                    variant='link'
                    width="fit-content"
                    textAlign="center"
                    underline="none"
                    sx={isActive ? navLinkActiveStyle : navLinkStyle}
                  >
                    Home
                  </Link>
                )}
              </NavLink>

            {goodsTypes.map((good) => (
              <NavLink key={good.name} to={good.link} end style={{textDecoration:'none'}}> 
                {({ isActive }) => ( 
                  <Link 
                    component='div'
                    variant='link'
                    width="fit-content"
                    textAlign="center"
                    underline="none"
                    sx={isActive ? navLinkActiveStyle : navLinkStyle}
                  >
                    {good.name}
                  </Link>
                )}
              </NavLink>
            ))}

          </Stack>

          <Box display="flex" sx={{ outline: 1, outlineColor: "elements.main", mb: 7 }}>
  
            <NavLink to='/favourites' end style={{textDecoration:'none', flexGrow: 1}}> 
              {({ isActive }) => ( 
                <IconButton 
                  component='div'
                  disableRipple
                  edge="end"
                  aria-label="menu"
                  sx={isActive ? iconLinkActiveStyle : iconLinkStyle}
                >
                  <Badge
                    overlap="circular"
                    badgeContent={favorites.length}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    sx={badgeStyle}
                  >
                    {isActive 
                      ? <FavoriteIcon />
                      : <FavoriteBorderIcon />
                    }
                  </Badge>
                </IconButton>
              )}
            </NavLink>

            <Divider orientation="vertical" flexItem sx={{ color: "elements.main" }} />

            <NavLink to='/cart' end style={{textDecoration:'none', flexGrow: 1}}> 
              {({ isActive }) => ( 
                <IconButton 
                    component='div'
                    disableRipple
                    edge="end"
                    aria-label="menu"
                    sx={isActive ? iconLinkActiveStyle : iconLinkStyle}
                  >
                  <Badge
                    overlap="circular"
                    badgeContent={order.length}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    sx={badgeStyle}
                  >
                    {isActive 
                      ? <LocalMallIcon />
                      : <LocalMallOutlinedIcon />
                    }
                  </Badge>
                </IconButton>
              )}
            </NavLink>
          </Box>
          
        </Box>
    </>
  )
}

export default BurgerMenu;