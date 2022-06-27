import "./Contact.css";
import { useEffect } from "react";
import { Navbar } from "./../../components/Navbar/Navbar";
import { Footer } from "./../../components/Footer/Footer";
import { motion } from "framer-motion";

const textLeftVariants = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  hidden: { x: -200, opacity: 0 },
};
const textRightVariants = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  hidden: { x: 200, opacity: 0 },
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

      <main>
        <section className="contact">
          <h2>How can we help?</h2>
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

          <a href="mailto:innicrosscommerceandtradltd@gmail.com">
            <motion.button
              className="email_us"
              initial="hidden"
              whileInView="visible"
              variants={imgVariants}
            >
              Email us
            </motion.button>
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
};
