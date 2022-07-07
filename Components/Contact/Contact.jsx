import React from "react";
import style from "./index.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link"

const Contact = ()=> {

  return (
    <section  className={style.root}  id="contact">
      {/* <h5>Contacts</h5>
      <h2>Contats Data</h2> */}

      <div className={`${style.container} ${style.contact__container}`}>
        <div className={style.contact__options}>
          <article className={style.contact__option}>
            <MdOutlineEmail className={style.contact__option_icon} />
            <h4>Email</h4>
            <h4>americanhospital@gmail.com</h4>
            <a className={style.message} href="mailto:info@oyren.dev" target="_blank" rel="noreferrer">
             Mesaj göndərin
            </a>
          </article>
   
          {/* <article className={style.contact__option}>
            <BsWhatsapp className={style.contact__option_icon} />
            <h4>WhatsApp</h4>
            <h5>+1234567890</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+23355733888"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article> */}
        </div>
        <form  className={style.form_container} action="">
          <input
          className={style.input}
            type={"text"}
            name={"name"}
            placeholder={"Ad və soyadınızı yazın"}
            required
          />
          <input
          className={style.input}
            type={"email"}
            name={"email"}
            placeholder={"Emailinizi yazın"}
            required
          />
          <textarea  className={style.textarea } name="message" rows={7}></textarea>
          <button type="submit" className="btn btn-primary">
            Mesaj göndərin
          </button>
          <Link href="/">
          <button type="submit" className="btn btn-primary">
            Əsas səhifəyə qayıt
          </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Contact;
