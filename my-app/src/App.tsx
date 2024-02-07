import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useThemeContext } from "./theme/ThemeContext";
import Header from "./components/header/Header";
import DarkModeToggle from "./components/darkModeToggle/DarkModeToggle";
import { Footer } from "./components";

function App() {
  const { theme } = useThemeContext();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container maxWidth="md">
          <DarkModeToggle />
          <Typography
            variant="h1"
            color="text.primary"
            sx={{ textAlign: "center" }}
          >
            TEST
          </Typography>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
