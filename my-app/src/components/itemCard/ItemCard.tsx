import { Grid, Card, CardContent, CardMedia, Typography, Button, Box, Divider } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Item from './ItemCard.types';

const ItemCard = ({ item, carouselWidth }: { item: Item, carouselWidth?: string }) => {
  const { images, name, priceRegular, priceDiscount, screen, capacityAvailable, ram } = item;

  const cardStyle = {
    width: carouselWidth || { xs: "288px", sm: "229px", md: "272px" },
    height: { xs: "442px", sm: "506px" },
    border: 1,
    borderRadius: 0,
    borderColor: "elements.main",
    boxShadow: 0,
    p: 2,
  };

  return (
    <Grid item>
      <Card sx={cardStyle}>
        <CardContent>
          <CardMedia
            component='img'
            src={images[0]}
            sx={{
              objectFit: 'contain',
              display: 'flex',
              justifyContent: 'center',
              width: carouselWidth ? "148px" : { xs: "223px", sm: "165px", md: "196px" },
              height: { xs: "130px", sm: "196px", md: "208px" },
            }}
          />
          <Typography sx={{ mt: 2.5, fontSize: 14 }}>{name}</Typography>
          <Box sx={{ display: 'flex', mt: 1 }}>
            <Typography variant='h6' sx={{ color: 'primary.main', fontWeight: 'bold' }}>{`${priceRegular}$`}</Typography>
            <Box sx={{ width: 4 }} />
            <Typography variant='h6' sx={{ color: 'secondary.main', textDecoration: 'line-through' }}>{`${priceDiscount}$`}</Typography>
          </Box>
          <Divider sx={{ my: 1, mb: 1.5 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: { xs: 0.5, sm: 0.5, md: 2 } }}>
            <Typography sx={{ fontSize: 12, color: 'secondary.main', fontWeight: 'bold' }}>Screen</Typography>
            <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>{screen}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
            <Typography sx={{ fontSize: 12, color: 'secondary.main', fontWeight: 'bold' }}>Capacity</Typography>
            <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>{capacityAvailable}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
            <Typography sx={{ fontSize: 12, color: 'secondary.main', fontWeight: 'bold' }}>RAM</Typography>
            <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>{ram}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" sx={{
              width: carouselWidth ? "400px" : { xs: "176px", sm: "117px", md: "160px" },
              height: 40,
              boxShadow: 0,
              borderRadius: 0,
              fontSize: 12,
              fontWeight: 500,
              textTransform: 'capitalize',
            }}
            >
              <Typography sx={{fontSize: { xs: "11px", sm: "13px" }, fontWeight: 700 }} >Add to Card</Typography>
            </Button>
            <Button variant="outlined" sx={{ minWidth: 40, height: 40, borderRadius: 0, p: 0, borderColor: 'icons.main' }}>
              <FavoriteBorderIcon sx={{ width: 20, height: 20, color: 'primary.main' }} />
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ItemCard;
