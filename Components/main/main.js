import React from "react";
import style from "./main.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagramSquare, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import Tenders from "../TendersData/tenders.json";
import LeftArrow from "../../public/assets/leftarrow.svg";
import RightArrow from "../../public/assets/rightarrow.svg";
import image from "../../public/assets/NavbarLogo.png";


export default function Main() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />,
    // nextArrow: true,
    // prevArrow: true,
  };

  const { push } = useRouter();

  return (
    <div className={style.container}>
      {/* <div className={style.social_icons}>
        <FaFacebook size={28} />
        <FaInstagramSquare size={28} />
        <FaWhatsapp size={28} />
      </div> */}

      <Link href="/contact">
        <div className={style.contact}>Əlaqə</div>
      </Link>

      <div className={style.tender}>Tenderlərə baxış</div>

      <div className={style.seemore}> Daha çox göstər </div>

      <Slider {...settings}>
        {Tenders?.map((el, index) => {
          return (
            <div
              key={index}
              onClick={() => push(`/tendersdetailded?tender=${el.id}`)}
            >
              <h1 className={style.title}>{el?.tenderInfo}</h1>
              <img className={style.imageContainer} src={el?.image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
