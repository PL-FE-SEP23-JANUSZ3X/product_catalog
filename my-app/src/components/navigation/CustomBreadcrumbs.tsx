import { Box, Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useThemeContext } from "../../theme/ThemeContext";
import { colors } from "../../theme/colors";

type Props = {
  parrentLink?: string,
  currentPage: string,
}

const CustomBreadcrumbs = ({parrentLink, currentPage}: Props) => {
  const { theme } = useThemeContext();

  const navlinkStyle = {
    textDecoration: 'none', 
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '15px',
    paddingBottom: '4px',
    color: theme.palette.mode === 'light' ? colors.breadcrumbsLight : colors.breadcrumbsDark,
    ':hover': {
      color: theme.palette.mode === 'light' ? colors.breadcrumbsHoverLight : colors.breadcrumbsHoverDark,
    },
  }

  const home = (
    <NavLink  key="1" color="inherit" to="/">
      <Box component='img' height={18}
        src={theme.palette.mode === 'light'
          ? 'images/icons/home.svg' 
          : 'images/icons/home-dark.svg'
        }
      />
    </NavLink>
  )

  const parrent = parrentLink !== undefined ?  (
    <NavLink to={`/${parrentLink}`} end key="2" style={{textDecoration:'none'}}> 
      <Link 
        component='div'
        variant='body2'
        sx={navlinkStyle}
      >
        {parrentLink}
      </Link>
    </NavLink>
  ) : null;

  const current = (
    <Typography variant="body2" key="3" color="secondary.main">
      {currentPage}
    </Typography>
  )

  const breadcrumbs = [
    home,
    parrent,
    current
  ];
  
  return (
      <Stack spacing={1} mb={{xs: 3, sm: 5}}>
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{color: "secondary.main"}} />}
            aria-label="breadcrumb"
        >
            {breadcrumbs}
        </Breadcrumbs>
      </Stack>
  );
}
export default CustomBreadcrumbs;
