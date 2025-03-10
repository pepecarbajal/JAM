//App.jsx
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Planes from "./components/Planes";
import Projects from "./components/Projects";
import ServicesSection from "./components/ServicesSection";

export default function App() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <Projects />
      <Planes/>
      <ContactSection />
      <FooterSection />
    </>
  );
}
