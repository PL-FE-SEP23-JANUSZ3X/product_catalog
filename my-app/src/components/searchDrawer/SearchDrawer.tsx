import { Box, CardMedia, Drawer, IconButton, Input, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import EastIcon from '@mui/icons-material/East';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getQueryProducts } from "../../utils/fetchHelper";
import { Product } from '../../types/Product';

const SearchDrawer = () => {
    const [isDraweOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [searchKeys, setSearchKeys] = useState('');
    const [searchedData, setSearchedData] = useState<Product[]>([]);
    //const [loader, setLoader] = useState<boolean>(false);

    useEffect(() => {
      const handler = setTimeout(async () => {
        if (searchKeys.length > 0) {
          try {
            //setLoader(true);
            const response = await getQueryProducts(searchKeys);
            setSearchedData(response);
            if (typeof response !== null) {
              setSearchedData(response)
            } else {  
              setSearchedData([])
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            //setLoader(false);
          }
        }
      }, 500);
      return () => {
        clearTimeout(handler);
      };
    }, [searchKeys]);
    
    const handleSearchInput: React.ChangeEventHandler<HTMLInputElement>= (event) => {
      setSearchKeys(event.target.value)
    }

    
    const linkBoxStyle = {
      display: "block",
      padding: "5px",
      transition: "background-color 0.3s",
      backgroundColor: "rgba(255, 255, 255, 0)",
    }

    const hoverLinkBoxStyle = {
      backgroundColor: "rgba(211, 211, 211, 0.2)",
    }

    const searchContainerStyle = {
      minHeight: "100px",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      p: {xs: "16px", sm: "20px"}
    }

    const searchBoxStyle = {
      minWidth: {xs: "300px", sm:"580px", md: "1000px"},
      display: "flex",
      flexDirection: "column",
      gap: "30px"
    }

    const closeButtonStyle = {
      display: {xs: "flex", sm: "none" },
      p: 0,
      justifyContent: "end",
    }

    const inputBoxStyle = {
      minWidth: {xs: "280px", sm:"580px", md: "900px"},
      display: "flex",
      alignItems: "center"
    }

    const searchIconStyle = {
      fontSize: {xs: "20px", sm: "24px"}
    }

    const inputStyle = {
      minWidth: {xs: "262px", sm:"580px", md: "900px"}
    }

    const linkStyle = {
      backgroundColor:"none",
      textDecoration: "none",
      color: "primary.main",
    }

    const eastIconStyle = {
      fontSize: {xs: "20px", sm: "24px"}
    }

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
      event.currentTarget.style.backgroundColor = hoverLinkBoxStyle.backgroundColor;
    }

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
      event.currentTarget.style.backgroundColor = linkBoxStyle.backgroundColor;
    }

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setIsDrawerOpen(open);
    }

    return (
      <>
        <IconButton 
          onClick={toggleDrawer(true)}
          disableRipple
          sx={{
            padding: {
              xs: 2,
              md: 3,
            },
          }}
        >
          <SearchIcon sx={{fontSize: "16px"}}/>
        </IconButton>
        <Drawer 
          anchor='top'
          open={isDraweOpen}
          onClose={toggleDrawer(false)}
          sx={{mt: 7}}  
        >
          <Box sx={searchContainerStyle}>
            <Box sx={searchBoxStyle}>
              <Box display="grid" gap="20px">
              <IconButton 
                disableRipple
                sx={closeButtonStyle}
                onClick={toggleDrawer(false)}
              >
                <CloseIcon sx={{ fontSize: "16px"}}/>
              </IconButton>
              <Box sx={inputBoxStyle}>
                <IconButton disableRipple>
                  <SearchIcon sx={searchIconStyle}/>
                </IconButton>
                <Box
                  sx={inputStyle}
                  >
                  <Input 
                    fullWidth
                    id="search-query"
                    placeholder="Search"
                    value={searchKeys}
                    onChange={handleSearchInput}
                  />
                </Box>
                
              </Box>
              </Box>
              <Box display="grid">
              {searchedData.map(product =>
                <Box
                  key={product.id}
                  style={linkBoxStyle}
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}
                  onClick={toggleDrawer(false)}
                  
                >
                  
                  <Link 
                    style={linkStyle}
                    to={`/${product.category}/${product.itemId}`}
                    onClick={toggleDrawer(false)}
                  >
                    <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
                      <IconButton disableRipple>
                        <EastIcon sx={eastIconStyle}/>
                      </IconButton>
                      <CardMedia
                          component="img"
                          sx={{
                            objectFit: 'contain',
                            width:{sm:'50px'},
                            justifyContent: 'center',
                            height:{sm:'50px'},
                          }}
                          src={product.image}
                        />
                        <Typography 
                          color="primary.main" display="inline"
                          sx={{backgroundColor: "none", justifyContent:"center", alignItems:"center"}}>
                              {product.name}
                        </Typography>
                    </Box>       
                  </Link>
                </Box>
              )}
              </Box>
            </Box>
          </Box>
        </Drawer>
      </>
        
    )
}

export default SearchDrawer;
