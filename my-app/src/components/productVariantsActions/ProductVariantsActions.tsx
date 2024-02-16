import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";
import './ProductVariantsActionsStyle.css';

const item = {
"id": "apple-iphone-11-128gb-black",
"namespaceId": "apple-iphone-11",
"name": "Apple iPhone 11 128GB Black",
"capacityAvailable": ["64GB", "128GB", "256GB"],
"capacity": "128GB",
"priceRegular": 1100,
"priceDiscount": 1050,
"colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
"color": "black",
"screen": "6.1' IPS",
"resolution": "1792x828",
"processor": "Apple A13 Bionic",
"ram": "4GB",
}

const productColors: { [key: string]: string } = {
  black: "#000",
  green: "#008000",
  yellow: "#ffff00",
  white: "#fff",
  purple: "#800080",
  red: "#ff0000",
  spacegray: "#4B4B4C",
  midnightgreen: "#073812",
  gold: "#e1c564",
  silver: "#bcc6cc",
  rosegold: "#ecc5c0",
  coral: "#ff7a6c",
  midnight: "#000e34",
  spaceblack: "#505150",
  blue: "#0000ff",
  pink: "#ffc0cb",
  graphite: "#4f555b",
  sierrablue: "#69abce",
}

const ProductVariantsActions = () => {
  return (
    <Box
      className="product-variants-actions"
      sx={{ width: { xs: "288px", sm: "237px", md: "320px" } }}
    >
      <Box className="product-variants-actions_container-1">
        <Box className="available-colors">
          <Typography
            variant="body2"
            sx={{
              color: "secondary.main",
            }}
          >
            Available colors
          </Typography>
          <Box className="available-colors_icons-container">
            {item?.colorsAvailable.map((color) => (
              <Link
                to={`/phones/${item?.namespaceId}-${item?.capacity}-${color}`}
              >
                <IconButton
                  className="available-colors_icon-button"
                  sx={{
                    color: productColors[color],
                    p: 0,
                    pr: 1,
                    outlineColor: "icons.main",
                  }}
                >
                  <CircleIcon
                    className="available-colors_circle-icon"
                    sx={{ fontSize: 32, borderColor: "icons.main" }}
                  />
                </IconButton>
              </Link>
            ))}
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{ fontWeight: 700, color: "icons.main" }}
        >
          ID: 802390
        </Typography>
      </Box>

      <Divider orientation="horizontal" flexItem />

      <Typography variant="body2" sx={{ color: "secondary.main" }}>
        Select capacity
      </Typography>

      <Box className="available-capacity">
        {item?.capacityAvailable.map((capacity) => (
          <Button
            className="available-capacity_button"
            variant={capacity === item.capacity ? "contained" : "outlined"}
            sx={{ minWidth: "auto", boxShadow: 0, borderRadius: 0, p: 1 }}
          >
            {capacity}
          </Button>
        ))}
      </Box>

      <Divider orientation="horizontal" flexItem />

      <Box className="prices">
        <Typography
          variant="h2"
          sx={{ color: "primary.main", letterSpacing: "-1%" }}
        >
          ${item.priceDiscount}
        </Typography>
        <Typography
          className="prices_regular-price"
          sx={{ fontSize: "22px", color: "secondary.main" }}
        >
          ${item.priceRegular}
        </Typography>
      </Box>

      <Stack spacing={3} direction="row">
        <Button
          className="buttons_add-button"
          variant="contained"
          sx={{
            boxShadow: 0,
            borderRadius: 0,
            fontWeight: 500,
            textTransform: "none",
            p: 1.5,
          }}
        >
          Add to card
        </Button>
        <Button
          variant="outlined"
          sx={{
            minWidth: 48,
            height: 48,
            borderRadius: 0,
            p: 0,
            borderColor: "icons.main",
          }}
        >
          <FavoriteBorderIcon
            sx={{ width: 20, height: 20, color: "primary.main" }}
          />
        </Button>
      </Stack>

      <Box className="product-info">
        <Box className="product-info_row">
          <Typography variant="body2" sx={{ color: "secondary.main" }}>
            Screen
          </Typography>
          <Typography variant="body2" sx={{ color: "primary.main" }}>
            {item?.screen}
          </Typography>
        </Box>

        <Box className="product-info_row">
          <Typography variant="body2" sx={{ color: "secondary.main" }}>
            Resolution
          </Typography>
          <Typography variant="body2" sx={{ color: "primary.main" }}>
            {item?.resolution}
          </Typography>
        </Box>
        <Box className="product-info_row">
          <Typography variant="body2" sx={{ color: "secondary.main" }}>
            Processor
          </Typography>
          <Typography variant="body2" sx={{ color: "primary.main" }}>
            {item?.processor}
          </Typography>
        </Box>
        <Box className="product-info_row">
          <Typography variant="body2" sx={{ color: "secondary.main" }}>
            RAM
          </Typography>
          <Typography variant="body2" sx={{ color: "primary.main" }}>
            {item?.ram}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductVariantsActions;
