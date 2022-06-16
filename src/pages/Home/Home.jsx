import "./Home.css";
import { Navbar } from "./../../components/Navbar/Navbar";
import { Footer } from "./../../components/Footer/Footer";
import logo3 from "../../images/Logo-Black-n-Blue.png";

export const Home = () => {
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
          <h1>Music. Talent. Business</h1>
        </section>

        <section className="about_section">About</section>
      </main>

      <Footer />
    </>
  );
};
