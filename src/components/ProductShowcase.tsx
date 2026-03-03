import { useState } from "react";
import shampooFront from "@/assets/herb7.jpeg";
import shampooBack from "@/assets/shampoo-back.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const products = [
  { img: shampooFront, label: "Front View", link: "#" },
  { img: shampooBack, label: "Back View", link: "#" },
  { img: ingredientsImg, label: "Key Ingredients", link: "#" },
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
          <div className="relative h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden">
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
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center space-y-3">
                    <p className="text-sm text-muted-foreground font-medium">{p.label}</p>
                    <a
                      href={p.link}
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

        <div className="text-center space-y-4">
          <p className="text-3xl font-serif font-bold text-foreground">
            ₹499 <span className="text-lg text-muted-foreground line-through ml-2">₹799</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <ShoppingCart className="w-5 h-5" />
              Buy on Amazon
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Buy on Flipkart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
