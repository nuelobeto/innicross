import "./Home.css";
import { useEffect } from "react";
import { Navbar } from "./../../components/Navbar/Navbar";
import { Footer } from "./../../components/Footer/Footer";
import logo3 from "../../images/Logo-Black-n-Blue.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const h1Variants = {
  visible: { x: 0, transition: { type: "string", duration: 0.5, delay: 0.5 } },
  hidden: { x: "-100vw" },
};
const imgVariants = {
  visible: { scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  hidden: { scale: 0 },
};
const textVariants = {
  visible: { x: 0, transition: { duration: 0.5, delay: 0.3 } },
  hidden: { x: 1000 },
};
const buttonVariants = {
  visible: { scale: 1, transition: { duration: 0.5, delay: 0.8 } },
  hidden: { scale: 0 },
};

export const Home = () => {
  const navigate = useNavigate();

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="home">
        <section ref={ref} className="hero_section">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={imgVariants}
            className="hero_image"
          >
            <img src={logo3} alt="" />
          </motion.div>
          <motion.h1 variants={h1Variants} initial="hidden" animate={controls}>
            Music. Talent. Business.
          </motion.h1>
        </section>

        <section className="about_section">
          <motion.h2
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            About Us
          </motion.h2>
          <motion.p
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Innicross is a Limited Liability entity that provides market and
            audience strategy for businesses who seek to use music and talent
            for campaigns, projects and/or market penetration in Africa.
          </motion.p>

          <motion.button
            onClick={() => navigate("/marketing")}
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Marketing <MdOutlineArrowForwardIos />
          </motion.button>
        </section>
      </main>

      <Footer />
    </>
  );
};
