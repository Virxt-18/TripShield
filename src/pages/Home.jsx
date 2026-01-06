
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Work from "../components/Work";
import Cta from "../components/CTA";
import Footer from "../components/Footer";
import Loading from "./Loading"


const Home = () => {

  return (
    <>
      <Loading />
      <div className="min-h-screen min-w-screen overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Features />
          <Work />
          <Cta />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
