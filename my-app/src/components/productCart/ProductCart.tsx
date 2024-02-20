import {
  Box,
  CardMedia,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useInteractionsContext } from "../../context/useInteractionsContext";
import { useEffect, useMemo, useState } from "react";
import { ErrorMessage } from "../../types/ErrorMessages";
import { getPhone } from "../../utils/fetchHelper";
import ProductCartProps from './ProductCart.types'
import { ProductCartType } from "../../types/ProductCartType";

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
  '&:hover': {
    outlineColor: 'primary.main',
  }
}

const ProductCart: React.FC<ProductCartProps> = ({ orderProductId, orderCount, orderPrice }) => {
  const {
    removeFromOrder,
    increaseCount,
    decreaseCount,
  } = useInteractionsContext()

  const [product, setProduct] = useState<ProductCartType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhoneData = async () => {
      if (typeof orderProductId === 'string') {
        setError(null);
        setIsLoading(true);
        try {
          const data = await getPhone(orderProductId);
          setProduct(data);
        } catch (error) {
          setError(ErrorMessage.LOAD);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.error('phoneId is undefined');
      }
    };

    fetchPhoneData();
  }, [orderProductId]);

  const handleRemove = (id: string) => () => removeFromOrder(id);
  const handleIncr = (id: string) => () => increaseCount(id);
  const handleDecr = (id: string) => () => decreaseCount(id);

  const totalPrice = useMemo(() => orderCount * orderPrice, [orderCount, orderPrice]);

  if (error !== null) {
    return (
      <>
        <Typography>{error}</Typography>
      </>
    );
  }

  if (isLoading) {
    return (
      <Skeleton
        variant="rounded"
        sx={{width: {xs: "288px", sm: "592px", md: "752px"},
          height: {xs: "160px", sm: "128px"}}}
      />
    )
  }

  return (
    <>
      {product && (
        <Box sx={containerStyle}>
          <Box sx={descriptionStyle}>
            <IconButton
              sx={{ 
              width: 16, 
              height: 16,
              color: 'icons.main'
              }}
              onClick={handleRemove(product.id)}
            >
              <CloseRoundedIcon sx={{ fontSize: 18}} />
            </IconButton>
            
            <CardMedia
              component="img"
              image={product.images[0]}
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
              disabled={orderCount === 1}
              onClick={handleDecr(product.id)}
            >
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
              {orderCount}
            </Typography>
            <IconButton
              sx={iconButtonStyle}
              onClick={handleIncr(product.id)}
            >
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
              {totalPrice}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  )
};

export default ProductCart;