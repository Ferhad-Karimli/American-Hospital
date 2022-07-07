import React from "react";
import style from "./footer.module.css";
import { GrLocation } from "react-icons/gr";
import { FaMobileAlt, FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

export default function footer() {
  return (
    <footer className={style.container}>
      <img className={style.footerlogo} src={"/assets/footerLogo.png"} />

      {/* <div className={style.contact}>
        <h2>American Hospital</h2>
      </div> */}
      <div className={style.contact_info}>
        <h2 className={style.contac_detailed}>
          {" "}
          <FaMobileAlt />{" "}
          <span className={style.streetName}> Telefon : 012 578 64 25 </span>
        </h2>
        <h2 className={style.location}>
          <FaLocationArrow />{" "}
          <span className={style.streetName}> Ünvan : Izmir küçəsi </span>
        </h2>
      </div>
    </footer>
  );
}
