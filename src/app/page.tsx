import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ImpactDashboard from "@/components/ImpactDashboard";
import HowItWorks from "@/components/HowItWorks";
import TraceabilitySection from "@/components/TraceabilitySection";
import ResearchSection from "@/components/ResearchSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CareersSection from "@/components/CareersSection";
import SignupSection from "@/components/SignupSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ProductsSection />
        <ImpactDashboard />
        <HowItWorks />
        <TraceabilitySection />
        <ResearchSection />
        <WhyChooseUs />
        <Testimonials />
        <CareersSection />
        <SignupSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
