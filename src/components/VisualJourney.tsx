import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

import herb1 from "@/assets/herb1.jpeg";
import herb2 from "@/assets/herb2.jpeg";
import herb3 from "@/assets/herb3.jpeg";
import herb4 from "@/assets/herb4.jpeg";
import herb5 from "@/assets/herb5.jpeg";
import herb6 from "@/assets/herb6.jpeg";

const images = [
    { src: herb1, alt: "Herbal Essence" },
    { src: herb2, alt: "Natural Purity" },
    { src: herb3, alt: "Botanical Care" },
    { src: herb4, alt: "Strength & Shine" },
    { src: herb5, alt: "Scalp Wellness" },
    { src: herb6, alt: "Holistic Haircare" },
];

const VisualJourney = () => {
    const ref = useScrollAnimation();
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        skipSnaps: false
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section id="visual-journey" className="py-24 bg-background overflow-hidden" ref={ref}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">Product Experience</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif">
                        Experience Herbalytix
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Discover the beauty and purity of our herbal blend through these captured moments.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                        <div className="flex">
                            {images.map((img, index) => (
                                <div key={index} className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] min-w-0 pl-6 first:pl-0">
                                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border group">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                            <p className="text-white font-medium tracking-wide uppercase text-sm">{img.alt}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center hover:bg-white/20 transition-all text-foreground"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center hover:bg-white/20 transition-all text-foreground"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VisualJourney;
