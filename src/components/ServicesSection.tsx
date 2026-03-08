import { motion, useInView, useAnimationFrame, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Stethoscope, HeartPulse, Siren, Video, ShieldCheck, Activity, type LucideIcon } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Physician Consultation",
    description: "Comprehensive primary healthcare and routine medical consultations for all ages.",
  },
  {
    icon: HeartPulse,
    title: "Critical Care Consultation",
    description: "Expert critical care management with internationally trained specialist oversight.",
  },
  {
    icon: Siren,
    title: "Emergency Care",
    description: "Round-the-clock emergency medical services with ambulance and hospital support.",
  },
  {
    icon: Video,
    title: "Online Video Consultation",
    description: "Convenient telemedicine consultations from the comfort of your home via video call.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Health Checkups",
    description: "Proactive health screening programs designed to detect and prevent early-stage diseases.",
  },
  {
    icon: Activity,
    title: "Chronic Disease Management",
    description: "Long-term care plans for diabetes, hypertension, and other chronic conditions.",
  },
];

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant: "prev" | "active" | "next";
}

const ServiceCard = ({ icon: Icon, title, description, variant }: ServiceCardProps) => {
  const isActive = variant === "active";

  return (
    <div
      className={`rounded-3xl bg-card border p-6 sm:p-8 flex items-start gap-5 transition-all duration-500 ${
        isActive
          ? "border-border/40 opacity-100 scale-100"
          : "border-border/20 opacity-35 scale-[0.92] pointer-events-none"
      }`}
      style={{
        boxShadow: isActive
          ? "0 8px 40px -8px hsl(var(--primary) / 0.12), 0 2px 8px -2px hsl(var(--primary) / 0.06)"
          : "0 2px 12px -4px hsl(var(--primary) / 0.04)",
      }}
    >
      <div
        className={`shrink-0 rounded-2xl flex items-center justify-center transition-all duration-500 ${
          isActive
            ? "w-14 h-14 bg-primary"
            : "w-11 h-11 bg-accent"
        }`}
      >
        <Icon
          className={`transition-colors duration-500 ${
            isActive ? "text-primary-foreground" : "text-primary"
          }`}
          size={isActive ? 24 : 18}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3
          className={`font-heading font-bold text-foreground transition-all duration-500 ${
            isActive ? "text-lg sm:text-xl mb-2" : "text-sm sm:text-base mb-1"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-muted-foreground leading-relaxed transition-all duration-500 ${
            isActive ? "text-sm sm:text-base" : "text-xs sm:text-sm line-clamp-2"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(0);

  const next = useCallback(() => {
    setDirection(1);
    setActive((p) => (p + 1) % services.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((p) => (p - 1 + services.length) % services.length);
  }, []);

  // Auto-advance every 3.5s
  useEffect(() => {
    if (!isInView || isHovered) return;
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, [isInView, isHovered, next]);

  const prevIdx = (active - 1 + services.length) % services.length;
  const nextIdx = (active + 1) % services.length;

  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.92,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    }),
  };

  return (
    <section id="services" className="section-padding bg-card" ref={sectionRef}>
      <div className="section-container">
        {/* Header + Content in 2-col layout */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Header + Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Our Services
            </span>
            <h2 className="section-title mt-3">
              Comprehensive <span className="gradient-text">Medical Care</span>
            </h2>
            <p className="section-subtitle !mx-0 !text-left mt-5">
              From routine consultations to critical care, we provide a full spectrum of medical services with a patient-first approach.
            </p>

            {/* Service counter */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-5xl font-bold text-primary">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground text-lg font-medium">
                  / {String(services.length).padStart(2, "0")}
                </span>
              </div>

              {/* Vertical progress dots */}
              <div className="flex flex-col gap-1.5">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > active ? 1 : -1);
                      setActive(i);
                    }}
                    className="group relative p-0.5"
                    aria-label={`Go to service ${i + 1}`}
                  >
                    <div
                      className={`rounded-full transition-all duration-500 ${
                        i === active
                          ? "w-2.5 h-2.5 bg-primary"
                          : "w-2 h-2 bg-primary/20 group-hover:bg-primary/40"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Vertical Carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex flex-col gap-4">
              {/* Previous Card */}
              <motion.div
                className="cursor-pointer"
                onClick={prev}
                key={`prev-${prevIdx}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 0.95, opacity: 0.5 }}
              >
                <ServiceCard
                  icon={services[prevIdx].icon}
                  title={services[prevIdx].title}
                  description={services[prevIdx].description}
                  variant="prev"
                />
              </motion.div>

              {/* Active Card */}
              <div className="relative" style={{ minHeight: 140 }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <ServiceCard
                      icon={services[active].icon}
                      title={services[active].title}
                      description={services[active].description}
                      variant="active"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Card */}
              <motion.div
                className="cursor-pointer"
                onClick={next}
                key={`next-${nextIdx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 0.95, opacity: 0.5 }}
              >
                <ServiceCard
                  icon={services[nextIdx].icon}
                  title={services[nextIdx].title}
                  description={services[nextIdx].description}
                  variant="next"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
