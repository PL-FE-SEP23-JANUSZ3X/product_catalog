import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

export const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToTop = () => {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinkStyle = {
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '800',
    color: '#89939A',
  };

  return (
    <Container
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
          spacing={1}
          alignItems={isMobile ? 'flex-start' : 'center'}
        >
          <Link sx={navLinkStyle}>Github</Link>
          <Link sx={navLinkStyle}>Contact</Link>
          <Link sx={navLinkStyle}>Rights</Link>
        </Stack>

        <Button
          sx={{
            height: '32px',
            p: 0,
            textTransform: 'none',
            fontSize: '12px',
            fontWeight: theme.palette.mode === 'light' ? '600' : '700',
            color: 'secondary.main',
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
    </Container>
  );
};
