import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import CertificationsSection from '../components/CertificationsSection';
import ProjectsSection from '../components/ProjectsSection';
import SandboxSection from '../components/SandboxSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import PageTransition from '../components/PageTransition';
import SpotifyWidget from '../components/SpotifyWidget';

export default function App() {
  return (
    <PageTransition>
      <div className="w-full min-h-screen overflow-x-hidden relative">
        <SpotifyWidget />
        <ScrollProgress />
        <Navbar />
        <main>
          <SandboxSection />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <CertificationsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}