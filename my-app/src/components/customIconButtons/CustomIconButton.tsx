import { Box, IconButton } from "@mui/material"
import { useThemeContext } from "../../theme/ThemeContext";

type PropsPrev = {
  goToPrevSlide: () => void,
  isDisabled?: boolean,
}

export const LeftIconButton = ({goToPrevSlide, isDisabled=false}:PropsPrev) => {
  const { theme } = useThemeContext();

  const iconButtonStyle = {
    "&.MuiIconButton-root": {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      width: 32,
      height: 32,
      color: theme.palette.mode === 'light' ? 'primary.main' : 'white.main',
      backgroundColor: theme.palette.mode === 'light' ? 'transparent' : 'badgeBorder.main',
      outline: 1,
      outlineColor: theme.palette.mode === 'light' ? 'icons.main' : 'transparent',
      borderRadius: 0,
      border: 0,
      '&:hover': {
        outlineColor: theme.palette.mode === 'light' ? 'primary.main' : 'transparent',
        backgroundColor: theme.palette.mode === 'light' ? 'transparent' : 'icons.main',
      },
    },
    "&.Mui-disabled": {
      color: 'elements.main',
      outline: 1,
      outlineColor: 'element.main',
      backgroundColor: 'transparent',
    }
  }

    return (
      <IconButton
        sx={iconButtonStyle}
        onClick={goToPrevSlide}
        disabled={isDisabled}
      >
        <Box component='img' height={12} color='primary.main'
          src={theme.palette.mode === 'light'
            ? 'images/icons/arr-left-light.svg' 
            : 'images/icons/arr-left-dark.svg'}
        />
      </IconButton>
    )
}

type PropsNext = {
  goToNextSlide: () => void,
}
export const RightIconButton = ({goToNextSlide}: PropsNext) => {
  const { theme } = useThemeContext();
  
  const iconButtonStyle = {
    "&.MuiIconButton-root": {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      width: 32,
      height: 32,
      color: theme.palette.mode === 'light' ? 'primary.main' : 'white.main',
      backgroundColor: theme.palette.mode === 'light' ? 'transparent' : 'badgeBorder.main',
      outline: 1,
      outlineColor: theme.palette.mode === 'light' ? 'icons.main' : 'transparent',
      borderRadius: 0,
      border: 0,
      '&:hover': {
        outlineColor: theme.palette.mode === 'light' ? 'primary.main' : 'transparent',
        backgroundColor: theme.palette.mode === 'light' ? 'transparent' : 'icons.main',
      },
    },
    "&.Mui-disabled": {
      color: 'elements.main',
      outline: 1,
      outlineColor: 'element.main',
      backgroundColor: 'transparent',
    }
  }

    return (
      <IconButton
          sx={iconButtonStyle}
          onClick={goToNextSlide}
      >
          <Box component='img' height={12} color='primary.main'
          src={theme.palette.mode === 'light'
              ? 'images/icons/arr-right-active.svg' 
              : 'images/icons/arr-right.svg'}
          />
      </IconButton>
  )
}