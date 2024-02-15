import {
    Box,
    Button,
    Divider,
    IconButton,
    Stack,
    Typography,
  } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";

const item = {
  "id": "apple-iphone-11-128gb-black",
  "namespaceId": "apple-iphone-11",
  "name": "Apple iPhone 11 128GB Black",
  "capacityAvailable": ["64GB", "128GB", "256GB"],
  "capacity": "128GB",
  "priceRegular": 1100,
  "priceDiscount": 1050,
  "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
  "color": "black",
  "screen": "6.1' IPS",
  "resolution": "1792x828",
  "processor": "Apple A13 Bionic",
  "ram": "4GB",
}

  const ProductVariantsActions = () => {
    return (
      <Box
        sx={{
          width: {xs: "288px", sm:"237px", md: "320px"},
          height: "435px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Box sx={{
            width: "152px",
            height: "55px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
          <Typography variant="body2" sx={{
            color: "secondary.main",
          }}>Available colors</Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
        >
          {item?.colorsAvailable.map((color) => (
          <Link to={`/phones/${item?.namespaceId}-${item?.capacity}-${color}`}>
            <IconButton
            sx={{
              color: color,
              p: 0,
              pr: 1,
              border: "4px",
              outline: "1px",
              outlineColor: "icons.main",
            }}
          >
            <CircleIcon
              sx={{
                fontSize: 32,
                border: "1px solid",
                borderRadius: "50%",
                borderColor: "icons.main",
              }}
            />
          </IconButton>
          </Link>
          
          ))}
          
        </Box>
          </Box>
          
          <Typography variant="body2" sx={{ fontWeight: 700, color: "icons.main" }}>ID: 802390</Typography>
        </Box>
  
       
  
        <Divider orientation="horizontal" flexItem />

        <Typography variant="body2" sx={{
            color: "secondary.main",
          }}>Select capacity</Typography>
        
         

        <Box sx={{ display: "flex", gap: "10px" }}>
        {item?.capacityAvailable.map((capacity) => (
          <Button
            variant="contained"
            sx={{
              minWidth: "auto",
              height: 32,
              boxShadow: 0,
              borderRadius: 0,
              fontSize: 14,
              fontWeight: 500,
              p: 1,
            }}
          >
            {capacity}
          </Button>
         ))}
        </Box>

        <Divider orientation="horizontal" flexItem />

        <Box sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px"
        }}>
        <Typography variant="h2" sx={{ 
            color: "primary.main",
            letterSpacing: "-1%",
            }}>
            ${item.priceDiscount}
        </Typography>
        <Typography sx={{
            fontWeight: 500,
            fontSize: "22px",
            lineHeight: "28px",
            color: "secondary.main",
            textDecoration: "line-through",
            alignSelf: "center",
        }}>
            ${item.priceRegular}
        </Typography>
        </Box>
        
        <Stack spacing={3} direction="row">
        <Button
            variant="contained"
            sx={{
              width: 321,
              height: 48,
              boxShadow: 0,
              borderRadius: 0,
              fontSize: 14,
              fontWeight: 500,
              textTransform: "none",
              p: 1.5,
            }}
          >
            Add to card
          </Button>
          <Button
                variant="outlined"
                sx={{
                  minWidth: 48,
                  height: 48,
                  borderRadius: 0,
                  p: 0,
                  borderColor: 'icons.main',
                }}
              >
                <FavoriteBorderIcon
                  sx={{ width: 20, height: 20, color: 'primary.main' }}
                />
              </Button>
        </Stack>
        
        <Box sx={{
            width: "100%",
            height: "84px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Typography variant="body2" sx={{
            color: "secondary.main",
          }}>Screen</Typography> 
          <Typography variant="body2" sx={{
            color: "primary.main",
          }}>{item?.screen}</Typography>  
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Typography variant="body2" sx={{
            color: "secondary.main",
          }}>Resolution</Typography> 
          <Typography variant="body2" sx={{
            color: "primary.main",
          }}>{item?.resolution}</Typography>  
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Typography variant="body2" sx={{
            color: "secondary.main",
          }}>Processor</Typography> 
          <Typography variant="body2" sx={{
            color: "primary.main",
          }}>{item?.processor}</Typography>  
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Typography variant="body2" sx={{
            color: "secondary.main",
          }}>RAM</Typography> 
          <Typography variant="body2" sx={{
            color: "primary.main",
          }}>{item?.ram}</Typography>  
        </Box>
        </Box>
        
      </Box>
    );
  };
  
  export default ProductVariantsActions;
  