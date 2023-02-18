import React, { useState } from "react";
import classes from "../../styles/Portfolio.module.css";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Portfolio = ({ items, title, slides }) => {
  const [image, setImage] = useState(false);
  return (
    <section className={classes.portfolioSection}>
      {image && (
        <div className={classes.imageModal}>
          <FontAwesomeIcon icon={faClose} className={classes.close} onClick={() => setImage(false)} style={{width: '30px'}}/>
          <div className={classes.imageContainer}>
            <img src={image} alt="" />
          </div>
        </div>
      )}
      <h2 className="title">{title}</h2>
      <Swiper
        className="portfolioSwiper"
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={slides}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: slides,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={classes.portfolio}>
              <div className={classes.portfolioImage}>
                <img src={item.t} alt="" />
                <div className={classes.expand}>
                  <span onClick={() => setImage(item.i)}>Expand &gt;</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
