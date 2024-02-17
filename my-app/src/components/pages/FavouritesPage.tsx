import { Box, Skeleton, Stack, Typography } from "@mui/material";
import Section from "../section/Section";
import { useInteractionsContext } from "../../context/useInteractionsContext";
import { useThemeContext } from "../../theme/ThemeContext";
import ItemCard from "../itemCard/ItemCard";
import { useEffect, useState } from "react";
import { getPhones } from "../../utils/fetchHelper";
import { Product } from "../../types/Product";

const boxStyle = {
  display: 'grid',
  justifyContent: 'center',
  gridTemplateColumns: {xs: 'repeat(1, 288px)', sm: 'repeat(2, 288px)', md: 'repeat(4, 272px)'},
  gridAutoRows: 'auto',
  gap: '40px 16px',
}

const FavouritesPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useThemeContext();

  const { favorites } = useInteractionsContext()

  const favoriteProducts = products.filter((el) => {
    return favorites.some((f) => {
      return f.id === el.id 
    });
  });

  useEffect(() => {
    const fetchPhoneData = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const data = await getPhones();
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
    <Section >
      <Box>
        <Box sx={{ display: 'flex', alignItems:'flex-start'}}>
          <Box component='img' mr={0.5}
            src={theme.palette.mode === 'light'
              ? 'images/icons/home.svg' 
              : 'images/icons/home-dark.svg'
            }
          />
          <Typography
            variant="body1"
            sx={{ color: 'secondary.main', display: 'inline-block', fontWeight: '600' }}
          >
            Back
          </Typography>
        </Box>
        <Typography variant="h1" sx={{ mt: {xs: 3, sm: 2}, mb: 1}} >Favourites</Typography>
        <Typography
          variant="body1"
          sx={{ mb: 5, color: 'secondary.main'}}
        >
          {`${favorites.length} items`}
        </Typography>
        {favorites.length === 0
          ? <Typography variant="h4" mb="4" sx={{ mt: {xs: 3, sm: 2}}} >Your favorites are empty</Typography>
          : (
            <Stack sx={boxStyle}>
              {favoriteProducts.length > 0 && favoriteProducts.map((product) => (
                <ItemCard
                  key={product.id}
                  item={product}
                />
              ))}
            </Stack>
          )
        }
        
      </Box>
    </Section>
  );
};

export default FavouritesPage;