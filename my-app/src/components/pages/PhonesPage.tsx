import { Box, MenuItem, Typography, Select, Grid, SelectChangeEvent, Pagination, Skeleton } from "@mui/material";
import PhoneCard from "../phoneCard/PhoneCard";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PhonesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [phones, setPhones] = useState([])
  const [phonesCount, setPhonesCount] = useState<number>(0)
  const [paginationCount, setPaginationCount] = useState<number>(0)
  const [loader, setLoader] = useState<boolean>(false)

  const sortType = searchParams.get('sort') ?? 'newest';
  const itemsPerPage = searchParams.get('items') ?? '16';
  const page = searchParams.get('page') ?? '1';

  const numberOfSkeletons = 4

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
      const getPhones = async () => {
        try {
          setLoader(true)
          const response = await fetch(`https://phone-catalog-f9j4.onrender.com/phones/pagination/${sortType}-${(+page - 1) * +itemsPerPage}-${+itemsPerPage * +page}-asc`);
          const responsePhones = await fetch(`https://phone-catalog-f9j4.onrender.com/phones`)
          const phonesData = await responsePhones.json()
          setPhonesCount(phonesData.length)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setPhones(data)
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoader(false)
        }
      }

    getPhones();
  }, [searchParams]);

  useEffect(() => {
    console.log(phonesCount, +itemsPerPage)
    setPaginationCount(Math.ceil(phonesCount / +itemsPerPage))
  }, [phonesCount, itemsPerPage])
  

  return (
    <Box sx={{ paddingY: 3, paddingX: 2, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{width: 1200}} >
        <Box sx={{ display: 'flex', alginItems: 'center', gap: 1.5 }}>
          <img src='/images/icons/home.svg' />
          <img src='/images/icons/arr-rigth.svg' />
          <Typography variant="caption" sx={{ color: 'secondary.main' }}>
            Phones
          </Typography>
        </Box>
        <Typography variant="h2" gutterBottom sx={{mt: 2}}>
          Mobile phones
        </Typography>
        <Typography variant="caption" gutterBottom sx={{mt: 1, color: 'secondary.main'}}>
          {phonesCount} models
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
        <Grid container justifyContent="space-between" spacing={2} sx={{width: '100%', mt: 3, grid: 3}}>
          {loader ?
            skeletonItems :
            phones.map(phone => (
            <Grid item spacing={2} sx={{gap: 5}}>
              <PhoneCard phone={phone} />  
            </Grid>
          ))}
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
    </Box>
  );
};

export default PhonesPage;
