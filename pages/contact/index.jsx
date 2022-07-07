import React from 'react'
import tendersDetailed from "../../Components/tendersDetailed"
import Contact from "../../Components/Contact/Contact"
import style from "./index.module.css"

export default function ContactInfo () {
  return (
    <div className={style.container}>

<img className={style.navbarlogo} src={"/assets/footerLogo.png"} />

    
      <div className={style.navbar}>
       <div className={style.adress}> Bəşir Səfəroğlu küçəsi </div>
       <div className={style.number}> Əlaqə 050 200 25 22 </div>


      </div>
      <h1 className={style.title}> Müraciətinizi bizə aşağıdakı ünvandan göndərə bilrəsiz  </h1> 

     <Contact />

      
    </div>
  )
}
