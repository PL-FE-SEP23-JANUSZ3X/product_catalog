import { useThemeContext } from "../../theme/ThemeContext";
import { ThemeProvider } from "@mui/material/styles";
import {
  Box,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = () => {
  const { theme } = useThemeContext();

  const containerStyle = {
    backgroundColor: 'background.paper',
    width: {xs: "288px", sm: "592px", md: "752px"},
    height: {xs: "160px", sm: "128px"},
    display: "flex",
    flexDirection: {xs: "column", sm: "row"},
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 0,
    boxShadow: 0,
    outline: 1,
    outlineColor: 'elements.main',
    p: {xs: "16px", sm: "24px"},
  }

  const descriptionStyle = {
    width: {xs: "256px", sm: "308px", md: "466px"},
    height: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 0,
    boxShadow: 0,
  }

  const countContainerStyle = {
    width: {xs: "256px", sm: "210px"},
    height: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    borderRadius: 0,
    boxShadow: 0,
  }

  const iconButtonStyle = {
    width: 32,
    height: 32,
    color: 'primary.main',
    outline: 1,
    outlineColor: 'icons.main',
    borderRadius: 0,
    border: 0,
  }

  const disablediconButtonStyle = {
    color: 'elements.main',
    outlineColor: 'elements.main',
  }

  return (
    <ThemeProvider theme={theme}>
        <Box
          sx={containerStyle}
        >
          <Box
            sx={descriptionStyle}
          >
            <IconButton 
                sx={{ 
                width: 16, 
                height: 16,
                color: 'icons.main'
                }}>
              <CloseRoundedIcon sx={{ fontSize: 18}} />
            </IconButton>
            
            <CardMedia
              component="img"
              sx={{
                width: 66,
                height: 66,
              }}
              image={"/phone.svg"}
            />
            <Box
              sx={{
                wrap: "wrap",
                width: {xs: "128px", sm: "176px", md:"336px"},
              }}
            >
              <Typography
                lineHeight="21px"
                sx={{
                  wordBreak: "break-word",
                  wrap: "wrap",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Apple iPhone 14 Pro 128GB Silver (MQ023)
              </Typography>
            </Box>
          </Box>

          <Box
            sx={countContainerStyle}
          >
            <IconButton sx={[iconButtonStyle, disablediconButtonStyle]}>
              <RemoveIcon />
            </IconButton>
            <Typography
              lineHeight="21px"
              sx={{
                width: 32,
                fontWeight: 600,
                fontSize: 14,
                textAlign: 'center',
                color: 'primary.main',
              }}
            >
              1
            </Typography>
            <IconButton sx={iconButtonStyle}>
              <AddIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1}}/>
            <Typography
              lineHeight="30.8px"
              sx={{ 
                fontWeight: 800, 
                fontSize: 22, 
                color: 'primary.main',
                
            }}
            >
              $999
            </Typography>
          </Box>
        </Box>
      
    </ThemeProvider>
  );
};

export default CartItem;
