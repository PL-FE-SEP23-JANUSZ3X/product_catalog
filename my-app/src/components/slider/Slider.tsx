import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import SliderProps from './Slider.types';
import { genRandomKey } from '../../utils/getRandomKey';
import { useThemeContext } from '../../theme/ThemeContext';
import { styled } from '@mui/material';

const Slider: React.FC<SliderProps> = ({ images }) => {
  const { theme } = useThemeContext();

  const SliderWrap = styled('div')({
    "#Slider": { height: "100%" },
    // ".swiper": { },
    ".swiper-slide": {
      textAlign: "center",
      fontSize: "18px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: '640px',
      height: "320px",
      overflow: 'hidden',
    },
    ".swiper-slide img": {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
    ".swiper-button-prev,.swiper-button-next": {
      marginLeft: "-10px",
      marginRight: "-10px",
      width: "32px",
      height: "400px",
      border: theme.palette.mode === 'light' ? "1px solid #B4BDC3" : "1px solid transparent",
      backgroundColor: theme.palette.mode === 'light' ? "#fff" : "#323542",
      display: "flex",
      fontSize: "16px",
      alignItems: "center",
      zIndex: 1,
      justifyContent: "center",
      cursor: "pointer",
      '&:hover': {
        border: theme.palette.mode === 'light' ? "1px solid #313237" : "1px solid transparent",
        backgroundColor: theme.palette.mode === 'light' ? "#fff" : "#4A4D58",
      }
    },
    ".swiper-button-prev::after,.swiper-button-next::after": {
      color: theme.palette.mode === 'light' ? "#313237" : "#F1F2F9",
      fontSize: "15px"
    },
    ".swiper-button-prev, .swiper-button-next": { top: "10.3%" },
    ".swiper-pagination": {
      position: "relative",
      textAlign: "center",
      transition: "300ms opacity",
      transform: "translate3d(0, 0, 0)",
      zIndex: 10,
      bottom: "0",
      left: "0",
      width: "100%",
      top: "0"
    },
    ".swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal> .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal": {
      bottom: "17px"
    },
    ".swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet": {
      margin: "0 8px"
    },
    ".swiper-pagination-bullet": {
      width: "14px",
      height: "4px",
      borderRadius: "0",
      margin: "0 18px",
      backgroundColor: theme.palette.mode === 'light' ? "#313237" : "#F1F2F9",
    },
    "@media (min-width: 0)": {
      ".swiper-button-prev, .swiper-button-next": { visibility: "hidden" }
    },
    "@media (min-width: 640px)": {
      ".swiper-slide": {width: '592px', height: "221px"},
      ".swiper-slide img, .swiper-button-prev, .swiper-button-next": {
        height: "189px"
      },
      ".swiper-slide img": {height: "189px", width: "490px"},
      ".swiper-button-prev,.swiper-button-next": { visibility: "visible",
      height: "191", top: "38px"
     },
    },
    "@media (min-width: 1200px)": {
      ".swiper-slide": { height: "450px", maxWidth: "1136px" },
      ".swiper-slide img": {height: "400px", width: "1040px"},
      ".swiper-button-prev,.swiper-button-next": {
        height: "402px", top: "46px"
      },
    }
  })

  return (
    <SliderWrap>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {images.map(image => (
          <SwiperSlide key={genRandomKey()}><img src={image} alt={image} /></SwiperSlide>
        ))}
      </Swiper>
      </SliderWrap>
  );
}

export default Slider;