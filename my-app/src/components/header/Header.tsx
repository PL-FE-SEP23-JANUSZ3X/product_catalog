import { AppBar, Box, Toolbar, IconButton, Divider, useMediaQuery, Typography, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useThemeContext } from '../../theme/ThemeContext';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { theme } = useThemeContext();
  const white = theme.palette.background.paper;

  return (
    <Box sx={{flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: white, boxShadow: 0, outline: 1, outlineColor: 'elements.main' }}>
          <Toolbar>
          <img src='/images-header/Logo.svg' alt="Nice Gadgets" />
            {!isMobile && (
              <>
                <Link 
                  variant='upper' 
                  color='primary.main' 
                  component="div" 
                  underline="none" 
                  sx={{
                    padding: 2.5,
                    paddingLeft: 5,
                    paddingRight: 5,
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}>
                Home
                </Link>
                <Link 
                  variant='upper' 
                  color='secondary' 
                  component="div" 
                  underline="none" 
                  sx={{ 
                    paddingRight: 5,
                    '&:hover': {
                      color: 'primary.main',
                    }
                  }}>
                Phones
                </Link>
                <Link 
                  variant='upper' 
                  color='secondary' 
                  component="div" 
                  underline="none" 
                  sx={{ 
                    paddingRight: 5,
                    '&:hover': {
                      color: 'primary.main',
                    }
                  }}>
                Tablets
                </Link>
                <Link 
                  variant='upper' 
                  color='secondary' 
                  component="div" 
                  underline="none" 
                  sx={{ 
                    paddingRight: 5,
                    '&:hover': {
                      color: 'primary.main',
                    }
                  }}>
                Accesories
                </Link>
              </>
            )}
            
            <Box sx={{ flexGrow: 1 }} />
            <Divider orientation='vertical' flexItem/>
            {isMobile ? (
              <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0, color: 'black', padding: 2, paddingRight: 0 }}
            >
             <MenuIcon />
            </IconButton>
            )
          : (
            <>
            <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 0,
              color: 'black',
              padding: 2.5,
            }}
            >
             <FavoriteBorderIcon/>
            </IconButton>
            <Divider orientation='vertical' flexItem/>
            <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 0,
              color: 'black',
              padding: 2.5,
              paddingRight: 0,
            }}
            >
            <LocalMallOutlinedIcon/>
            </IconButton>
            </>
          )}
            
          </Toolbar>
        </AppBar>
      </Box>
  )
};

export default Header;
