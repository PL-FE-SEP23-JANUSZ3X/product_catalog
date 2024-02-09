import { Box, Divider, IconButton, Link, Stack } from "@mui/material";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useEffect, useState } from "react";

const BurgerMenu = ({ isOpen }: {isOpen: boolean}) => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>('');
  const goodsTypes = ['Phones', 'Tablets', 'Accesories'];

  const handleIconClick = (icon: string | null) => () => setSelectedIcon(icon);

  useEffect(() => {
    console.log("BurgerMenu rerendered");
  }, [isOpen]);

  const burgerBoxStyle = {
    position: 'fixed',
    top: 57,
    right: 0,
    left: 0,
    backgroundColor: 'white.main',
    display: 'flex',
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 'tooltip',
    height: '100%',
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  const iconButtonStyle = {
    flexGrow: 1,
    p: 2.3,
    borderRadius: 0,
    borderBottom: 4,
  }

  return (
      <>
          <Box sx={burgerBoxStyle}>

            <Stack spacing={3} padding={4} height='100%' alignItems="center"
            onClick={handleIconClick('')}>

              <Link
                padding="5px 0"              
                width="fit-content"
                borderBottom="2px solid"
                borderColor={selectedIcon === '' ? "primary" : "white.main"}
                variant="upper"
                color={selectedIcon === '' ? "primary" : "secondary"}
                textAlign="center"
                underline="none"
              >
                Home
              </Link>

              {goodsTypes.map((good) => (
                <Link 
                  padding="5px 0"
                  variant="upper"
                  color="secondary"
                  textAlign="center"
                  underline="none"
                >
                  {good}
                </Link>
              ))}

            </Stack>

            <Box display="flex" sx={{ outline: 1, outlineColor: "elements.main", mb: 7 }}>
              
              <IconButton 
                sx={{
                ...iconButtonStyle,
                borderColor: selectedIcon === 'heart' ? "primary" : "white.main" }}
                onClick={handleIconClick('heart')} 
                color="primary"
              >
                <FavoriteBorderRoundedIcon />
              </IconButton>

              <Divider orientation="vertical" flexItem sx={{ color: "elements.main" }} />
              
              <IconButton sx={{
                ...iconButtonStyle,
                borderColor: selectedIcon === 'bag' ? "primary" : "white.main" }} 
                onClick={handleIconClick('bag')}
                color="primary">
                <LocalMallOutlinedIcon />
              </IconButton>

            </Box>
            
          </Box>
    </>
  )
}

export default BurgerMenu;