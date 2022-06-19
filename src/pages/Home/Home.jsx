import "./Home.css";
import { useEffect } from "react";
import { Navbar } from "./../../components/Navbar/Navbar";
import { Footer } from "./../../components/Footer/Footer";
import logo3 from "../../images/Logo-Black-n-Blue.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
  visible: { x: 0, transition: { duration: 0.5, delay: 0.5 } },
  hidden: { x: "-100rem" },
};
const h1Variants = {
  visible: { y: 0, transition: { duration: 0.5, delay: 1.5 } },
  hidden: { y: "10rem" },
};
const titleVariants = {
  visible: { y: 0, transition: { duration: 0.5, delay: 0.1 } },
  hidden: { y: "-4rem" },
};
const imgVariants = {
  visible: { scale: 1, transition: { duration: 0.5, delay: 1 } },
  hidden: { scale: 0 },
};

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <main ref={ref} className="home">
        <section className="hero_section">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={imgVariants}
            className="hero_image"
          >
            <img src={logo3} alt="" />
          </motion.div>
          <motion.h1 initial="hidden" animate={controls} variants={h1Variants}>
            Music. Talent. Business
          </motion.h1>
        </section>

        <motion.section className="about_section">
          <motion.h2
            initial="hidden"
            animate={controls}
            variants={titleVariants}
          >
            About Us
          </motion.h2>
          <motion.p initial="hidden" animate={controls} variants={textVariants}>
            Innicross Commerce and Trade Limited is an entity that provides
            market and audience strategy for businesses who seek to use music
            and talent for campaigns, projects and/or market penetration in
            Africa.
          </motion.p>
          <button onClick={() => navigate("/marketing")}>
            Marketing <MdOutlineArrowForwardIos />
          </button>
        </motion.section>
      </main>

      <Footer />
    </>
  );
};
