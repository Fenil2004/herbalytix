import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HerbalytixScrollExperience from "@/components/HerbalytixScrollExperience";
import AboutSection from "@/components/AboutSection";
import ProductShowcase from "@/components/ProductShowcase";
import ProductGallery from "@/components/ProductGallery";
import BenefitsSection from "@/components/BenefitsSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HerbalytixScrollExperience />
      <AboutSection />
      <ProductShowcase />
      <ProductGallery />
      <BenefitsSection />
      <VideoSection />
      <TestimonialsSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;
