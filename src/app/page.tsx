import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ImpactDashboard from "@/components/ImpactDashboard";
import HowItWorks from "@/components/HowItWorks";
import TraceabilitySection from "@/components/TraceabilitySection";
import ResearchSection from "@/components/ResearchSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CareersSection from "@/components/CareersSection";
import PartnersSection from "@/components/PartnersSection";
import SignupSection from "@/components/SignupSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <ProductsSection />
        <HowItWorks />
        <TraceabilitySection />
        <ImpactDashboard />
        <ResearchSection />
        <PartnersSection />
        <Testimonials />
        <CareersSection />
        <SignupSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
