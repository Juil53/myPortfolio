import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./testimonial.css";
import AVT1 from "../../assets/me1.jpg";
import AVT2 from "../../assets/me2.jpg";
import AVT3 from "../../assets/me5.jpg";
import AVT4 from "../../assets/me7.jpg";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    avatar: AVT1,
    name: "Strengths",
    review:
      "A careful person, being willing to learn new things, being able to read English materials.",
  },
  {
    avatar: AVT2,
    name: "Hobbies",
    review:
      "Watching football news, playing computer games, traveling to new places. Trying various kinds of food from different countries.",
  },
  {
    avatar: AVT3,
    name: "Weaknesses",
    review:
      "Lacking of practical experience and programming knowledge, being not really skillful at logic code.",
  },
  {
    avatar: AVT4,
    name: "Objectives",
    review:
      "Developing and sharpening my skill based on the aim of being a professional Front End Developer.",
  },
];

export default function Testimonial() {
  return (
    <section>
      <h5>Testimonials</h5>
      <h2>Evaluation</h2>

      <Swiper
        className="container testimonals__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {data.map((article, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={article.avatar} alt="avatar1" />
              </div>
              <h5 className="client__name">{article.name}</h5>
              <small className="client__review">{article.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
