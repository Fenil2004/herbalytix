import shampooHero from "@/assets/herb7.jpeg";
import { ShoppingCart, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">
            Premium Herbal Care
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Nature's Secret <br className="hidden md:block" />
            <span className="text-primary">to Beautiful Hair</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed">
            To add protein for hair, our shampoo contains aloe vera and fenugreek. Crafted with ancient Ayurvedic herbs for hair that shines with health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="https://wa.me/918200969154?text=Hi%20I%20want%20to%20buy%20Herbalytix%20shampoo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-base hover:opacity-90 transition-opacity"
            >
              <ShoppingCart className="w-5 h-5" />
              Buy Now
            </a>
            <a
              href="https://wa.me/918200969154?text=Hi%20I%20want%20to%20buy%20Herbalytix%20shampoo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card text-foreground border border-border px-8 py-4 rounded-full font-medium text-base hover:bg-muted transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={shampooHero}
            alt="Herbalytix Premium Herbal Shampoo"
            className="w-full max-w-lg lg:max-w-xl animate-float drop-shadow-2xl rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
