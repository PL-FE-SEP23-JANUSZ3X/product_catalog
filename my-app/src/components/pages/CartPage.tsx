import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Section from "../section/Section";
import { useThemeContext } from "../../theme/ThemeContext";
import { useOrderContext } from "../../context/useOrderContext";
import CartItem from "../cartItem/CartItem";

const CartPage = () => {
  const { theme } = useThemeContext();
  const {
    order
  } = useOrderContext()

  const containerStyle = {
    display: "flex",
    flexDirection: {xs: "column", md: "row"},
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.breakpoints.up("sm")]: {
      
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {

    },
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

  return (
    <Section >
      <Box>
        <>
          <Box component='img' mr={0.5}
            src={theme.palette.mode === 'light'
              ? 'images/icons/arr-left-light.svg' 
              : 'images/icons/arr-left-dark.svg'}
          />
          <Typography variant="body2" sx={{ color: 'secondary.main', display: 'inline-block', fontWeight: '700' }}>
            Back
          </Typography>
        </>
        <Typography variant="h1" mb="4" sx={{ mt: {xs: 3, sm: 2}}} >Cart</Typography>
        {order.length === 0
          ? <Typography variant="h4" mb="4" sx={{ mt: {xs: 3, sm: 2}}} >Your shopping cart is empty</Typography>
          : (
            <Box sx={containerStyle}>
              <Stack my="32px" flexDirection="column" spacing="16px" sx={{mr: {md: '32px'}}} >
                {order.length > 0 && order.map((product) => (
                  <CartItem key={product.id} orderProductId={product.id} orderCount={product.count} />
                ))}
              </Stack>
              <Stack sx={totalStyle} flexDirection="column" alignItems="center">
                <Typography variant="h2">$2657</Typography>
                <Typography variant="body1" sx={{ mb: {xs: 2, md: 3}}}>Total for 3 items</Typography>
                <Divider flexItem sx={{ color: "elements.main", mb: {xs: 2, md: 3} }} />
                <Button variant={'primary'} sx={{height: '48px'}}>Checkout</Button>
              </Stack>
            </Box>
          )
        }
        
      </Box>
    </Section>
  );
};

export default CartPage;