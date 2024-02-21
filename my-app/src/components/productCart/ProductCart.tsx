import { useMemo} from "react";
import {
  Box,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useInteractionsContext } from "../../context/useInteractionsContext";
import { ProductCartType } from "../../types/ProductCartType";
import { useThemeContext } from "../../theme/ThemeContext";

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

type OrderTypeProps = {
  product: ProductCartType,
}

const ProductCart: React.FC<OrderTypeProps> = ({ product }) => {
  const {itemId, count, price, image} = product;
  const {
    removeFromOrder,
    increaseCount,
    decreaseCount,
  } = useInteractionsContext()

  const { theme } = useThemeContext();

  const iconButtonStyle = {
    "&.MuiIconButton-root": {
      width: 32,
      height: 32,
      color: theme.palette.mode === 'light' ? 'primary.main' : 'white.main',
      backgroundColor: theme.palette.mode === 'light' ? 'transparent' : 'badgeBorder.main',
      outline: 1,
      outlineColor: theme.palette.mode === 'light' ? 'icons.main' : 'transparent',
      borderRadius: 0,
      border: 0,
      '&:hover': {
        outlineColor: theme.palette.mode === 'light' ? 'primary.main' : 'transparent',
        backgroundColor: theme.palette.mode === 'light' ? 'transparent' : 'icons.main',
      },
    },
    "&.Mui-disabled": {
      color: 'elements.main',
      outline: 1,
      outlineColor: 'element.main',
      backgroundColor: 'transparent',
    }
  }

  const handleRemove = (id: string) => () => removeFromOrder(id);
  const handleIncr = (id: string) => () => increaseCount(id);
  const handleDecr = (id: string) => () => decreaseCount(id);

  const totalPrice = useMemo(() => count * price, [count]);

  return (
    <>
      {product !== null && (
        <Box sx={containerStyle}>
          <Box sx={descriptionStyle}>
            <IconButton
              sx={{ 
              width: 16, 
              height: 16,
              color: 'icons.main'
              }}
              onClick={handleRemove(itemId)}
            >
              <CloseRoundedIcon sx={{ fontSize: 18}} />
            </IconButton>
            
            <CardMedia
              component="img"
              image={image}
              style={{
                objectFit:'contain',
                height: "66px",
                width: "66px"
              }}
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
            <IconButton
              sx={iconButtonStyle}
              disabled={count === 1}
              onClick={handleDecr(itemId)}
            >
              <RemoveIcon sx={{fontSize: '16px'}}/>
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
              {count}
            </Typography>
            <IconButton
              sx={iconButtonStyle}
              onClick={handleIncr(itemId)}
            >
              <AddIcon sx={{fontSize: '16px'}}/>
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
              {totalPrice}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  )
};

export default ProductCart;