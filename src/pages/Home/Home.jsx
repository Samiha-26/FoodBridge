import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Impact from "../../components/Impact/Impact";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Impact />
      <CTA />
    </>
  );
}

export default Home;