import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Divider,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link as RouterLink } from 'react-router-dom';
import { useInteractionsContext } from '../../context/useInteractionsContext';
import { Product } from '../../types/Product';

const ProductCard = ({
  product,
  carouselWidth,
}: {
  product: Product;
  carouselWidth?: string;
}) => {
  const {
    itemId,
    image,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    category,
  } = product;

  const { order, addToOrder, favourites, toggleFavourites } =
    useInteractionsContext();

  const handleAddToOrder =
    (itemId: string, price: number) => (event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      addToOrder(itemId, price);
    };

  const handleToggleToFavourites =
    (itemId: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      toggleFavourites(itemId);
    };

  const cardStyle = {
    width:
      typeof carouselWidth === 'string'
        ? '218px'
        : { xs: '288px', sm: '288px', md: '272px' },
    height: { xs: '442px', sm: '506px' },
    border: 1,
    borderRadius: 0,
    borderColor: 'elements.main',
    boxShadow: 0,
    p: 2,
    '&:hover': {
      boxShadow: '0px 2px 16px 0px #0000001A',
    },
  };

  const isFavourites = favourites.find((product) => product.id === itemId);
  const isSelected = order.find((product) => product.id === itemId);

  const isCarouselWidth =
    typeof carouselWidth === 'string' &&
    carouselWidth !== null &&
    carouselWidth !== undefined;
  return (
    <RouterLink
      to={`/${category}/${itemId}`}
      style={{ textDecoration: 'none' }}
    >
      <Grid item>
        <Card sx={cardStyle}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <CardMedia
              component="img"
              src={image}
              sx={{
                objectFit: 'contain',
                width: isCarouselWidth ? '173px' : '100%',
                display: 'flex',
                justifyContent: 'center',
                height: isCarouselWidth ? '25%' : '35%',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '70%',
              }}
            >
              <Typography sx={{ mt: 2.5, fontSize: 14 }}>{name}</Typography>
              <Box sx={{ display: 'flex', mt: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ color: 'primary.main', fontWeight: 'bold' }}
                >
                  {`${price !== undefined ? price : ''}$`}
                </Typography>
                <Box sx={{ width: 4 }} />
                <Typography
                  variant="h6"
                  sx={{
                    color: 'secondary.main',
                    textDecoration: 'line-through',
                  }}
                >{`${fullPrice !== undefined ? fullPrice : ''}$`}</Typography>
              </Box>
              <Divider sx={{ my: 1, mb: 1.5 }} />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mt: { xs: 0.5, sm: 0.5, md: 2 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    color: 'secondary.main',
                    fontWeight: '700',
                  }}
                >
                  Screen
                </Typography>
                <Typography sx={{ fontSize: 12, fontWeight: '700' }}>
                  {screen !== undefined ? screen : ''}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mt: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    color: 'secondary.main',
                    fontWeight: '700',
                  }}
                >
                  Capacity
                </Typography>
                <Typography sx={{ fontSize: 12, fontWeight: '700' }}>
                  {capacity !== undefined ? capacity : ''}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mt: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    color: 'secondary.main',
                    fontWeight: '700',
                  }}
                >
                  RAM
                </Typography>
                <Typography sx={{ fontSize: 12, fontWeight: '700' }}>
                  {ram !== undefined ? ram : ''}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mt: 2,
                  width: '100%',
                }}
              >
                <Button
                  variant={isSelected ? 'buttonSelected' : 'buttonDefault'}
                  sx={{
                    width: isCarouselWidth ? '70%' : '75%',
                    height: 40,
                    boxShadow: 0,
                    borderRadius: 0,
                    fontSize: 12,
                    fontWeight: 500,
                    textTransform: 'capitalize',
                  }}
                  onClick={handleAddToOrder(itemId, price)}
                >
                  Add to Cart
                </Button>
                <Button
                  component="button"
                  variant={
                    isFavourites
                      ? 'favouritesButtonSelected'
                      : 'favouritesButtonDefault'
                  }
                  onClick={handleToggleToFavourites(itemId)}
                >
                  {isFavourites ? (
                    <FavoriteIcon
                      sx={{ width: 16, height: 16, color: 'red.main' }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      sx={{ width: 16, height: 16, color: 'primary.main' }}
                    />
                  )}
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </RouterLink>
  );
};

export default ProductCard;
