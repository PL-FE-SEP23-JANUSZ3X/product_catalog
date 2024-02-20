import {
  Box,
  Button,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Section from "../section/Section";
import { useThemeContext } from "../../theme/ThemeContext";
import { useInteractionsContext } from "../../context/useInteractionsContext";
import ProductCart from "../productCart/ProductCart";
import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { getProducts } from "../../utils/fetchHelper";
import { ProductCartType } from "../../types/ProductCartType";
import { NavLink, useNavigate } from "react-router-dom";
import { colors } from "../../theme/colors";
import { genRandomKey } from "../../utils/getRandomKey";

const containerStyle = {
  display: "flex",
  flexDirection: {xs: "column", md: "row"},
  justifyContent: 'center',
  alignItems: 'flex-start',
}

const totalStyle = {
  backgroundColor: 'background.paper',
  width: {xs: "288px", sm: "592px"},
  height: {xs: "190px", sm: "206px"},
  display: "flex",
  flexDirection: "column",
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 0,
  boxShadow: 0,
  outline: 1,
  outlineColor: 'elements.main',
  p: "24px",
  marginTop: '32px',
}

const CartPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const { order, total} = useInteractionsContext()

  const orderProductIds = order.map(item => item.id)
  const orderProducts:ProductCartType[] = products
    .filter((product) => orderProductIds.includes(product.itemId))
    .map((product) => {
      const orderItem = order.find((item) => item.id === product.itemId);
      return {
        ...product,
        count: orderItem ? orderItem.count : 0,
      };
    });

  useEffect(() => {
    const fetchPhoneData = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError('ErrorMessage');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhoneData();
  }, []);

  if (error !== null) {
    return (
      <>
        <Typography>{error}</Typography>
      </>
    );
  }

  const navlinkStyle = {
    ml: 1,
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '15px',
    color:
      theme.palette.mode === 'light'
        ? colors.breadcrumbsLight
        : colors.breadcrumbsDark,
    ':hover': {
      color:
        theme.palette.mode === 'light'
          ? colors.breadcrumbsHoverLight
          : colors.breadcrumbsHoverDark,
    },
  };

  return (
    <Section >
      <Box>
        <>
          <Box component='img' mr={0.5}
            src={theme.palette.mode === 'light'
              ? 'images/icons/arr-left-light.svg' 
              : 'images/icons/arr-left-dark.svg'}
          />
          <NavLink
            to={`/phones`}
            end
            style={{ textDecoration: 'none', display: 'inline-block' }}
            onClick={() => {navigate(-1)}}
          >
            <Typography
              component="div" variant="body2" sx={navlinkStyle}>
              Back
            </Typography>
          </NavLink>
        </>
        <Typography variant="h1" mb="4" sx={{ mt: {xs: 3, sm: 2}}} >Cart</Typography>
        {order.length === 0
          ? <Typography variant="h4" mb="4" sx={{ mt: {xs: 3, sm: 2}}} >Your shopping cart is empty</Typography>
          : (
            <Box sx={containerStyle}>
              <Stack my="32px" flexDirection="column" spacing="16px" sx={{mr: {md: '32px'}}} >
              {isLoading
                ? (
                  <>
                    { Array.from({ length: order.length }, () => (
                      <Skeleton
                        key={genRandomKey()}
                        variant="rounded"
                        sx={{width: {xs: "288px", sm: "592px", md: "752px"},
                          height: {xs: "160px", sm: "128px"}}}
                      />
                    ))
                    }
                  </>
                )
                : (
                  <>
                    {orderProducts.length > 0 && orderProducts.map((product) => (
                      <ProductCart
                        key={product.id}
                        product={product}
                      />
                    ))}
                  </>
                )
              }
              </Stack>
              <Stack sx={totalStyle} flexDirection="column" alignItems="center">
                <Typography variant="h2">{total}</Typography>
                <Typography variant="body1" sx={{ mb: {xs: 2, md: 3}}}>
                    {`Total for ${order.length} items`}
                </Typography>
                <Divider flexItem sx={{ color: "elements.main", mb: {xs: 2, md: 3} }} />
                <Button variant={'buttonDefault'} sx={{height: '48px'}}>Checkout</Button>
              </Stack>
            </Box>
          )
        }
        
      </Box>
    </Section>
  );
};

export default CartPage;