import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import './ProductVariantsActionsStyle.css';
import { useInteractionsContext } from '../../context/useInteractionsContext';
import { Phone } from '../../types';

type Props = {
  productData: Phone | null;
  category: string;
};

const productColors: { [key: string]: string } = {
  black: '#000',
  green: '#008000',
  yellow: '#ffff00',
  white: '#fff',
  purple: '#800080',
  red: '#ff0000',
  spacegray: '#4B4B4C',
  midnightgreen: '#073812',
  gold: '#e1c564',
  silver: '#bcc6cc',
  rosegold: '#ecc5c0',
  coral: '#ff7a6c',
  midnight: '#000e34',
  spaceblack: '#505150',
  blue: '#0000ff',
  pink: '#ffc0cb',
  graphite: '#4f555b',
  sierrablue: '#69abce',
};

const ProductVariantsActions: FC<Props> = ({ productData, category }) => {
  const { order, addToOrder, favourites, toggleFavourites } =
    useInteractionsContext();

  const handleAddToOrder =
    (id: string | undefined, priceRegular: number | undefined) => () => {
      if (id !== undefined && priceRegular !== undefined) {
        addToOrder(id, priceRegular);
      }
    };

  const handleAddToFavourites = (id: string | undefined) => () => {
    if (id !== null && id !== undefined) {
      toggleFavourites(id);
    }
  };

  const isFavourites = favourites.find(
    (product) => product.id === productData?.id,
  );
  const isSelected = order.find((product) => product.id === productData?.id);

  return (
    <Box
      className="product-variants-actions"
      display="flex"
      gap="24px"
      sx={{ mb: '60px', maxWidth: '320px' }}
    >
      <Box className="product-variants-actions_container-1">
        <Box className="available-colors" width="100%" display="flex" gap="6px">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography
              variant="body2"
              sx={{
                color: 'secondary.main',
              }}
            >
              Available colors
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                color: 'icons.main',
              }}
            >
              ID: 802390
            </Typography>
          </Box>
          <Box
            className="available-colors_icons-container"
            flexWrap="wrap"
            gap="6px"
          >
            {productData?.colorsAvailable.map((color) => (
              <Link
                key={color}
                to={`/${category}/${productData?.namespaceId}-${productData?.capacity.toLowerCase()}-${color}`}
              >
                <IconButton
                  className="available-colors_icon-button"
                  sx={{
                    color: productColors[color],
                    p: 0,
                    outlineColor: 'icons.main',
                  }}
                >
                  <CircleIcon
                    className="available-colors_circle-icon"
                    sx={{ fontSize: 32, borderColor: 'icons.main' }}
                  />
                </IconButton>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      <Divider orientation="horizontal" flexItem />

      <Box display="flex" flexDirection="column" gap="6px">
        <Typography
          variant="body2"
          sx={{
            color: 'secondary.main',
          }}
        >
          Select capacity
        </Typography>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          {productData?.capacityAvailable.map((capacity) => (
            <Link
              key={capacity}
              to={`/${category}/${productData?.namespaceId}-${capacity.toLowerCase()}-${productData.color}`}
            >
              {productData.capacity !== capacity ? (
                <Button
                  variant="contained"
                  sx={{
                    minWidth: 'auto',
                    height: 32,
                    boxShadow: 0,
                    borderRadius: 0,
                    fontSize: 14,
                    fontWeight: 500,
                    p: 1,
                    backgroundColor: 'bgHover.main',
                    color: 'primary.main',
                    border: '1px solid',
                    borderColor: 'icons.main',
                    '&:hover': {
                      backgroundColor: 'white.main',
                      borderColor: 'primary.main',
                      boxShadow: '0px'
                    }
                  }}
                >
                  {capacity}
                </Button>
                ) : (
                <Button
                  variant="contained"
                  sx={{
                    minWidth: 'auto',
                    height: 32,
                    boxShadow: 0,
                    borderRadius: 0,
                    fontSize: 14,
                    fontWeight: 500,
                    p: 1,
                  }}
                >
                  {capacity}
                </Button>
              )}
            </Link>
          ))}
        </Box>
      </Box>

      <Divider orientation="horizontal" flexItem />

      <Box className="prices">
        <Typography
          variant="h2"
          sx={{ color: 'primary.main', letterSpacing: '-1%' }}
        >
          ${productData?.priceDiscount}
        </Typography>
        <Typography
          className="prices_regular-price"
          sx={{ fontSize: '22px', color: 'secondary.main' }}
        >
          ${productData?.priceRegular}
        </Typography>
      </Box>

      <Stack spacing={1} direction="row">
        <Button
          variant={isSelected ? 'buttonSelected' : 'buttonDefault'}
          onClick={handleAddToOrder(productData?.id, productData?.priceRegular)}
        >
          Add to card
        </Button>
        <Button
          variant={
            isFavourites
              ? 'favouritesButtonSelected'
              : 'favouritesButtonDefault'
          }
          sx={{ minWidth: 48, height: 48 }}
          onClick={handleAddToFavourites(productData?.id)}
        >
          {isFavourites ? (
            <FavoriteIcon sx={{ width: 20, height: 20, color: 'red.main' }} />
          ) : (
            <FavoriteBorderIcon
              sx={{ width: 20, height: 20, color: 'primary.main' }}
            />
          )}
        </Button>
      </Stack>

      <Box className="product-info">
        <Box className="product-info_row">
          <Typography variant="body2" sx={{ color: 'secondary.main' }}>
            Screen
          </Typography>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {productData?.screen}
          </Typography>
        </Box>

        <Box className="product-info_row">
          <Typography variant="body2" sx={{ color: 'secondary.main' }}>
            Resolution
          </Typography>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {productData?.resolution}
          </Typography>
        </Box>
        <Box className="product-info_row">
          <Typography variant="body2" sx={{ color: 'secondary.main' }}>
            Processor
          </Typography>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {productData?.processor}
          </Typography>
        </Box>
        <Box className="product-info_row">
          <Typography variant="body2" sx={{ color: 'secondary.main' }}>
            RAM
          </Typography>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {productData?.ram}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductVariantsActions;
