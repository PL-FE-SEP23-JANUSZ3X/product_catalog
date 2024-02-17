import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box, Divider } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Link as RouterLink } from 'react-router-dom';
import { useInteractionsContext } from '../../context/useInteractionsContext';
import { Product } from '../../types/Product';

const ItemCard = ({ item, carouselWidth }: { item: Product, carouselWidth?: string }) => {
  const { id, images, name, priceRegular, priceDiscount, screen, capacityAvailable, ram } = item;
  const { order, addToOrder,  favorites, toggleFavorites } = useInteractionsContext();

  const handleAddToOrder = (id: string, priceRegular: number) => (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    addToOrder(id, priceRegular);
  };

  const handleToggleToFavorites = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorites(id);
  }

  const cardStyle = {
    width: typeof carouselWidth === 'string' ? carouselWidth : { xs: "288px", sm: "229px", md: "272px" },
    height: { xs: "442px", sm: "506px" },
    border: 1,
    borderRadius: 0,
    borderColor: "elements.main",
    boxShadow: 0,
    p: 2,
  };

  const isFavorites = favorites.find(product => product.id === id)
  const isSelected = order.find(product => product.id === id)

  return (
    <RouterLink to={`/phones/${id}`} style={{ textDecoration: 'none' }}>
      <Grid item>
        <Card sx={cardStyle}>
          <CardContent>
            <CardMedia
              component="img"
              src={images[0]}
              sx={{
                objectFit: 'contain',
                display: 'flex',
                justifyContent: 'center',
                width: typeof carouselWidth === 'string' ? "148px" : { xs: "223px", sm: "165px", md: "196px" },
                height: { xs: "130px", sm: "196px", md: "208px" },
              }}
            />
            <Typography sx={{ mt: 2.5, fontSize: 14 }}>{name}</Typography>
            <Box sx={{ display: 'flex', mt: 1 }}>
              <Typography variant='h6' sx={{ color: 'primary.main', fontWeight: 'bold' }}>{`${priceRegular !== undefined ? priceRegular : ''}$`}</Typography>
              <Box sx={{ width: 4 }} />
              <Typography variant='h6' sx={{ color: 'secondary.main', textDecoration: 'line-through' }}>{`${priceDiscount !== undefined ? priceDiscount : ''}$`}</Typography>
            </Box>
            <Divider sx={{ my: 1, mb: 1.5 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: { xs: 0.5, sm: 0.5, md: 2 } }}>
              <Typography sx={{ fontSize: 12, color: 'secondary.main', fontWeight: 'bold' }}>Screen</Typography>
              <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>{screen !== undefined ? screen : ''}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
              <Typography sx={{ fontSize: 12, color: 'secondary.main', fontWeight: 'bold' }}>Capacity</Typography>
              <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>{capacityAvailable !== undefined ? capacityAvailable : ''}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
              <Typography sx={{ fontSize: 12, color: 'secondary.main', fontWeight: 'bold' }}>RAM</Typography>
              <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>{ram !== undefined ? ram : ''}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button
                variant={isSelected ? 'buttonSelected' : 'buttonDefault'}
                sx={{
                  width: typeof carouselWidth === 'string' ? "400px" : { xs: "176px", sm: "117px", md: "160px" },
                  height: 40,
                  boxShadow: 0,
                  borderRadius: 0,
                  fontSize: 12,
                  fontWeight: 500,
                  textTransform: 'capitalize',
                }}
                onClick={handleAddToOrder(id, priceRegular)}
              >
                Add to Cart
              </Button>
              <Button
                component='button'
                variant={isFavorites ? 'favoritesButtonSelected' : 'favoritesButtonDefault'}
                onClick={handleToggleToFavorites(id)}
              >
                {isFavorites
                  ? <FavoriteIcon sx={{ width: 16, height: 16, color: 'red.main' }} />
                  : <FavoriteBorderIcon sx={{ width: 16, height: 16, color: 'primary.main' }} />
                }
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </RouterLink>
  );
};

export default ItemCard;

