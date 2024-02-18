import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./BrandItem.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file if you're using it

// Initialize AOS
AOS.init();

const BrandItem = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: "auto",
        spaceBetween: 20,
      
      });
    }
  }, []);

  return (
    <Grid container spacing={2} className="brand-container"data-aos="flip-up"  >
      <Grid item xs={12}>
        <div ref={swiperRef} className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                className="brand-item-image"
                src="//elessi2.myshopify.com/cdn/shop/files/brand-1_180x.jpg?v=1614392006"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="brand-item-image"
                src="https://elessi2.myshopify.com/cdn/shop/files/brand-2_180x.jpg?v=1614392006"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="brand-item-image"
                src="https://elessi2.myshopify.com/cdn/shop/files/brand-3_180x.jpg?v=1614392006"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="brand-item-image"
                src="https://elessi2.myshopify.com/cdn/shop/files/brand-4_180x.jpg?v=1614392006"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="brand-item-image"
                src="https://elessi2.myshopify.com/cdn/shop/files/brand-5_180x.jpg?v=1614392006"
                alt=""
              />
            </div><div className="swiper-slide">
              <img
                className="brand-item-image"
                src="//elessi2.myshopify.com/cdn/shop/files/brand-1_180x.jpg?v=1614392006"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="brand-item-image"
                src="https://elessi2.myshopify.com/cdn/shop/files/brand-2_180x.jpg?v=1614392006"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="brand-item-image"
                src="https://elessi2.myshopify.com/cdn/shop/files/brand-3_180x.jpg?v=1614392006"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="brand-item-image"
                src="https://elessi2.myshopify.com/cdn/shop/files/brand-4_180x.jpg?v=1614392006"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="brand-item-image"
                src="https://elessi2.myshopify.com/cdn/shop/files/brand-5_180x.jpg?v=1614392006"
                alt=""
              />
            </div>

          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default BrandItem;
