import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustIndicators from "@/components/TrustIndicators";
import AboutDoctor from "@/components/AboutDoctor";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";
import PatientReviews from "@/components/PatientReviews";
import ClinicGallery from "@/components/ClinicGallery";
import ConsultationTimings from "@/components/ConsultationTimings";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustIndicators />
      <AboutDoctor />
      <ServicesSection />
      <TechnologySection />
      <PatientReviews />
      <ClinicGallery />
      <ConsultationTimings />
      <LocationSection />
      <ContactSection />
      <FloatingButtons />
      <Footer />
    </main>
  );
};

export default Index;
