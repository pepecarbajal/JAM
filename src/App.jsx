//App.jsx
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import ServicesSection from "./components/ServicesSection";

export default function App() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <Projects />
      <ContactSection />
      <FooterSection />
    </>
  );
}
