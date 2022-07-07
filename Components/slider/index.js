import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import styles from "./slider.module.css";
import image_1 from "../../public/assets/tenderone.jpg";
import image_2 from "../../public/assets/tendertwo.jpg";
import image_3 from "../../public/assets/tenderthree.jpg";
import Link from "next/Link";
import { FaInstagramSquare, FaFacebook, FaWhatsapp } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import Flip from "react-reveal/Flip";
// import logo  from "../../public/assets/navbarLogo.png"

export default function Slider() {
  return (
    <div className={styles.container}>
      <img className={styles.navbarlogo} src={"/assets/navbarLogo.png"} />

      <div className={styles.social_icons}>
        <FaFacebook size={28} />
        <FaInstagramSquare size={28} />
        <FaWhatsapp size={28} />
      </div>

      <Flip left>
        <div className={styles.companyName}>American Hospital Baku</div>
      </Flip>

      <Link href="/contact">
        <div className={styles.contact}>Əlaqə</div>
      </Link>

      <Link href="/tenders">
        <div className={styles.tender}>Tenderlərə baxış</div>
      </Link>

      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect
        speed={800}
        spaceBetween={50}
        slidesPerView={1}
        loop
        className={styles.myswiper}
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={styles.swiperslider}>
          <img
            className={styles.image}
            src={
              "https://cdn.1tv.ge/app/uploads/2019/04/1554359956-%E1%83%99%E1%83%9A%E1%83%98%E1%83%9C%E1%83%98%E1%83%99%E1%83%90-%E1%83%AF%E1%83%94%E1%83%A0%E1%83%90%E1%83%A0%E1%83%A1%E1%83%98-4.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img
              className={styles.image}
              src={
                "https://avatars.mds.yandex.net/get-altay/3935166/2a00000174e8518c23eb971619592b3eca08/L"
              }
            />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.image}
            src={
              "https://jerarsi.ge/uploads/photo-gallery/thumb/266B8532.jpg?bwg=1577705896"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
