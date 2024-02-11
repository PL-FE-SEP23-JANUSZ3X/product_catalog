import { useThemeContext } from "../../theme/ThemeContext";
import { Box } from "@mui/material";

const Eyes = () => {
  const eyesStyle = {
    display: 'flex',
	  justifyContent: 'center',
	  gap: '2px',
  };

  const eye = {
    width: '70px',
    height: '60px',
    backgroundColor: '#fed85d',
    borderRadius: '50%',
    display: 'grid',
    placeItems: 'center',
  }

  const pupil = {
    width: '26px',
    height: '26px',
    backgroundColor: '#050505',
    borderRadius: '50%',
    animation: 'movePupil 4s infinite ease-in-out',
    transformOrigin: 'center center',

    "@keyframes movePupil": {
      '0%': {
        transform: 'translate(0, 0)',
      },
      '100%': {
          transform: 'translate(0, 0)',
      },
     ' 25%':{
          transform: 'translate(-10px, -10px)',
      },
      '50%': {
          transform: 'translate(10px, 10px)',
      },
      '75%': {
          transform: 'translate(-10px, 10px)',
      }
    }
  }

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '30px',
    textAlign: 'center',
  };

  return (
    <Box sx={wrapperStyle}>  
        <Box sx={eyesStyle}>
          <Box sx={eye}>
              <Box sx={pupil}></Box>
          </Box>
          <Box sx={eye}>
              <Box sx={pupil}></Box>
          </Box>
        </Box>

    </Box>
  );
};

export default Eyes;