import { Leaf, Sparkles, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const highlights = [
  { icon: Leaf, title: "100% Natural", desc: "Pure herbal extracts" },
  { icon: Sparkles, title: "Ayurvedic Formula", desc: "Ancient wisdom" },
  { icon: Heart, title: "Gentle Care", desc: "For all hair types" },
];

const AboutSection = () => {
  const ref = useScrollAnimation();
  return (
    <section id="about" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Born from Nature, <br />Made for Your Hair
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our shampoo is enriched with the natural goodness of aloe vera and fenugreek, known for their protein-rich and nourishing properties. This powerful combination helps strengthen hair from root to tip, supports healthy hair growth, and improves overall hair texture. The gentle herbal formula cleanses the scalp while providing essential nutrients, leaving your hair soft, smooth, and naturally healthy.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="text-center p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
