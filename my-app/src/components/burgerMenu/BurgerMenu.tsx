import { Box, Divider, IconButton, Link, Stack } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({ isOpen }: {isOpen: boolean}) => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>('');
  const goodsTypes = [
    {name: 'Phones', link: './phones'},
    {name: 'Tablets', link: './tablets'},
    {name: 'Accesories', link: './accessories'}
  ];

  const handleIconClick = (name: string | null) => () => setSelectedIcon(name);

  useEffect(() => {
    console.log("BurgerMenu rerendered");
  }, [isOpen]);

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
    borderBottom: '2px solid transparent',
    outline: "none",
    '&:hover': {
      color: 'primary.main',
    },
  };
  
  const navLinkActiveStyle = {
    textDecoration: 'none',
    color: 'primary.main',
    borderBottom: '2px solid primary.main',
    cursor:"pointer",
    outline: "none",
    paddingBottom: '5px'
  };

  return (
      <>
        <Box sx={burgerBoxStyle}>

          <Stack spacing={3} padding={4} height='100%' alignItems="center">

            <NavLink to='/' end style={{textDecoration:'none'}}> 
                {({ isActive }) => ( 
                  <Link 
                    variant='link'
                    width="fit-content"         
                    borderBottom="2px solid"
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
                    variant='link'
                    width="fit-content"         
                    borderBottom="2px solid"
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
                  disableRipple
                  edge="end"
                  aria-label="menu"
                  sx={isActive ? iconLinkActiveStyle : iconLinkStyle}
                >
                  {isActive 
                    ? <FavoriteIcon />
                    : <FavoriteBorderIcon />
                  }
                </IconButton>
              )}
            </NavLink>

            <Divider orientation="vertical" flexItem sx={{ color: "elements.main" }} />

            <NavLink to='/cart' end style={{textDecoration:'none', flexGrow: 1}}> 
              {({ isActive }) => ( 
                <IconButton 
                  disableRipple
                  edge="end"
                  aria-label="menu"
                  sx={isActive ? iconLinkActiveStyle : iconLinkStyle}
                >
                  {isActive 
                    ? <LocalMallIcon />
                    : <LocalMallOutlinedIcon />
                  }
                </IconButton>
              )}
            </NavLink>
          </Box>
          
        </Box>
    </>
  )
}

export default BurgerMenu;