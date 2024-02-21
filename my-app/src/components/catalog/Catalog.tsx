import { Box, Typography, Select, Grid, SelectChangeEvent, Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/productCard";
import CatalogProps from "./Catalog.types";
import { Product } from "../../types/Product";
import Section from "../section/Section";
import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs";
import { useThemeContext } from "../../theme/ThemeContext";
import { getCategory, getSortedProducts } from "../../utils/fetchHelper";
import SkeletonLoader from "../skeletonLoader/SkeletonLoader";

const boxStyle = {
  display: 'grid',
  justifyContent: 'center',
  gridTemplateColumns: {xs: 'repeat(1, 288px)', sm: 'repeat(2, 288px)', md: 'repeat(4, 272px)'},
  gridAutoRows: 'auto',
  gap: '40px 16px',
  marginTop: '24px'
}

const Catalog: React.FC<CatalogProps> = ({ headline, title }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [paginationCount, setPaginationCount] = useState<number>(0)
  const [products, setProducts] = useState<Product[]>([])
  const [productsCount, setProductsCount] = useState<number>(0)
  const [loader, setLoader] = useState<boolean>(false)
  const { theme } = useThemeContext();
  const category = headline.toLowerCase()

  const sortType = searchParams.get('sort') ?? 'newest';
  const itemsPerPage = searchParams.get('items') ?? '16'; 
  const page = searchParams.get('page') ?? '1';

  const startIndex = (+page - 1) * +itemsPerPage;

  const skeletonWidth = {
    'small': 288,
    'medium': 288,
    'large': 272,
  }

  const skeletonLength = {
    'small': 1,
    'medium': 2,
    'large': 4,
  }

  useEffect(() => {
    const getproducts = async () => {
      try {
        setLoader(true)
        const response = await getSortedProducts(category, sortType, +startIndex, +itemsPerPage)
        const responseLength = await getCategory(category)
        setProductsCount(responseLength)
        setProducts(response)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoader(false)
      }
    }

  getproducts();
}, [searchParams]);

  const handleChange = (event: SelectChangeEvent<string>, method: string) => {
    if (method === 'items') {
      searchParams.set('page', '1');
    }
    
    const selectedSortType = event.target.value;
    searchParams.set(method, selectedSortType);
    setSearchParams(searchParams);
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setPaginationCount(Math.ceil(productsCount / +itemsPerPage))
  }, [productsCount, itemsPerPage])

  const paginationStyle = {
    '& .MuiPaginationItem-page': {
      backgroundColor: 'background.paper',
      '&:hover': {
        backgroundColor: theme.palette.mode === 'light' ? 'transparent' : 'elements.main',
      }
    },
    '& .MuiPaginationItem-rounded': {
      borderRadius: 0,
      borderColor: theme.palette.mode === 'light' ? 'elements.main' : 'transparent',
      '&:hover': {
        borderColor: theme.palette.mode === 'light' ? 'primary.main' : 'transparent',
      }
    },
    '& .MuiPaginationItem-root.Mui-selected': {
      color: 'white.main',
      backgroundColor: 'accent.main',
      '&:hover': {
        color: 'primary.main',
        borderColor: theme.palette.mode === 'light' ? 'primary.main' : 'transparent',
        backgroundColor: theme.palette.mode === 'light' ? 'background.paper' : 'elements.main',
      }
    },
    '& .Mui-selected::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'primary.main',
      borderRadius: 'inherit',
      zIndex: -1,
      color: 'white'
    },

    '& .MuiPaginationItem-previousNext': {
      backgroundColor: theme.palette.mode === 'light' ? 'transparent' : 'badgeBorder.main',
      '&:hover': {
        backgroundColor: theme.palette.mode === 'light' ? 'transparent' : 'icons.main',
      }
    },
    '& .MuiPagination-root .Mui-disabled': {
      borderColor: 'elements.main',
      opacity: 1,
      '& .MuiPaginationItem-icon': {
        color: 'icons.main',
      }
    },

    '& .MuiPaginationItem-icon': {
      color: 'primary.main'
    }
  }

  return (
    <Section>
      <Box>
        <CustomBreadcrumbs currentPage={headline}/>
        <Typography variant="h2" gutterBottom sx={{mt: 2}}>
          {title}
        </Typography>
        <Typography variant="caption" gutterBottom sx={{mt: 1, color: 'secondary.main'}}>
          {productsCount} models
        </Typography>
        <Box sx={{ display: 'flex', mt: 4, gap: 3}}>
          <Box sx={{ display: 'grid', width: 128}}>
            <Typography variant="caption" sx={{ color: 'secondary.main' }}>
              SortBy
            </Typography>
            <Select
              native
              value={sortType}
              onChange={(event) => handleChange(event, 'sort')}
              inputProps={{
                id: 'demo-simple-select-native',
              }}
              sx={{ mt: 1 }}
            >
              <option value={'newest'}>Newest</option>
              <option value={'oldest'}>Oldest</option>
              <option value={'alphabeticaz'}>Alphabetic (a-z)</option>
              <option value={'alphabeticza'}>Alphabetic (z-a)</option>
              <option value={'cheapest'}>Cheapest</option>
              <option value={'expensive'}>Expensive</option>
            </Select>
          </Box>
          <Box sx={{ display: 'grid', width: 128}}>
            <Typography variant="caption" sx={{ color: 'secondary.main' }}>
              Items on page
            </Typography>
            <Select
              native
              label="Age"
              value={itemsPerPage}
              onChange={(event) => handleChange(event, 'items')}
              inputProps={{
                id: 'demo-simple-select-native',
              }}
              sx={{ mt: 1 }}
            >
              <option value={16}>16</option>
              <option value={32}>32</option>
              <option value={64}>64</option>
            </Select>
          </Box>
        </Box>
        <Grid
          container
          justifyContent="space-between"
          sx={boxStyle}
        >
          {loader
    ? <SkeletonLoader length={skeletonLength} width={skeletonWidth} />
    : products.map(product => (
      <Grid item spacing={2} sx={{gap: 5}} key={product.id}>
        <ProductCard product={product} />  
      </Grid>
    ))
  }
        </Grid>
        <Box sx={{display: 'flex', justifyContent:"center", mt:5 }}>
          <Pagination
          count={paginationCount}
          page={+page}
          variant="outlined"
          shape="rounded"
          onChange={handleChangePage}
          sx={paginationStyle}
        />
        </Box>
      </Box>
    </Section>
  );
};

export default Catalog;
