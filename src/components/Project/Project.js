import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./Project.scss";

import Project01 from "./Project01";
import Project02 from "./Project02";
import Project03 from "./Project03";
import Project04 from "./Project04";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Project = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  const showModal = (url) => {
    setOpen(true);
    setUrl(url);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div id="project">
      <div className="wrapper">
        <Modal
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[]}
          width={1000}
        >
          <img
            src={url}
            alt="파일없음"
            width={950}
            style={{ margin: "20px 0" }}
          ></img>
        </Modal>

        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          speed={1000}
          observer={true}
          type="progressbar"
        >
          <SwiperSlide>
            <Project01 showModal={showModal} />
          </SwiperSlide>
          <SwiperSlide>
            <Project02 showModal={showModal} />
          </SwiperSlide>
          <SwiperSlide>
            <Project03 showModal={showModal} />
          </SwiperSlide>
          <SwiperSlide>
            <Project04 showModal={showModal} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
