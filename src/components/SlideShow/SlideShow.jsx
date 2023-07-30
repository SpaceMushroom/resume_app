import Title from "../Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { myProjects } from "../../consts/projects";
import "./SlideShow.scss";

import { EffectCube, Pagination, Autoplay } from "swiper/modules";

const SlideShow = () => {
  return (
    <>
      <div className="test">
        <Title title={"Showroom"} />
      </div>

      <div className="slide">
        <Swiper
          loop={true}
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          autoplay={{
            delay: 2500,
            transition: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCube, Pagination]}
          className="mySwiper"
        >
          {myProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <a href={project.link} target="blank">
                <img src={project.image} alt={project.title} />
              </a>
              <div className="container">
                <div className="iner">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SlideShow;
