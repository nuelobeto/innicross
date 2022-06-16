import "./Marketing.css";
import { Navbar } from "./../../components/Navbar/Navbar";
import { Footer } from "./../../components/Footer/Footer";

export const Marketing = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <section>Markerting section 1</section>
        <section>Markerting section 2</section>
        <section>Markerting section 3</section>
        <section>Markerting section 4</section>
      </main>

      <Footer />
    </>
  );
};
