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

  return (
    <Box
      sx={{
        width: '100%',
        m: '0',
        py: 4,
        px: {xs: 2, md: 0},
        borderTop: '1px solid #89939A',
        height: { xs: '257px', sm: '96px' },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Stack
        component="footer"
        direction={isMobile ? 'column' : 'row'}
        spacing={isMobile ? 4 : 0}
        sx={{ width: {xs: '320px', sm: '592px', md: '1136px'}, px: {xs: '16px', sm: '0'} }}
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
