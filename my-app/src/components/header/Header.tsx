import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Divider,
  useMediaQuery,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { useThemeContext } from "../../theme/ThemeContext";
import { useState } from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { theme } = useThemeContext();
  const white = theme.palette.background.paper;

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDrawer = (open: boolean) => () => setIsOpen(!open);

  return (
    <Box sx={{ flexGrow: 1, mb: 14 }}>
      <AppBar
        sx={{
          position: 'fixed',
          backgroundColor: white,
          boxShadow: 0,
          outline: 1,
          outlineColor: "elements.main",
        }}
      >
        <Toolbar>
          {isMobile && (
            <img src="/images-header/Logo-mobile.png" alt="Nice Gadgets" />
          )}

          {!isMobile && (
            <>
              <img src="/images-header/Logo.png" alt="Nice Gadgets" />
              <Link
                variant="upper"
                color="primary.main"
                component="div"
                underline="none"
                sx={{
                  padding: 2.5,
                  paddingLeft: 5,
                  paddingRight: 5,
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Home
              </Link>
              <Link
                variant="upper"
                color="secondary"
                component="div"
                underline="none"
                sx={{
                  paddingRight: 5,
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Phones
              </Link>
              <Link
                variant="upper"
                color="secondary"
                component="div"
                underline="none"
                sx={{
                  paddingRight: 5,
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Tablets
              </Link>
              <Link
                variant="upper"
                color="secondary"
                component="div"
                underline="none"
                sx={{
                  paddingRight: 5,
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Accesories
              </Link>
            </>
          )}

          <Box sx={{ flexGrow: 1 }} />
          <Divider orientation="vertical" flexItem />
          {isMobile ? (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(isOpen)}
              sx={{ mr: 0, color: "black", padding: 2, paddingRight: 0 }}
            >
              {isOpen 
              ? <>
                <CloseRoundedIcon /> 
              </>
              : <MenuIcon />}
            </IconButton>
          ) : (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{
                  mr: 0,
                  color: "black",
                  padding: 2.5,
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
              <Divider orientation="vertical" flexItem />
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{
                  mr: 0,
                  color: "black",
                  padding: 2.5,
                  paddingRight: 0,
                }}
              >
                <LocalMallOutlinedIcon />
              </IconButton>
            </>
          )}
          {isMobile && (
            <BurgerMenu isOpen={isOpen}/>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
