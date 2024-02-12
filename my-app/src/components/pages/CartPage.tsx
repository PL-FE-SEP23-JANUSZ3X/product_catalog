import { Typography } from "@mui/material";
import Section from "../section/Section";
import { Box, Stack } from "@mui/system";
import { useThemeContext } from "../../theme/ThemeContext";
import { Button } from "@mui/base";

const CartPage = () => {
  const { theme } = useThemeContext();

  const cartContainerStyle = {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("sm")]: {
      
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {

    },
  }

  const cartTotalStyle = {
    width: "288px",
    borderColor: 'secondary.main',
    borderWidth: '2px',
    borderStyle: 'solid',
    [theme.breakpoints.up("sm")]: {
      width: "592px"
    },
    [theme.breakpoints.up("md")]: {
      width: "368px",
      marginLeft: "12px"
    }
  }

  return (
    <Section >
      <Box>
      <img src='images/icons/arr-up.svg' />
          <Typography mb="2" variant="caption" sx={{ color: 'secondary.main' }}>
            Back
          </Typography>
        <Typography mb="4" variant="h1">Cart</Typography>
        <Box sx={cartContainerStyle}>
            <Stack mt="32px" flexDirection="column" spacing="2">
              <Box width="752px" height="128px" sx={
                { borderColor: 'secondary.main',
                borderWidth: '2px',
                borderStyle: 'solid',}}>1</Box>
            </Stack>
            <Stack sx={cartTotalStyle} flexDirection="column" alignItems="center">
              <Typography>$2657</Typography>
              <Typography>Total for 3 items</Typography>
              <Button>Checkout</Button>
            </Stack>
        </Box>
      </Box>
    </Section>
  );
};

export default CartPage;