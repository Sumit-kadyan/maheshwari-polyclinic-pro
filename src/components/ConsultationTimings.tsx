import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Sunset, Video, Siren } from "lucide-react";

const ConsultationTimings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="timings"
      ref={ref}
      className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36"
      style={{
        background:
          "linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(210 60% 98%) 50%, hsl(0 0% 100%) 100%)",
      }}
    >
      <div className="max-w-[1160px] mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent/60 px-4 py-1.5 rounded-full mb-5">
            Timings
          </span>
          <h2 className="section-title mt-3">
            Consultation <span className="gradient-text">Hours</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            Clinic open <span className="font-semibold text-foreground">24 hours</span> — doctor consultation available during the slots below.
          </p>
        </motion.div>

        {/* Main Schedule Panels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-10"
        >
          {/* Morning */}
          <div
            className="group relative rounded-3xl bg-card/80 backdrop-blur-sm p-8 sm:p-10 lg:p-12 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
            style={{
              boxShadow: "0 2px 24px -6px hsl(210 80% 45% / 0.07)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 10px 40px -8px hsl(210 80% 45% / 0.14)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 2px 24px -6px hsl(210 80% 45% / 0.07)";
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, hsl(210 80% 95%), hsl(200 80% 92%))",
              }}
            >
              <Clock className="text-primary" size={28} strokeWidth={1.8} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
              Morning Consultation
            </span>
            <p className="text-3xl sm:text-4xl font-heading font-bold gradient-text tracking-tight">
              7:00 AM – 8:00 AM
            </p>
          </div>

          {/* Evening */}
          <div
            className="group relative rounded-3xl bg-card/80 backdrop-blur-sm p-8 sm:p-10 lg:p-12 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
            style={{
              boxShadow: "0 2px 24px -6px hsl(210 80% 45% / 0.07)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 10px 40px -8px hsl(210 80% 45% / 0.14)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 2px 24px -6px hsl(210 80% 45% / 0.07)";
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, hsl(210 80% 95%), hsl(200 80% 92%))",
              }}
            >
              <Sunset className="text-primary" size={28} strokeWidth={1.8} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
              Evening Consultation
            </span>
            <p className="text-3xl sm:text-4xl font-heading font-bold gradient-text tracking-tight">
              4:00 PM – 9:00 PM
            </p>
          </div>
        </motion.div>

        {/* Secondary Feature Panels */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid sm:grid-cols-2 gap-5 lg:gap-8"
        >
          {/* Online Consultation */}
          <div
            className="group flex items-center gap-5 rounded-2xl bg-card/70 backdrop-blur-sm p-6 sm:p-7 border border-accent/60 transition-all duration-300 hover:-translate-y-1"
            style={{
              boxShadow: "0 1px 16px -4px hsl(210 80% 45% / 0.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 6px 28px -6px hsl(210 80% 45% / 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 1px 16px -4px hsl(210 80% 45% / 0.05)";
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, hsl(210 80% 95%), hsl(200 80% 93%))",
              }}
            >
              <Video className="text-primary" size={22} strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-[15px] leading-snug">
                Online Consultation Available
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                Video calling for remote patients
              </p>
            </div>
          </div>

          {/* Emergency Service */}
          <div
            className="group flex items-center gap-5 rounded-2xl bg-card/70 backdrop-blur-sm p-6 sm:p-7 border border-secondary/15 transition-all duration-300 hover:-translate-y-1"
            style={{
              boxShadow: "0 1px 16px -4px hsl(0 65% 55% / 0.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 6px 28px -6px hsl(0 65% 55% / 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 1px 16px -4px hsl(0 65% 55% / 0.05)";
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, hsl(0 65% 96%), hsl(0 65% 93%))",
              }}
            >
              <Siren className="text-secondary" size={22} strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-[15px] leading-snug">
                24 Hour Emergency Service
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                Ambulance & hospital support
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationTimings;
