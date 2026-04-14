import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeviceMockups from "./components/DeviceMockups";
import DemoVideo from "./components/DemoVideo";
import HowItWorks from "./components/HowItWorks";
import Story from "./components/Story";
import WhoItsFor from "./components/WhoItsFor";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DeviceMockups />
      <DemoVideo />
      <HowItWorks />
      <Story />
      <WhoItsFor />
      <Team />
      <CTA />
      <Footer />
    </>
  );
}
