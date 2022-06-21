import "./Marketing.css";
import { useState, useEffect } from "react";
import { Navbar } from "./../../components/Navbar/Navbar";
import { Footer } from "./../../components/Footer/Footer";
import img from "../../images/images.png";

import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

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

  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  // }, [controls, inView]);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main style={{ padding: "60px 0 0" }}>
        <section className="marketing one">
          <div className="marketing_content_box first">
            <motion.div
              initial="hidden"
              whileInView="visible"
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
                whileInView="visible"
                variants={titleVariants}
              >
                Marketing:
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="visible"
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
          <motion.div className="marketing_content_box second">
            <div
              className="marketing_text"
              style={{
                margin: `${viewportWidth > 768 ? "0 50px 0 0" : "0 0 2rem"}`,
              }}
            >
              <motion.h3
                initial="hidden"
                whileInView="visible"
                variants={titleVariants}
              >
                Market Operations:{" "}
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="visible"
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
              whileInView="visible"
              variants={imgVariants}
              className="marketing_image"
            >
              <img src={img} alt="" />
            </motion.div>
          </motion.div>
        </section>
        <section className="marketing three">
          <div className="marketing_content_box third">
            <motion.div
              initial="hidden"
              whileInView="visible"
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
                whileInView="visible"
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
                whileInView="visible"
                variants={titleVariants}
              >
                Investment Management:{" "}
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="visible"
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
              whileInView="visible"
              variants={imgVariants}
            >
              <img src={img} alt="" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
