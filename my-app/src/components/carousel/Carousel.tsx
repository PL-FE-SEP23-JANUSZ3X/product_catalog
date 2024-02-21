import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowProps, CarouselProps } from "./Carousel.types";
import { Theme, Typography, useMediaQuery } from "@mui/material";
import './Carousel.styles.css'
import ProductCard from "../productCard/productCard";
import SkeletonLoader from "../skeletonLoader/SkeletonLoader";

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
  const mobileWidth = '212px'
  const tabletWidth = '237px'
  
  const skeletonWidth = {
    'small': 288,
    'medium': 288,
    'large': 272,
  }

  const skeletonLength = {
    'small': 1,
    'medium': 2,
    'large': 4,
  }

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
        {products.length !== 0 ? (
          <Slider ref={sliderRef} {...settings} >
            {products.map(product => (
              <div className={isMobile ? 'mobile' : isTablet ? 'tablet' : ''}>
                {isMobile ? <ProductCard product={product} carouselWidth={mobileWidth} />
                  : isTablet ? <ProductCard product={product} carouselWidth={tabletWidth} /> 
                  : <ProductCard product={product} />
                }
              </div>
            ))}
          </Slider>
        ) : (
          <SkeletonLoader length={skeletonLength} width={skeletonWidth} /> 
        )}
    </div>
  );
}

export default Carousel;