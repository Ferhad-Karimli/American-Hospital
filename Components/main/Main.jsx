import React from "react";
import Image from "next/image";
import style from "./Main.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagramSquare, FaFacebook, FaWhatsapp } from "react-icons/fa";
import  Tenders  from "../TendersData/tenders.json"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
console.log(Tenders,"tenders")
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function Main() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  console.log(Tenders,"tenders")

  return (
    <div className={style.container}>
      <div className={style.social_icons}>
        <FaFacebook size={28} />
        <FaInstagramSquare size={28} />
        <FaWhatsapp size={28} />
      </div>

      <div className={style.contact}>Elaqe</div>

      <div className={style.tender}>Tenderlere baxish</div>

      <Slider {...settings}>
        <div>
          <img className={style.imageContainer} src={"/assets/tenderone.jpg"} />
        </div>
        <div>
          <img
            className={style.imageContainer}
            src={"/assets/tenderthree.jpg"}
          />
        </div>
        <div>
          <img className={style.imageContainer} src={"/assets/check_up.webp"} />
        </div>
        <div>
          <img className={style.imageContainer} src={"/assets/tenderone.jpg"} />
        </div>
        <div>
          <img className={style.imageContainer} src={"/assets/check_up.webp"} />
        </div>
      </Slider>
    </div>
  );
}
