import { useState } from "react";
import shampooFront from "@/assets/herb7.jpeg";
import shampooBack from "@/assets/shampoo-back.jpg";
import ingredientsImg from "@/assets/ingred.jpeg";
import herby1 from "@/assets/herby_1.jpeg";
import herby2 from "@/assets/herby_2.jpeg";
import herby3 from "@/assets/herby_3.jpeg";
import iconApply from "@/assets/apply.png";
import iconMassage from "@/assets/massage.png";
import iconWait from "@/assets/wait.png";
import iconRinse from "@/assets/rinse.png";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const products = [
  { img: herby3, label: "Front View", link: "https://wa.me/918200969154?text=Hi%20I%20want%20to%20buy%20Herbalytix%20shampoo" },
  // { img: herby1, label: "Back View 1", link: "#" },
  { img: herby2, label: "Back View", link: "https://wa.me/918200969154?text=Hi%20I%20want%20to%20buy%20Herbalytix%20shampoo" },
  { img: ingredientsImg, label: "Key Ingredients", link: "https://wa.me/918200969154?text=Hi%20I%20want%20to%20buy%20Herbalytix%20shampoo" },
];

const ProductShowcase = () => {
  const ref = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? products.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === products.length - 1 ? 0 : c + 1));

  const getStyle = (index: number) => {
    const diff = index - current;
    const absDiff = Math.abs(diff);

    if (absDiff === 0) {
      return {
        transform: "translateX(0) scale(1) rotateY(0deg)",
        zIndex: 10,
        opacity: 1,
        filter: "brightness(1)",
      };
    }

    const direction = diff > 0 ? 1 : -1;
    // Handle wrap-around
    const wrappedDiff =
      absDiff > products.length / 2
        ? (products.length - absDiff) * -direction
        : diff;

    return {
      transform: `translateX(${wrappedDiff * 60}%) scale(0.75) rotateY(${wrappedDiff * -25}deg)`,
      zIndex: 10 - Math.abs(wrappedDiff),
      opacity: 0.6,
      filter: "brightness(0.7)",
    };
  };

  return (
    <section id="products" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">Our Product</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Herbalytix Premium Shampoo
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A luxurious blend of aloe vera, fenugreek, neem, and bhringraj to nourish and revitalize your hair.
          </p>
        </div>

        {/* Coverflow Carousel */}
        <div className="relative max-w-3xl mx-auto mb-12" style={{ perspective: "1200px" }}>
          <div className="relative h-[480px] md:h-[580px] flex items-center justify-center overflow-hidden">
            {products.map((p, i) => (
              <div
                key={p.label}
                onClick={() => setCurrent(i)}
                className="absolute w-[70vw] sm:w-80 cursor-pointer"
                style={{
                  ...getStyle(i),
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-xl">
                  <div className="aspect-[2/3] overflow-hidden bg-muted/10">
                    <img
                      src={p.img}
                      alt={p.label}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="p-4 text-center space-y-3">
                    <p className="text-sm text-muted-foreground font-medium">{p.label}</p>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center space-y-4 mb-24">
          <p className="text-3xl font-serif font-bold text-foreground">
            ₹499 <span className="text-lg text-muted-foreground line-through ml-2">₹799</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918200969154?text=Hi%20I%20want%20to%20buy%20Herbalytix%20shampoo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <ShoppingCart className="w-5 h-5" />
              Buy via WhatsApp
            </a>
          </div>
        </div>

        {/* Usage Directions Section */}
        <div className="max-w-4xl mx-auto border-t border-border pt-20">
          <div className="text-center mb-12 space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">How to Use</p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Usage Directions
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-40 h-40 flex items-center justify-center p-2">
                <img src={iconApply} alt="Apply" className="w-full h-full object-contain" />
              </div>
              <p className="font-semibold text-foreground">Apply</p>
              <p className="text-sm text-muted-foreground">Generously apply to wet hair, ensuring even coverage from root to tip.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-40 h-40 flex items-center justify-center p-2">
                <img src={iconMassage} alt="Massage" className="w-full h-full object-contain" />
              </div>
              <p className="font-semibold text-foreground">Massage</p>
              <p className="text-sm text-muted-foreground">Gently massage into the scalp using circular motions to stimulate and nourish.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-40 h-40 flex items-center justify-center p-2">
                <img src={iconWait} alt="Wait" className="w-full h-full object-contain" />
              </div>
              <p className="font-semibold text-foreground">Wait</p>
              <p className="text-sm text-muted-foreground">Leave on for 1-2 minutes to allow the potent herbal extracts to deeply penetrate.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-40 h-40 flex items-center justify-center p-2">
                <img src={iconRinse} alt="Rinse" className="w-full h-full object-contain" />
              </div>
              <p className="font-semibold text-foreground">Rinse</p>
              <p className="text-sm text-muted-foreground">Rinse thoroughly until water runs clear, revealing softer, healthier hair.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
