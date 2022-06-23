import "./Home.css";
import { useEffect } from "react";
import { Navbar } from "./../../components/Navbar/Navbar";
import { Footer } from "./../../components/Footer/Footer";
import logo3 from "../../images/Logo-Black-n-Blue.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="home">
        <section className="hero_section">
          <div className="hero_image">
            <img src={logo3} alt="" />
          </div>
          <h1>Music. Talent. Business.</h1>
        </section>

        <section className="about_section">
          <h2>About Us</h2>
          <p>
            Innicross Commerce and Trade Limited is an entity that provides
            market and audience strategy for businesses who seek to use music
            and talent for campaigns, projects and/or market penetration in
            Africa.
          </p>
          <button onClick={() => navigate("/marketing")}>
            Marketing <MdOutlineArrowForwardIos />
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
};
