import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FileText, Lock, Zap, Clock, Database, ArrowRight } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description: "Paperless prescriptions accessible anytime from your device",
    stat: "100%",
    statLabel: "Paperless",
    span: "col-span-1 row-span-1",
  },
  {
    icon: Lock,
    title: "Secure Patient Records",
    description: "End-to-end encrypted medical records for complete privacy",
    stat: "256-bit",
    statLabel: "Encryption",
    span: "col-span-1 row-span-2",
    featured: true,
  },
  {
    icon: Zap,
    title: "Efficient Management",
    description: "Streamlined patient flow for minimal waiting time",
    stat: "3x",
    statLabel: "Faster",
    span: "col-span-1 row-span-1",
  },
  {
    icon: Clock,
    title: "Faster Consultations",
    description: "Quick access to medical history speeds up every visit",
    stat: "< 5min",
    statLabel: "Avg. Wait",
    span: "col-span-1 row-span-1",
  },
  {
    icon: Database,
    title: "Medical History Tracking",
    description: "Complete longitudinal health records at your fingertips",
    stat: "∞",
    statLabel: "Records",
    span: "col-span-1 row-span-1",
  },
];

const AnimatedNumber = ({ value, isInView }: { value: string; isInView: boolean }) => {
  const numericMatch = value.match(/^(\d+)/);
  const motionVal = useMotionValue(0);
  const [displayed, setDisplayed] = useState(value);

  useEffect(() => {
    if (isInView && numericMatch) {
      const target = parseInt(numericMatch[1]);
      const controls = animate(motionVal, target, {
        duration: 1.8,
        ease: [0.32, 0.72, 0, 1],
        onUpdate: (v) => {
          setDisplayed(value.replace(numericMatch[1], Math.round(v).toString()));
        },
      });
      return controls.stop;
    }
  }, [isInView]);

  return <span>{displayed}</span>;
};

const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/30 blur-[100px]" />
      </div>

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Technology</span>
          <h2 className="section-title mt-3">
            Modern Digital <span className="gradient-text">Healthcare</span> Experience
          </h2>
          <p className="section-subtitle">
            Powered by Medichain smart clinic technology, we deliver a seamless and intelligent healthcare experience.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4">
          {features.map((f, i) => {
            const isFeatured = f.featured;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`
                  relative group rounded-3xl overflow-hidden cursor-default
                  ${isFeatured
                    ? "sm:row-span-2 bg-gradient-to-br from-primary via-primary to-primary/80"
                    : "bg-card border border-border/60"
                  }
                  transition-all duration-500 ease-out
                `}
                style={{
                  boxShadow: hoveredIdx === i
                    ? isFeatured
                      ? "0 20px 60px -12px hsl(210 80% 45% / 0.35)"
                      : "var(--shadow-card-hover)"
                    : isFeatured
                      ? "0 12px 40px -8px hsl(210 80% 45% / 0.25)"
                      : "var(--shadow-card)",
                }}
                whileHover={{ y: -6 }}
              >
                {/* Decorative corner glow */}
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl transition-opacity duration-500 ${
                    hoveredIdx === i ? "opacity-100" : "opacity-0"
                  } ${isFeatured ? "bg-primary-foreground/20" : "bg-primary/10"}`}
                />

                <div className={`relative h-full flex flex-col justify-between p-6 sm:p-7 ${isFeatured ? "text-primary-foreground" : ""}`}>
                  {/* Top: Icon + Title */}
                  <div>
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                        isFeatured
                          ? "bg-primary-foreground/20 backdrop-blur-sm"
                          : "gradient-primary"
                      }`}
                    >
                      <f.icon className={isFeatured ? "text-primary-foreground" : "text-primary-foreground"} size={20} />
                    </div>
                    <h3 className={`font-heading font-bold text-lg mb-1.5 ${isFeatured ? "text-primary-foreground" : "text-foreground"}`}>
                      {f.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isFeatured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                      {f.description}
                    </p>
                  </div>

                  {/* Bottom: Stat */}
                  <div className="flex items-end justify-between mt-4">
                    <div>
                      <span className={`text-3xl font-heading font-bold tracking-tight ${isFeatured ? "text-primary-foreground" : "text-primary"}`}>
                        <AnimatedNumber value={f.stat} isInView={isInView} />
                      </span>
                      <span className={`block text-xs font-medium mt-0.5 ${isFeatured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                        {f.statLabel}
                      </span>
                    </div>
                    <motion.div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isFeatured
                          ? "bg-primary-foreground/20 group-hover:bg-primary-foreground/30"
                          : "bg-primary/10 group-hover:bg-primary/20"
                      }`}
                      animate={hoveredIdx === i ? { x: 3 } : { x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight size={14} className={isFeatured ? "text-primary-foreground" : "text-primary"} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
