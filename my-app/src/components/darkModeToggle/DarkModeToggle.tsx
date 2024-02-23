import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../../theme/ThemeContext";

const DarkModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
      <IconButton
        component="div"
        disableRipple
        onClick={toggleColorMode}
        sx={{
          padding: { xs: '15px', md: '23px'},
          color: "primary.main",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        {mode === "dark"
          ? <DarkModeIcon sx={{fontSize: '18px'}} />
          : <LightModeIcon sx={{fontSize: '18px'}} />}
      </IconButton>
  );
};

export default DarkModeToggle;
