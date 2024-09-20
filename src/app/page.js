import AboutSection from "./components/sections/AboutSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </>
  );
}
