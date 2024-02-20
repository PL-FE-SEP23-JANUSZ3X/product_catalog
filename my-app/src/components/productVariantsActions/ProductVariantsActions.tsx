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
import { Phone } from '../../types/Phone';
import './ProductVariantsActionsStyle.css';
import { useInteractionsContext } from '../../context/useInteractionsContext';

type Props = {
  phoneData: Phone | null;
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

const ProductVariantsActions: FC<Props> = ({ phoneData }) => {
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
    (product) => product.id === phoneData?.id,
  );
  const isSelected = order.find((product) => product.id === phoneData?.id);

  return (
    <Box className="product-variants-actions">
      <Box className="product-variants-actions_container-1">
        <Box className="available-colors" width="100%">
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
                visibility: { xs: 'visible', md: 'hidden' },
              }}
            >
              ID: 802390
            </Typography>
          </Box>
          <Box className="available-colors_icons-container">
            {phoneData?.colorsAvailable.map((color) => (
              <Link
                key={color}
                to={`/phones/${phoneData?.namespaceId}-${phoneData?.capacity.toLowerCase()}-${color}`}
              >
                <IconButton
                  className="available-colors_icon-button"
                  sx={{
                    color: productColors[color],
                    p: 0,
                    pr: 1,
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

      <Typography
        variant="body2"
        sx={{
          color: 'secondary.main',
        }}
      >
        Select capacity
      </Typography>

      <Box sx={{ display: 'flex', gap: '10px' }}>
        {phoneData?.capacityAvailable.map((capacity) => (
          <Link
            key={capacity}
            to={`/phones/${phoneData?.namespaceId}-${capacity.toLowerCase()}-${phoneData.color}`}
          >
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
          </Link>
        ))}
      </Box>

      <Divider orientation="horizontal" flexItem />

      <Box className="prices">
        <Typography
          variant="h2"
          sx={{ color: 'primary.main', letterSpacing: '-1%' }}
        >
          ${phoneData?.priceDiscount}
        </Typography>
        <Typography
          className="prices_regular-price"
          sx={{ fontSize: '22px', color: 'secondary.main' }}
        >
          ${phoneData?.priceRegular}
        </Typography>
      </Box>

      <Stack spacing={1} direction="row">
        <Button
          variant={isSelected ? 'buttonSelected' : 'buttonDefault'}
          onClick={handleAddToOrder(phoneData?.id, phoneData?.priceRegular)}
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
          onClick={handleAddToFavourites(phoneData?.id)}
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
            {phoneData?.screen}
          </Typography>
        </Box>

        <Box className="product-info_row">
          <Typography variant="body2" sx={{ color: 'secondary.main' }}>
            Resolution
          </Typography>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {phoneData?.resolution}
          </Typography>
        </Box>
        <Box className="product-info_row">
          <Typography variant="body2" sx={{ color: 'secondary.main' }}>
            Processor
          </Typography>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {phoneData?.processor}
          </Typography>
        </Box>
        <Box className="product-info_row">
          <Typography variant="body2" sx={{ color: 'secondary.main' }}>
            RAM
          </Typography>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {phoneData?.ram}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductVariantsActions;
