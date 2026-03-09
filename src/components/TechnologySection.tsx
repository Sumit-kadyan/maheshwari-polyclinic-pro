import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Lock, Zap, Clock } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description: "Paperless prescriptions accessible from your device",
  },
  {
    icon: Lock,
    title: "Secure Patient Records",
    description: "End-to-end encrypted medical records for complete privacy",
  },
  {
    icon: Zap,
    title: "Efficient Management",
    description: "Streamlined patient flow for minimal waiting time",
  },
  {
    icon: Clock,
    title: "Faster Consultations",
    description: "Quick access to medical history speeds up every visit",
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
        background: "linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(210 60% 98%) 50%, hsl(0 0% 100%) 100%)",
      }}
    >
      <div className="max-w-[1160px] mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 sm:mb-24"
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent/60 px-4 py-1.5 rounded-full mb-5">
            Technology
          </span>
          <h2 className="section-title mt-3">
            Modern Digital{" "}
            <span className="gradient-text">Healthcare</span> Experience
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mt-5 leading-relaxed">
            Powered by Medichain smart clinic technology, we deliver a seamless
            and intelligent healthcare experience.
          </p>
        </motion.div>

        {/* Feature Rows */}
        <div className="flex flex-col gap-16 sm:gap-20">
          {features.map((f, i) => {
            const isReversed = i % 2 !== 0;

            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
                className={`group flex flex-col items-center gap-8 sm:gap-12 md:flex-row ${
                  isReversed ? "md:flex-row-reverse" : ""
                } rounded-3xl bg-card/70 backdrop-blur-sm p-8 sm:p-10 lg:p-14 transition-all duration-300 hover:-translate-y-1`}
                style={{ boxShadow: "0 2px 20px -6px hsl(210 80% 45% / 0.07)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 36px -8px hsl(210 80% 45% / 0.13)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 20px -6px hsl(210 80% 45% / 0.07)";
                }}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className="w-[76px] h-[76px] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(210 80% 95%), hsl(200 80% 92%))",
                    }}
                  >
                    <f.icon
                      className="text-primary"
                      size={32}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`text-center md:text-left ${
                    isReversed ? "md:text-right" : ""
                  } max-w-lg`}
                >
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2.5">
                    {f.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
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
