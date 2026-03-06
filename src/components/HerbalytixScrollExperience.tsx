import React, { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, useSpring, motion, AnimatePresence } from "framer-motion";

const TOTAL_FRAMES = 196; // 0 to 195
const FRAME_PATH = "/sequence/frame_";
const FRAME_EXT = ".jpg";

const HerbalytixScrollExperience: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // 1. Scroll Tracking - Section Scoped
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // 2. Buttery Smooth Frame Transitions
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // 3. Frame Index Calculation
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    // Preloading Logic
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        const preloadImages = async () => {
            for (let i = 0; i < TOTAL_FRAMES; i++) {
                const img = new Image();
                img.src = `${FRAME_PATH}${i}${FRAME_EXT}`;
                img.onload = () => {
                    loadedCount++;
                    setLoadingProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
                    if (loadedCount === TOTAL_FRAMES) {
                        setIsLoaded(true);
                    }
                };
                loadedImages[i] = img;
            }
            setImages(loadedImages);
        };

        preloadImages();
    }, []);

    // 4. Canvas Rendering Logic
    useEffect(() => {
        if (!isLoaded || images.length === 0 || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;

        let animationFrameId: number;

        const render = () => {
            const currentFrame = Math.floor(frameIndex.get());
            const image = images[currentFrame];

            if (image && image.complete) {
                // Fully Responsive "Contain" Logic
                const canvasWidth = canvas.width;
                const canvasHeight = canvas.height;
                const imgWidth = image.naturalWidth;
                const imgHeight = image.naturalHeight;

                // Responsive Scaling: Larger on mobile (0.9), slightly smaller on desktop (0.75-0.85)
                const isMobile = window.innerWidth < 768;
                const scaleFactor = isMobile ? 1.0 : 0.85;

                const ratio = Math.min(canvasWidth / imgWidth, canvasHeight / imgHeight) * scaleFactor;
                const newWidth = imgWidth * ratio;
                const newHeight = imgHeight * ratio;
                const x = (canvasWidth - newWidth) / 2;
                const y = (canvasHeight - newHeight) / 2;

                context.fillStyle = "#d8d4c7";
                context.fillRect(0, 0, canvasWidth, canvasHeight);
                context.drawImage(image, x, y, newWidth, newHeight);
            }
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isLoaded, images, frameIndex]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 5. Story Beats Logic
    const beatAOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
    const beatAY = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [20, 0, 0, -20]);

    const beatBOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
    const beatBY = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [20, 0, 0, -20]);

    const beatCOpacity = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
    const beatCY = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [20, 0, 0, -20]);

    const beatDOpacity = useTransform(scrollYProgress, [0.75, 0.8, 0.9, 0.95], [0, 1, 1, 0]);
    const beatDY = useTransform(scrollYProgress, [0.75, 0.8, 0.9, 0.95], [20, 0, 0, -20]);

    const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-[400vh] bg-[#d8d4c7] selection:bg-primary/30"
        >
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#d8d4c7] text-black"
                    >
                        <div className="w-64 h-1 bg-black/10 rounded-full overflow-hidden mb-4">
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${loadingProgress}%` }}
                            />
                        </div>
                        <p className="font-mono text-sm tracking-widest uppercase opacity-60">
                            Loading Experience {loadingProgress}%
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-contain pointer-events-none"
                />

                {/* Story Beats Overlays */}
                <div className="absolute inset-0 z-10 pointer-events-none">

                    {/* ---------------- LEFT SIDE BEATS ---------------- */}

                    {/* Beat A */}
                    <motion.div
                        style={{ opacity: beatAOpacity, y: beatAY }}
                        className="absolute w-full md:w-auto px-6 md:px-0 left-0 md:left-[12%] top-[15%] md:top-1/2 md:-translate-y-1/2 max-w-full md:max-w-sm space-y-2 md:space-y-4 text-center md:text-left z-20"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black/90 tracking-tight leading-tight">
                            PURE BOTANICAL <br className="hidden md:block" /> POWER
                        </h2>
                        <p className="text-sm text-black/60 md:text-black/50 mx-auto md:mx-0 max-w-xs leading-relaxed">
                            Nature's finest ingredients, perfectly extracted for your hair.
                        </p>
                    </motion.div>

                    {/* Beat B */}
                    <motion.div
                        style={{ opacity: beatBOpacity, y: beatBY }}
                        className="absolute w-full md:w-auto px-6 md:px-0 left-0 md:left-[12%] top-[15%] md:top-1/2 md:-translate-y-1/2 max-w-full md:max-w-sm space-y-2 md:space-y-4 text-center md:text-left z-20"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black/90 tracking-tight leading-tight">
                            PRECISION <br className="hidden md:block" /> PUMP
                        </h2>
                        <p className="text-sm text-black/60 md:text-black/50 mx-auto md:mx-0 max-w-xs leading-relaxed">
                            Engineered for the perfect dose, every time.
                        </p>
                    </motion.div>


                    {/* ---------------- RIGHT SIDE BEATS ---------------- */}

                    {/* Beat C */}
                    <motion.div
                        style={{ opacity: beatCOpacity, y: beatCY }}
                        className="absolute w-full md:w-auto px-6 md:px-0 right-0 md:right-[12%] top-[70%] md:top-1/2 md:-translate-y-1/2 max-w-full md:max-w-sm space-y-2 md:space-y-4 text-center md:text-right z-20"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black/90 tracking-tight leading-tight">
                            NOURISHING <br className="hidden md:block" /> ESSENCE
                        </h2>
                        <p className="text-sm text-black/60 md:text-black/50 mx-auto md:ml-auto md:mr-0 max-w-xs leading-relaxed">
                            16 natural herbal extracts suspended in a rich, restorative formula.
                        </p>
                    </motion.div>

                    {/* Beat D */}
                    <motion.div
                        style={{ opacity: beatDOpacity, y: beatDY }}
                        className="absolute w-full md:w-auto px-6 md:px-0 right-0 md:right-[12%] top-[65%] md:top-1/2 md:-translate-y-1/2 max-w-full md:max-w-sm space-y-4 md:space-y-6 text-center md:text-right z-20"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black/90 tracking-tight uppercase italic leading-tight">
                            EXPERIENCE <br className="hidden md:block" /> HERBALYTIX
                        </h2>

                        <div className="flex flex-col items-center md:items-end gap-3 md:gap-4">
                            <p className="text-base text-black/70 md:text-black/60 max-w-xs leading-relaxed">
                                Elevate your daily ritual.
                            </p>

                            <a
                                href="https://wa.me/918200969154?text=Hi%20I%20want%20to%20buy%20Herbalytix%20shampoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pointer-events-auto bg-black text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-black/90 transition-colors uppercase tracking-widest"
                            >
                                Buy Now
                            </a>
                        </div>
                    </motion.div>


                    {/* ---------------- SCROLL HINT ---------------- */}

                    <motion.div
                        style={{ opacity: scrollHintOpacity }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-medium">
                            Scroll to Explore
                        </p>
                        <div className="w-px h-12 bg-gradient-to-b from-black/40 to-transparent" />
                    </motion.div>

                    {/* ---------------- BRANDING OVERLAY ---------------- */}

                    {/* Desktop Version: Luxury Premium Feel */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.6, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="hidden md:block absolute right-[8%] top-[83%] text-4xl md:text-5xl font-serif tracking-wide text-black/90 uppercase italic pointer-events-none"
                    >
                        Herbalytix
                    </motion.h1>

                    {/* Mobile Version: Centered Subtle Branding */}
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 0.4, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="md:hidden absolute left-1/2 -translate-x-1/2 bottom-[15%] text-2xl font-serif tracking-[0.2em] text-black/10 uppercase pointer-events-none"
                    >
                        Herbalytix
                    </motion.h1>

                </div>
            </div>
        </section>
    );
};

export default HerbalytixScrollExperience;
