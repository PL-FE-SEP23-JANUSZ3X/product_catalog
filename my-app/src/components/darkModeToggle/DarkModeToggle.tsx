import { Box, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../../theme/ThemeContext";

const DarkModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
      <IconButton onClick={toggleColorMode} color="inherit" sx={{p: 0}}>
        {mode === "dark"
          ? <DarkModeIcon sx={{fontSize: '16px'}} />
          : <LightModeIcon sx={{fontSize: '16px'}} />}
      </IconButton>
  );
};

export default DarkModeToggle;
