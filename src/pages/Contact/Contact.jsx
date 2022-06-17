import "./Contact.css";
import { useEffect } from "react";
import { Navbar } from "./../../components/Navbar/Navbar";
import { Footer } from "./../../components/Footer/Footer";
import { AiFillPhone, AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import IgSvg from "../../images/igSvg.svg";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main style={{ padding: "60px 0 0" }}>
        <section className="contact">
          <h2>How can we help?</h2>
          <p className="contact_text">
            We are always committed to providing you with the very best
            services.
          </p>
          <p className="contact_text">
            Get in touch with us, send us an email anytime!
          </p>
          <button className="email_us">Email us</button>
          <div className="call">
            <p>Talk to our support team</p>
            <AiFillPhone />
          </div>
          <div className="social_media">
            <AiFillFacebook style={{ color: "#4267B2" }} />
            <BsTwitter style={{ color: " #00acee" }} />
            <img src={IgSvg} alt="" className="ig" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
