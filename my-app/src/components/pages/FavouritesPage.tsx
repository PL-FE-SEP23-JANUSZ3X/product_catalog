import { Box, Skeleton, Stack, Typography } from "@mui/material";
import Section from "../section/Section";
import { useInteractionsContext } from "../../context/useInteractionsContext";
import { useThemeContext } from "../../theme/ThemeContext";
import ItemCard from "../itemCard/ItemCard";
import { useEffect, useState } from "react";
import { getPhones } from "../../utils/fetchHelper";
import { Product } from "../../types/Product";

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
  }, [favorites]);

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
        <Typography variant="h1" mb="4" sx={{ mt: {xs: 3, sm: 2}}} >Favourites</Typography>
        {favorites.length === 0
          ? <Typography variant="h4" mb="4" sx={{ mt: {xs: 3, sm: 2}}} >Your favorites are empty</Typography>
          : (
            <Box>
              <Stack my="32px" flexDirection="column" spacing="16px" sx={{mr: {md: '32px'}}} >
                {favoriteProducts.length > 0 && favoriteProducts.map((product) => (
                  <ItemCard
                    key={product.id}
                    item={product}
                  />
                ))}
              </Stack>
            </Box>
          )
        }
        
      </Box>
    </Section>
  );
};

export default FavouritesPage;