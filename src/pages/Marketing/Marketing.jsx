import "./Marketing.css";
import { useState, useEffect } from "react";
import { Navbar } from "./../../components/Navbar/Navbar";
import { Footer } from "./../../components/Footer/Footer";
import img from "../../images/images.png";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textLeftVariants = {
  visible: { x: 0, transition: { duration: 0.5, delay: 1 } },
  hidden: { x: "-100rem" },
};
const textRightVariants = {
  visible: { x: 0, transition: { duration: 0.5, delay: 1 } },
  hidden: { x: "100rem" },
};
// const h1Variants = {
//   visible: { y: 0, transition: { duration: 0.5, delay: 1.5 } },
//   hidden: { y: "10rem" },
// };
const titleVariants = {
  visible: { y: 0, transition: { duration: 0.5, delay: 0.5 } },
  hidden: { y: "-4rem" },
};
const imgVariants = {
  visible: { scale: 1, transition: { duration: 0.5, delay: 1 } },
  hidden: { scale: 0 },
};

export const Marketing = () => {
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

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

      <motion.main ref={ref} style={{ padding: "60px 0 0" }}>
        <section className="marketing one">
          <div className="marketing_content_box first">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={imgVariants}
              className="marketing_image"
              style={{
                margin: `${viewportWidth > 768 ? "0 50px 0 0" : "2rem 0 0"}`,
              }}
            >
              <img src={img} alt="" />
            </motion.div>
            <div className="marketing_text">
              <motion.h3
                initial="hidden"
                animate={controls}
                variants={titleVariants}
              >
                Marketing:
              </motion.h3>
              <motion.p
                initial="hidden"
                animate={controls}
                variants={textRightVariants}
              >
                Marketing and sales is very different from promotion and
                advertisement in the creative space just as every other
                business. We deploy marketing and PR campaigns that drive real
                time conversions on digital music platforms for Talents and
                Entities whose target audience are music lovers. We deploy
                marketing campaigns via several platforms which targets both
                local and international audience using several technology
                platforms that identifies target audience.
              </motion.p>
            </div>
          </div>
        </section>
        <section className="marketing two">
          <div className="marketing_content_box second">
            <div
              className="marketing_text"
              style={{
                margin: `${viewportWidth > 768 ? "0 50px 0 0" : "0 0 2rem"}`,
              }}
            >
              <motion.h3
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={titleVariants}
              >
                Market Operations:{" "}
              </motion.h3>
              <motion.p
                initial="hidden"
                animate={controls}
                variants={textLeftVariants}
              >
                Africa is a very unique continent with 54 markets. Each market
                has its own unique culture which directs its creative space. We
                provide services that enable music businesses and/or businesses
                who intend to use music and talent to navigate the African
                market by providing a wide range of services through our
                partners across company registration and market compliance,
                staffing and recruiting, music licensing and copyright
                administration, royalties administration, Talent partnership and
                development, and campaign management.
              </motion.p>
            </div>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={imgVariants}
              className="marketing_image"
            >
              <img src={img} alt="" />
            </motion.div>
          </div>
        </section>
        <section className="marketing three">
          <div className="marketing_content_box third">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={imgVariants}
              className="marketing_image"
              style={{
                margin: `${viewportWidth > 768 ? "0 50px 0 0" : "2rem 0 0"}`,
              }}
            >
              <img src={img} alt="" />
            </motion.div>
            <div className="marketing_text">
              <motion.h3>Revenue Stream Development:</motion.h3>
              <motion.p
                initial="hidden"
                animate={controls}
                variants={textRightVariants}
              >
                Intellectual Property can be monetized in several ways. We
                believe that intellectual property monetization is an infinite
                possibility. Understanding this puts us at the forefront of
                managing trademarks, Patent and copyright works in the African
                Market space. We work with seasoned catalog managers, brand
                developers, lawyers, royalties accountant and other Intellectual
                property professionals in delivering the goals commitment made
                to our clients.
              </motion.p>
            </div>
          </div>
        </section>
        <section className="marketing four">
          <div className="marketing_content_box fourth">
            <div
              className="marketing_text"
              style={{
                margin: `${viewportWidth > 768 ? "0 50px 0 0" : "0 0 2rem"}`,
              }}
            >
              <motion.h3
                initial="hidden"
                animate={controls}
                variants={titleVariants}
              >
                Investment Management:{" "}
              </motion.h3>
              <motion.p
                initial="hidden"
                animate={controls}
                variants={textLeftVariants}
              >
                Financing creative industries businesses in Africa can be
                challenging. Our years of experience in Sub-Saharan Africa
                powering creative businesses via partnership and funding has
                given us wealth of experience in managing music, film, and
                gaming investments. We manage investor relationships for
                creative businesses and also provide services that help creative
                businesses manage the funds raised in order to achieve the goals
                promised to investors.
              </motion.p>
            </div>
            <motion.div
              className="marketing_image"
              initial="hidden"
              animate={controls}
              variants={imgVariants}
            >
              <img src={img} alt="" />
            </motion.div>
          </div>
        </section>
      </motion.main>

      <Footer />
    </>
  );
};
