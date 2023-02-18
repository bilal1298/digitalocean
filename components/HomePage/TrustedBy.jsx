import React from "react";
import classes from "../../styles/TrustedBy.module.css";
import Section from "../UI/Section";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const TrustedBy = ({ title }) => {
  return (
    <Section
      padding={"50px 0"}
      background={"#ebf5ff"}
      title={
        title ? (
          title
        ) : (
          <>
            <span className="titleBackground">Trusted</span> By
          </>
        )
      }
    >
      <div className={classes.firstRow}>
        <Swiper
          loop={true}
          slidesPerView={"auto"}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 6,
            },
          }}
          speed={3000}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
        >
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo 4.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/client logo1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/client logo2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo7.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo6.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo8.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo11.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/client logo19.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={classes.middleRow}>
        <Swiper
          slidesPerView={"auto"}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 6,
            },
          }}
          speed={3000}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loop={true}
          spaceBetween={50}
        >
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/client logo20.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo12.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo5.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo9.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/client logo 3.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/client logo21.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/client logo 23.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper
          loop={true}
          slidesPerView={"auto"}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 6,
            },
          }}
          speed={3000}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          spaceBetween={50}
        >
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/client logos 27.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo 22.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo10.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo14.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo15.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo16.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo17.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.image}>
              <img src="/Client logo18.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Section>
  );
};

export default TrustedBy;
