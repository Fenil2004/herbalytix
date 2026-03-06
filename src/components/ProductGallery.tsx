import { useState } from "react";
import herb1 from "@/assets/herb1.jpeg";
import herb2 from "@/assets/herb2.jpeg";
import herb3 from "@/assets/herb3.jpeg";
import herb4 from "@/assets/herb4.jpeg";
import herb5 from "@/assets/herb5.jpeg";
import herb6 from "@/assets/herb6.jpeg";
import herb8 from "@/assets/herb8.jpeg";
import herb9 from "@/assets/herb9.jpeg";
import herb10 from "@/assets/herb10.jpeg";
import herb11 from "@/assets/herb11.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const galleryImages = [
    { img: herb1, label: "Premium Feel" },
    { img: herb2, label: "Nature's Goodness" },
    { img: herb3, label: "Pure Extracts" },
    { img: herb4, label: "Hair Strength" },
    { img: herb5, label: "Scalp Care" },
    { img: herb6, label: "Healthy Shine" },
    { img: herb8, label: "Nourishing Blend" },
    { img: herb9, label: "Authentic Herbs" },
    { img: herb10, label: "Premium Care" },
    { img: herb11, label: "Pure Glow" },
];

const ProductGallery = () => {
    const ref = useScrollAnimation();
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? galleryImages.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === galleryImages.length - 1 ? 0 : c + 1));

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
        const wrappedDiff =
            absDiff > galleryImages.length / 2
                ? (galleryImages.length - absDiff) * -direction
                : diff;

        return {
            transform: `translateX(${wrappedDiff * 60}%) scale(0.75) rotateY(${wrappedDiff * -25}deg)`,
            zIndex: 10 - Math.abs(wrappedDiff),
            opacity: 0.6,
            filter: "brightness(0.7)",
        };
    };

    // return (
    //     <section id="gallery" className="py-24 bg-card overflow-hidden" ref={ref}>
    //         <div className="container mx-auto px-6 text-center">
    //             <div className="mb-16 space-y-4">
    //                 <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">Product Experience</p>
    //                 <h2 className="text-4xl md:text-5xl font-bold text-foreground">
    //                     Experience Herbalytix
    //                 </h2>
    //                 <p className="text-muted-foreground text-lg max-w-xl mx-auto">
    //                     Discover the beauty and purity of our herbal blend through these captured moments.
    //                 </p>
    //             </div>

    //             <div className="relative max-w-4xl mx-auto" style={{ perspective: "1200px" }}>
    //                 <div className="relative h-[450px] md:h-[550px] flex items-center justify-center">
    //                     {galleryImages.map((item, i) => (
    //                         <div
    //                             key={i}
    //                             onClick={() => setCurrent(i)}
    //                             className="absolute w-[70vw] sm:w-80 cursor-pointer"
    //                             style={{
    //                                 ...getStyle(i),
    //                                 transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    //                                 transformStyle: "preserve-3d",
    //                             }}
    //                         >
    //                             <div className="rounded-2xl overflow-hidden bg-background border border-border shadow-2xl">
    //                                 <div className="aspect-[3/4] overflow-hidden">
    //                                     <img
    //                                         src={item.img}
    //                                         alt={item.label}
    //                                         className="w-full h-full object-cover"
    //                                     />
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>

    //                 <button
    //                     onClick={prev}
    //                     className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/50 backdrop-blur-md border border-border shadow-lg flex items-center justify-center hover:bg-background transition-colors"
    //                     aria-label="Previous"
    //                 >
    //                     <ChevronLeft className="w-6 h-6 text-foreground" />
    //                 </button>
    //                 <button
    //                     onClick={next}
    //                     className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/50 backdrop-blur-md border border-border shadow-lg flex items-center justify-center hover:bg-background transition-colors"
    //                     aria-label="Next"
    //                 >
    //                     <ChevronRight className="w-6 h-6 text-foreground" />
    //                 </button>
    //             </div>
    //         </div>
    //     </section>
    // );
};

export default ProductGallery;
