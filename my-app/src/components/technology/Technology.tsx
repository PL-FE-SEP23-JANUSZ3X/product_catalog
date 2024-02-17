import { Box, Typography, Select, Grid, SelectChangeEvent, Pagination, Skeleton } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemCard from "../itemCard/ItemCard";
import TechnologyProps from "./Technology.types";
import { Product } from "../../types/Product";
import Section from "../section/Section";

const boxStyle = {
  display: 'grid',
  justifyContent: 'center',
  gridTemplateColumns: {xs: 'repeat(1, 288px)', sm: 'repeat(2, 288px)', md: 'repeat(4, 272px)'},
  gridAutoRows: 'auto',
  gap: '40px 16px',
  marginTop: '24px'
}


const Technology: React.FC<TechnologyProps> = ({ headline, title }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [paginationCount, setPaginationCount] = useState<number>(0)
  const [technology, setTechnology] = useState<Product[]>([])
  const [technologyCount, setTechnologyCount] = useState<number>(0)
  const [loader, setLoader] = useState<boolean>(false)

  const sortType = searchParams.get('sort') ?? 'newest';
  const itemsPerPage = searchParams.get('items') ?? '16'; 
  const page = searchParams.get('page') ?? '1';

  const numberOfSkeletons = 4

  let PaginationApi = '';

  if (headline === 'Phones') {
    PaginationApi = `https://phone-catalog-f9j4.onrender.com/phones/pagination/${sortType}-${(+page - 1) * +itemsPerPage}-${+itemsPerPage * +page}`
  }

  if (headline === 'Accessories') {
    PaginationApi = `https://phone-catalog-f9j4.onrender.com/accesories/pagination/${sortType}-${(+page - 1) * +itemsPerPage}-${+itemsPerPage * +page}`
  }

  if (headline === 'Tablets') {
    PaginationApi = `https://phone-catalog-f9j4.onrender.com/tablets/pagination/${sortType}-${(+page - 1) * +itemsPerPage}-${+itemsPerPage * +page}`
  }

  useEffect(() => {
    const getTechnology = async () => {
      try {
        setLoader(true)
        const response = await fetch(PaginationApi);
        const responsePhones = await fetch(`https://phone-catalog-f9j4.onrender.com/phones`)
        const phonesData = await responsePhones.json()
        setTechnologyCount(phonesData.length)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTechnology(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoader(false)
      }
    }

  getTechnology();
}, [searchParams]);

  const skeletonItems = Array.from({ length: numberOfSkeletons }, (_, index) => (
    <Grid key={index} item spacing={2} sx={{ gap: 5 }}>
      <Skeleton variant="rounded" width={272} height={506} />
    </Grid>
  ));

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
    console.log(technologyCount, +itemsPerPage)
    setPaginationCount(Math.ceil(technologyCount / +itemsPerPage))
  }, [technologyCount, itemsPerPage])
  

  return (
    <Section>
      <Box>
        <Box sx={{ display: 'flex', alginItems: 'center', gap: 1.5 }}>
          <img src='/images/icons/home.svg' />
          <img src='/images/icons/arr-rigth.svg' />
          <Typography variant="caption" sx={{ color: 'secondary.main' }}>
            {headline}
          </Typography>
        </Box>
        <Typography variant="h2" gutterBottom sx={{mt: 2}}>
          {title}
        </Typography>
        <Typography variant="caption" gutterBottom sx={{mt: 1, color: 'secondary.main'}}>
          {technologyCount} models
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
            ? skeletonItems
            : technology.map(tech => (
              <Grid item spacing={2} sx={{gap: 5}} key={tech.id}>
                <ItemCard item={tech} />  
              </Grid>
            ))
          }
        </Grid>
        <Box sx={{display: 'flex', justifyContent:"center", mt:5 }}>
          <Pagination
            count={paginationCount}
            variant="outlined"
            shape="rounded"
            page={+page}
            onChange={handleChangePage} 
          />
        </Box>
      </Box>
    </Section>
  );
};

export default Technology;
