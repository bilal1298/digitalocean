import React from "react";
import Section from "../UI/Section";
import Link from "next/link";
import classes from "../../styles/CaseStudies.module.css";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const CaseStudies = ({ background, caseStudies }) => {
  return (
    <Section
      padding={"70px 0"}
      background={background ? background : "#002eff"}
      title={
        <>
          <span className="titleBackground">Case Studies</span>
        </>
      }
      color={"#000"}
    >
      {!caseStudies ? (
        <Swiper
          className="caseStudiesSwiper"
          style={{ padding: "35px" }}
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
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
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className={classes.caseStudy}>
              <div className={classes.title}>
                <h3>Case Study</h3>
              </div>
              <div className={classes.content}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                  officiis officia voluptates, excepturi facere eaque amet laudantium.
                </p>
              </div>
              <Link className={classes.readMore} href="/">
                Read More
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.caseStudy}>
              <div className={classes.title}>
                <h3>Case Study</h3>
              </div>
              <div className={classes.content}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                  officiis officia voluptates, excepturi facere eaque amet laudantium.
                </p>
              </div>
              <Link className={classes.readMore} href="/">
                Read More
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.caseStudy}>
              <div className={classes.title}>
                <h3>Case Study</h3>
              </div>
              <div className={classes.content}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                  officiis officia voluptates, excepturi facere eaque amet laudantium.
                </p>
              </div>
              <Link className={classes.readMore} href="/">
                Read More
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.caseStudy}>
              <div className={classes.title}>
                <h3>Case Study</h3>
              </div>
              <div className={classes.content}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                  officiis officia voluptates, excepturi facere eaque amet laudantium.
                </p>
              </div>
              <Link className={classes.readMore} href="/">
                Read More
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.caseStudy}>
              <div className={classes.title}>
                <h3>Case Study</h3>
              </div>
              <div className={classes.content}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                  officiis officia voluptates, excepturi facere eaque amet laudantium.
                </p>
              </div>
              <Link className={classes.readMore} href="/">
                Read More
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.caseStudy}>
              <div className={classes.title}>
                <h3>Case Study</h3>
              </div>
              <div className={classes.content}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos maxime tempora quisquam provident ipsum aliquam blanditiis asperiores inventore rerum dolorum ducimus,
                  officiis officia voluptates, excepturi facere eaque amet laudantium.
                </p>
              </div>
              <Link className={classes.readMore} href="/">
                Read More
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          className="caseStudiesSwiper"
          style={{ padding: "35px" }}
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
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
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          }}
        >
          {caseStudies.map((item) => (
            <SwiperSlide key={item.slug}>
              <div className={classes.caseStudy}>
                <div className={classes.title}>
                  <img src={item.image} alt="" />
                </div>
                <div className={classes.content}>
                  <p>{JSON.stringify(item.problem).replace(/(.{150})..+/, "$1…")}</p>
                </div>
                <Link className={classes.readMore} href={`/case-study/${item.slug}`}>
                  Read More
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Section>
  );
};

export default CaseStudies;
