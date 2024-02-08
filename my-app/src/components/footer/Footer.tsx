import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

export const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollToTop = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinkStyle = {
    textTransform: "uppercase",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "800",
    color: "#89939A",
  };

  return (
    <Container
      sx={{
        width: "100%",
        pt: 4,
        pb: 4,
        pl: 2,
        pr: 2,
        borderTop: "1px solid #89939A",
      }}
    >
      <Stack
        component="footer"
        direction={isMobile ? "column" : "row"}
        spacing={isMobile ? 4 : 0}
        justifyContent={isMobile ? "flex-start" : "space-between"}
      >
        <Box component="img" src="images/logo.png" alt="gowmno" width="89px" />

        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={1}
          alignItems={isMobile ? "flex-start" : "center"}
        >
          <Link sx={navLinkStyle}>Github</Link>
          <Link sx={navLinkStyle}>Contact</Link>
          <Link sx={navLinkStyle}>Rigths</Link>
        </Stack>

        <Button
          sx={{
            height: "32px",
            p: 0,
            textTransform: "none",
            fontSize: "12px",
            fontWeight: "600",
            color: "#89939A",
          }}
          onClick={scrollToTop}
        >
          Back to top
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="32px"
            height="32px"
            border="1px solid lightgrey"
            sx={{ marginLeft: 2 }}
          >
            <Box component="img" src="images/icons/arr-up.svg" alt="Arrow up" />
          </Box>
        </Button>
      </Stack>
    </Container>
  );
};
