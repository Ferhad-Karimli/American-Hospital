import React from "react";
import style from "./index.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section  className={style.root}  id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={`${style.container} ${style.contact__container}`}>
        <div className={style.contact__options}>
          <article className={style.contact__option}>
            <MdOutlineEmail className={style.contact__option_icon} />
            <h4>Email</h4>
            <h5>info@oyren.dev</h5>
            <a href="mailto:info@oyren.dev" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>
          <article className={style.contact__option}>
            <RiMessengerLine className={style.contact__option_icon} />
            <h4>Messenger</h4>
            <h5>Oyren Dev</h5>
            <a href="https://m.me/oyren.dev" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>
          <article className={style.contact__option}>
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
          </article>
        </div>
        <form  className={style.form_container} action="">
          <input
          className={style.input}
            type={"text"}
            name={"name"}
            placeholder={"Your Full Name"}
            required
          />
          <input
          className={style.input}
            type={"email"}
            name={"email"}
            placeholder={"Your Email"}
            required
          />
          <textarea  className={style.textarea } name="message" rows={7}></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
