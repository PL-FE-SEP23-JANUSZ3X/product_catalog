import { Container, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { useThemeContext } from './theme/ThemeContext';
import DarkModeToggle from "./components/darkModeToggle/DarkModeToggle";

function App() {
  const { theme } = useThemeContext();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <DarkModeToggle />
          <Typography variant="h1" color="text.primary" sx={{textAlign:"center"}}>TEST</Typography>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
