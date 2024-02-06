import { Box, IconButton } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeContext } from "../../theme/ThemeContext";

const DarkModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <Box
      sx={{
        mt: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "text.primary",
        borderColor: "text.primary",
      }}
    >
      {mode} mode
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
};

export default DarkModeToggle;