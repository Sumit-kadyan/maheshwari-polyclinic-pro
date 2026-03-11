import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Lock, Zap, Clock } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description: "Paperless prescriptions accessible from your device",
    accent: "210 80% 45%",
    accentLight: "210 80% 95%",
  },
  {
    icon: Lock,
    title: "Secure Patient Records",
    description: "End-to-end encrypted medical records for complete privacy and safety",
    accent: "200 75% 42%",
    accentLight: "200 75% 94%",
  },
  {
    icon: Zap,
    title: "Efficient Management",
    description: "Streamlined patient flow ensuring minimal waiting time at the clinic",
    accent: "220 70% 50%",
    accentLight: "220 70% 94%",
  },
  {
    icon: Clock,
    title: "Faster Consultations",
    description: "Quick access to medical history speeds up every visit significantly",
    accent: "195 80% 40%",
    accentLight: "195 80% 93%",
  },
];

const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36"
      style={{
        background:"linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(210 60% 98%) 50%, hsl(0 0% 100%) 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-20 left-1/4 w-72 h-72 rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: "hsl(210 80% 45%)" }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full opacity-[0.03] blur-3xl pointer-events-none"
        style={{ background: "hsl(200 80% 45%)" }}
      />
      <div className="max-w-[1160px] mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent/60 px-4 py-1.5 rounded-full mb-5">
            Technology
          </span>
          <h2 className="section-title mt-3">
            Modern Digital{" "}
            <span className="gradient-text">Hi-tech</span> Clinic
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mt-5 leading-relaxed">
            Powered by Medichain smart clinic technology, we deliver a seamless
            and intelligent healthcare experience.
          </p>
        </motion.div>

        {/* Vertical Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
              className="group relative flex flex-col items-center text-center rounded-3xl bg-card backdrop-blur-sm border border-border/50 p-7 sm:p-8 min-h-[340px] sm:min-h-[380px] transition-all duration-500 hover:-translate-y-2 cursor-default overflow-hidden"
              style={{
                boxShadow: "0 4px 24px -6px hsl(210 80% 45% / 0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  `0 20px 50px -12px hsl(${f.accent} / 0.18)`;
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  `hsl(${f.accent} / 0.2)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 24px -6px hsl(210 80% 45% / 0.08)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "";
              }}
            >
              {/* Top decorative gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, hsl(${f.accent}), hsl(${f.accent} / 0.4))`,
                }}
              />

            {/* Background glow on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, hsl(${f.accentLight}) 0%, transparent 70%)`,
                }}
                />
            {/* Numbering */}
            <span
              className="relative font-heading text-[56px] sm:text-[64px] font-bold leading-none opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500 mb-2"
              style={{ color: `hsl(${f.accent})` }}
            >
              0{i + 1}
              </span>
              {/* Icon */}
              <div className="relative mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `linear-gradient(135deg, hsl(${f.accentLight}), hsl(${f.accentLight} / 0.6))`,
                  }}
                >
                  <f.icon
                    className="transition-colors duration-300"
                    style={{ color: `hsl(${f.accent})` }}
                    size={28}
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              {/* Text */}
              <div className="relative flex flex-col flex-1 justify-start">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-3">
                  {f.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
              {/* Bottom decorative dot */}
              <div
                className="relative mt-6 w-8 h-1 rounded-full opacity-30 group-hover:opacity-60 group-hover:w-12 transition-all duration-500"
                style={{ background: `hsl(${f.accent})` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
