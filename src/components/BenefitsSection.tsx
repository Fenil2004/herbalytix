import { ShieldCheck, Droplets, Wind, Leaf } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  {
    icon: Leaf,
    title: "Protein Boost",
    desc: "Enriched with Aloe Vera and Fenugreek to add essential protein for hair strength.",
  },
  {
    icon: ShieldCheck,
    title: "Dandruff Control",
    desc: "Contains Neem and Bhringraj, powerful herbs known to effectively reduce dandruff.",
  },
  {
    icon: Droplets,
    title: "Root Strength",
    desc: "Nourishes the scalp and strengthens hair from root to tip.",
  },
  {
    icon: Wind,
    title: "Natural Texture",
    desc: "Improves overall hair texture, leaving it soft, smooth, and naturally healthy.",
  },
];

const BenefitsSection = () => {
  const ref = useScrollAnimation();
  return (
    <section id="benefits" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Benefits You'll Love
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="text-center p-8 rounded-2xl bg-background border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <b.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
