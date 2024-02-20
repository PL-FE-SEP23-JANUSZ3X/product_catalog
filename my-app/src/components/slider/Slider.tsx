import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.styles.css';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import SliderProps from './Slider.types';
import { genRandomKey } from '../../utils/getRandomKey';

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {images.map(image => (
          <SwiperSlide key={genRandomKey()}><img src={image} alt={image} /></SwiperSlide>
        ))}
      </Swiper>
  );
}

export default Slider;