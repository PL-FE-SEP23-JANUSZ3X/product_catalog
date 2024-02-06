import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToTop = () => {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container
      sx={{
        width: '100%',
        p: 2,
      }}
    >
      <Stack
        component="footer"
        direction={isMobile ? 'column' : 'row'}
        // justifyContent="space-between"
        // alignItems={isWideScreen ? 'space-between' : 'flex-start'}
        spacing={2}
      >
        <Box component="img" src="images/logo.png" alt="gowmno" width="89px" />

        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={1}
          alignItems="flex-start"
        >
          <Link>Github</Link>
          <Link>Contact</Link>
          <Link>Rigths</Link>
        </Stack>

        <Button onClick={scrollToTop}>
          Back to Top
          <KeyboardArrowUpIcon sx={{ border: `1px solid ${'black'}` }} />
        </Button>
      </Stack>
    </Container>
  );
};
