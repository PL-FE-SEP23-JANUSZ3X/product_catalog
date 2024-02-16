import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowProps, CarouselProps } from "./Carousel.types";
import { Theme, Typography, useMediaQuery } from "@mui/material";
import './Carousel.styles.css'
import ItemCard from "../itemCard/ItemCard";

function SampleNextArrow(props: ArrowProps) {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick} 
    >
      <img src="/images/icons/arr-right-active.svg" alt="arr-right" />
    </div>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick} 
    >
      <img src="/images/icons/arr-left-active.svg" alt="arr-left" />
    </div>
  );
}

const Carousel: React.FC<CarouselProps> = ({ title, products }) => {
  const sliderRef = useRef<Slider>(null);
  const carouselWidth = '212px'

  const isTablet = useMediaQuery((theme: Theme)  => theme.breakpoints.down('md'));
  const isMobile = useMediaQuery((theme: Theme)  => theme.breakpoints.down('sm'));

  let slidesToShow = 4;

  if (isTablet) {
    slidesToShow = 2.5;
  }

  if (isMobile) {
    slidesToShow = 1.2; 
  }

  const settings = {
    infinite: true, 
    slidesToShow,
    slidesToScroll: 1,
    centerMode: false,
  };

  const goToNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="slider-container">
      <div className="slider-headliner container__slider">
        <Typography variant="h2" sx={{fontSize: { xs: '24px', sm: '32px' }}}>{title}</Typography>
        <div className="arrows-container">
          <SamplePrevArrow onClick={goToPrevSlide} className={'arrow'} />
          <SampleNextArrow onClick={goToNextSlide} className={'arrow'} />
        </div>
      </div>
        <Slider ref={sliderRef} {...settings} >
          {products.map(product => (
            <div className={isMobile ? 'mobile' : isTablet ? 'tablet' : ''}>
              {isMobile ? <ItemCard item={product} carouselWidth={carouselWidth} /> : <ItemCard item={product} />}
            </div>
          ))}
        </Slider>
    </div>
  );
}

export default Carousel;