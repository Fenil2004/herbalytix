import { ShieldCheck, Droplets, Wind, Leaf, Sparkles, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  {
    icon: Wind,
    title: "Strengthens Roots",
    desc: "Enriched with powerful botanicals to fortify your hair from the very foundation.",
  },
  {
    icon: ShieldCheck,
    title: "Reduces Hair Fall",
    desc: "Natural ingredients work together to minimize breakage and excessive hair loss.",
  },
  {
    icon: Sparkles,
    title: "Adds Natural Shine",
    desc: "Restores your hair's inherent luster, leaving it vibrant, soft, and glossy.",
  },
  {
    icon: Heart,
    title: "Promotes Scalp Health",
    desc: "Nourishes the scalp to prevent flakes, dryness, and common irritations.",
  },
  {
    icon: Droplets,
    title: "Gentle Cleansing",
    desc: "Effectively purifies hair and scalp without stripping away essential moisture.",
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
            Claims & Benefits
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-8 flex flex-col items-center rounded-2xl bg-background border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
