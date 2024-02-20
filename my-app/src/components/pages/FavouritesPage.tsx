import { Box, Skeleton, Stack, Typography } from "@mui/material";
import Section from "../section/Section";
import { useInteractionsContext } from "../../context/useInteractionsContext";
import ProductCard from "../productCard/productCard";
import { useEffect, useState } from "react";
import { getProducts } from "../../utils/fetchHelper";
import { Product } from "../../types/Product";
import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs";

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

  const { favourites } = useInteractionsContext()

  const favouriteProducts = products.filter((product) => {
    return favourites.map(item => item.id).includes(product.itemId)
  });
  

  useEffect(() => {
    const fetchPhoneData = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const data = await getProducts();
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

  return (
    <Section >
      <Box>
        <CustomBreadcrumbs currentPage='Favourites'/>
        <Typography variant="h1" sx={{ mb: 1}} >Favourites</Typography>
        <Typography
          variant="body1"
          sx={{ mb: 5, color: 'secondary.main'}}
        >
          {`${favourites.length} items`}
        </Typography>
        {favourites.length === 0
          ? <Typography variant="h4" mb="4" sx={{ mt: {xs: 3, sm: 2}}} >Your favourites are empty</Typography>
          : ( 
            <Stack sx={boxStyle}>
              {isLoading
                ? (
                  <>
                    { Array.from({ length: favourites.length }, () => (
                      <Skeleton variant="rounded" width={272} height={506} />
                    ))
                    }
                  </>
                )
                : (
                  <>
                    {favouriteProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                      />
                  ))}
                  </>
                )
              }
            </Stack>
          )
        }
      </Box>
    </Section>
  );
};

export default FavouritesPage;