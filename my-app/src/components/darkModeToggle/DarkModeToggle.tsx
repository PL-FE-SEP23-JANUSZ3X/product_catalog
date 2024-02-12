import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../../theme/ThemeContext";

const DarkModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
      <IconButton component="div" onClick={toggleColorMode} sx={{p: 0, color: "primary.main"}}>
        {mode === "dark"
          ? <DarkModeIcon sx={{fontSize: '16px'}} />
          : <LightModeIcon sx={{fontSize: '16px'}} />}
      </IconButton>
  );
};

export default DarkModeToggle;
