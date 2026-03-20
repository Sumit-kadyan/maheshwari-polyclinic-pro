import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, Globe, Star, Quote } from "lucide-react";
import video from "@/assets/maheshwari.webm";

const ForeignTestimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
  
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      className="section-padding bg-gradient-to-b from-background via-accent/20 to-background overflow-hidden"
      ref={ref}
    >
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Video Area */}
            <motion.div
              className="relative rounded-2xl overflow-hidden bg-foreground/5 border border-border/40 aspect-[9/14] sm:aspect-[9/16] max-w-[320px] mx-auto lg:mx-0 w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{
                boxShadow:
                  "0 20px 60px -12px hsl(var(--primary) / 0.12), 0 8px 24px -8px hsl(var(--primary) / 0.08)",
              }}
            >

              <div className="relative w-full h-full group">
                {/* Video */}
                  <video
                    ref={videoRef}
                    src={video}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    playsInline
                    preload="metadata"
                  />

                {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                {/* Play Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <button
                      onClick={togglePlay}
                      className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
                    >
                    <Play className="text-black ml-1" size={28} />
                    </button>
                  </div>
                )}

                {/* Pause Button */}
                {isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  >
                  <Pause className="text-white" size={16} />
                  </button>
                )}
              </div>

              {/* Globe badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border/40 shadow-sm">
                <Globe size={13} className="text-primary" />
                <span className="text-[11px] font-semibold text-foreground">
                  International Patient
                </span>
              </div>
            </motion.div>
            {/* Text Content */}
            <motion.div
              className="flex flex-col gap-5"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent/60 px-4 py-1.5 rounded-full">
                  Global Trust
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-heading text-foreground">
                Trusted by Patients{" "}
                <span className="gradient-text">Across Borders</span>
              </h3>
              <div className="relative pl-5 border-l-2 border-primary/30">
                <Quote
                  size={18}
                  className="absolute -left-[11px] -top-1 text-primary/40 bg-background"
                />
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-light italic">
                  "I must say, Dr. Munish I think is the best doctor in at least Jaipur but I think India."
                </p>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                  G
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">
                    Guest from Italy
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForeignTestimonial;
