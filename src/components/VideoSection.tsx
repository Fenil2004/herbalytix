import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const VideoSection = () => {
  const ref = useScrollAnimation();
  return (
    <section id="video" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">See It In Action</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Watch Our Story
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-border">
            <iframe
              src="https://www.youtube.com/embed/l20lX-5Jl6E"
              title="Product Demo Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            Replace VIDEO_ID with your actual YouTube video ID
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
