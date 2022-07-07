import React from "react";
import Form from "../../Components/Forum/index";
import style from "./index.module.css";

export default function tendersinfo() {
  return (
    <div>
      <div className={style.navbar}>
        <img className={style.navbarlogo} src={"/assets/footerLogo.png"} />
        <div className={style.adress}> Bəşir Səfəroğlü küçəsi</div>
        <div className={style.number}>Əlaqə 050 200 25 22</div>
      </div>

      <h1 className={style.suggestion}>Təklif ver</h1>

      <Form />
    </div>
  );
}
