import React from 'react';
import {
  Box,
  Button,
  Link,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToTop = () => {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinkStyle = {
    textDecoration: 'none',
    fontWeight: '800',
    color: 'secondary.main',
    '&:hover': {
      color: 'primary.main',
    },
  };

  const iconButtonStyle = {
    "&.MuiIconButton-root": {
      width: 32,
      height: 32,
      color: theme.palette.mode === 'light' ? 'primary.main' : 'white.main',
      backgroundColor: theme.palette.mode === 'light' ? 'transparent' : 'badgeBorder.main',
      outline: 1,
      outlineColor: theme.palette.mode === 'light' ? 'icons.main' : 'transparent',
      borderRadius: 0,
      border: 0,
      '&:hover': {
        outlineColor: theme.palette.mode === 'light' ? 'primary.main' : 'transparent',
        backgroundColor: theme.palette.mode === 'light' ? 'transparent' : 'icons.main',
      },
    },
  }

  return (
    <Box
      sx={{
        width: '100%',
        pt: 4,
        pb: 4,
        pl: 2,
        pr: 2,
        borderTop: '1px solid #89939A',
        height: { xs: '257px', sm: '96px' },
      }}
    >
      <Stack
        component="footer"
        direction={isMobile ? 'column' : 'row'}
        spacing={isMobile ? 4 : 0}
        justifyContent={isMobile ? 'flex-start' : 'space-between'}
      >
        <Box
          component="img"
          src={
            theme.palette.mode === 'light'
              ? '/images-header/Logo-light.svg'
              : '/images-header/Logo-dark.svg'
          }
          alt="Image of logo"
          width="89px"
        />

        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={2}
          alignItems={isMobile ? 'flex-start' : 'center'}
        >
          <Link variant='upper' sx={navLinkStyle}>Github</Link>
          <Link variant='upper' sx={navLinkStyle}>Contact</Link>
          <Link variant='upper' sx={navLinkStyle}>Rights</Link>
        </Stack>

        <Button
          sx={{
            height: '32px',
            p: 0,
            textTransform: 'none',
            fontSize: '12px',
            fontWeight: theme.palette.mode === 'light' ? '600' : '700',
            color: 'secondary.main',
            '&:hover': {
              color: 'primary.main',
              backgroundColor: 'transparent',
            },
          }}
          onClick={scrollToTop}
        >
          Back to top
          <Box
            component="img"
            pl={2}
            src={
              theme.palette.mode === 'light'
                ? 'images/footer-arrow-light.svg'
                : 'images/footer-arrow-dark.svg'
            }
            alt="Arrow up"
          />
        </Button>
      </Stack>
    </Box>
  );
};
