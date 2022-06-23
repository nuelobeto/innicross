import "./Contact.css";
import { useEffect } from "react";
import { Navbar } from "./../../components/Navbar/Navbar";
import { Footer } from "./../../components/Footer/Footer";
import { AiFillPhone, AiFillFacebook } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsTwitter } from "react-icons/bs";
import IgSvg from "../../images/igSvg.jpg";

const textLeftVariants = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  hidden: { x: -200, opacity: 0 },
};
const textRightVariants = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  hidden: { x: 200, opacity: 0 },
};
const titleVariants = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
  hidden: { y: -200, opacity: 0 },
};
const imgVariants = {
  visible: { scale: 1, transition: { duration: 0.5, delay: 1 } },
  hidden: { scale: 0 },
};

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
          <motion.h2
          // initial="hidden"
          // whileInView="visible"
          // variants={titleVariants}
          >
            How can we help?
          </motion.h2>
          <motion.p
            className="contact_text"
            initial="hidden"
            whileInView="visible"
            variants={textRightVariants}
          >
            We are always committed to providing you with the very best
            services.
          </motion.p>
          <motion.p
            className="contact_text"
            initial="hidden"
            whileInView="visible"
            variants={textLeftVariants}
          >
            Get in touch with us, send us an email anytime!
          </motion.p>
          <motion.button
            className="email_us"
            initial="hidden"
            whileInView="visible"
            variants={imgVariants}
          >
            Email us
          </motion.button>
          <div className="call">
            <p>Talk to our support team</p>
            <AiFillPhone />
          </div>
          {/* <div className="social_media">
            <AiFillFacebook style={{ color: "#4267B2" }} />
            <BsTwitter style={{ color: " #00acee" }} />
            <img src={IgSvg} alt="" className="ig" />
          </div> */}
        </section>
      </main>

      <Footer />
    </>
  );
};
