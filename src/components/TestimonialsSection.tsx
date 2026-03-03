import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "My hair fall has reduced by 80% in just 3 weeks! The herbal fragrance is absolutely divine. Best shampoo I've ever used.",
  },
  {
    name: "Ankit Verma",
    rating: 5,
    text: "Finally, a chemical-free shampoo that actually works. My dandruff is completely gone and my hair feels so much thicker.",
  },
  {
    name: "Sneha Patel",
    rating: 4,
    text: "Love the natural ingredients and how soft my hair feels after every wash. The packaging is beautiful too!",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollAnimation();
  return (
    <section className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < t.rating ? "text-gold fill-gold" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
              <p className="font-semibold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
