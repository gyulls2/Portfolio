import React, { useState } from "react";
import "./Project.scss";

import Project01 from "./Project01";
import Project02 from "./Project02";
import Project03 from "./Project03";
import Project04 from "./Project04";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Project = () => {

  return (
    <div id="project">
      <div className="wrapper">
        <Swiper
          slidesPerView={1}
          // loop={true}
          navigation={true}
          modules={[Pagination, Navigation, Mousewheel]}
          className="mySwiper"
          speed={1000}
          observer={true}
          mousewheel={{
            forceToAxis: false,
            releaseOnEdges: true,
            sensitivity: 1,
          }}
          pagination={{
            clickable: true, // 페이지 번호를 클릭하여 슬라이드를 변경할 수 있게 함
            type: "bullets", // 페이지 번호 유형을 설정 (기본값은 'bullets', 다른 옵션은 'fraction', 'progressbar', 'custom')
          }}
        >
          <SwiperSlide>
            <Project01 />
          </SwiperSlide>
          <SwiperSlide>
            <Project02 />
          </SwiperSlide>
          <SwiperSlide>
            <Project03 />
          </SwiperSlide>
          <SwiperSlide>
            <Project04 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
