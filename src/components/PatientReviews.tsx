import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const reviews = [
  { name: "Rajesh K.", location: "Gopalpura, Jaipur", text: "Exceptional care and attention to detail. Dr. Maheshwari is truly one of the best physicians in Jaipur. Highly recommended!", avatar: "RK" },
  { name: "Priya S.", location: "Triveni Nagar, Jaipur", text: "The clinic is modern and well-equipped. I was impressed by the digital prescription system and the overall professionalism.", avatar: "PS" },
  { name: "Anil M.", location: "Malviya Nagar, Jaipur", text: "Dr. Maheshwari's expertise in critical care saved my father's life. We are forever grateful for his dedication and skill.", avatar: "AM" },
  { name: "Sunita D.", location: "Vaishali Nagar, Jaipur", text: "Very clean and organized clinic. The online video consultation feature is extremely convenient. Great experience overall.", avatar: "SD" },
  { name: "Vikram T.", location: "Mansarovar, Jaipur", text: "Best polyclinic near Gopalpura. The staff is courteous and the doctor takes time to explain everything thoroughly.", avatar: "VT" },
  { name: "Meena R.", location: "C-Scheme, Jaipur", text: "I've been consulting Dr. Maheshwari for chronic disease management. His treatment plans are effective and well-thought-out.", avatar: "MR" },
];

const ReviewCard = ({
  review,
  variant,
}: {
  review: (typeof reviews)[0];
  variant: "prev" | "active" | "next";
}) => {
  const isActive = variant === "active";
  return (
    <div
      className={`rounded-3xl bg-card border p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ${
        isActive
          ? "border-border/40 opacity-100 scale-100"
          : "border-border/20 opacity-40 scale-[0.88] pointer-events-none"
      }`}
      style={{
        boxShadow: isActive
          ? "0 8px 40px -8px hsl(var(--primary) / 0.12), 0 2px 8px -2px hsl(var(--primary) / 0.06)"
          : "0 4px 20px -6px hsl(var(--primary) / 0.05)",
        minHeight: isActive ? 300 : 260,
      }}
    >
      {/* Quote icon */}
      <div className="absolute top-5 right-6 sm:top-7 sm:right-8">
        <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
          <Quote size={18} className="text-primary/30" />
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Review text */}
      <p
        className={`leading-relaxed font-light flex-1 ${
          isActive
            ? "text-foreground/85 text-base sm:text-lg"
            : "text-muted-foreground text-sm sm:text-base line-clamp-3"
        }`}
      >
        "{review.text}"
      </p>

      {/* Reviewer info */}
      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border/40">
        <div
          className={`rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold tracking-wide ${
            isActive ? "w-11 h-11 text-sm" : "w-9 h-9 text-xs"
          }`}
        >
          {review.avatar}
        </div>
        <div>
          <p className={`font-heading font-semibold text-foreground ${isActive ? "text-sm" : "text-xs"}`}>
            {review.name}
          </p>
          <p className={`text-muted-foreground ${isActive ? "text-xs" : "text-[11px]"}`}>
            {review.location}
          </p>
        </div>
      </div>
    </div>
  );
};

const PatientReviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setActive((p) => (p + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((p) => (p - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const prevIdx = (active - 1 + reviews.length) % reviews.length;
  const nextIdx = (active + 1) % reviews.length;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    }),
  };

  return (
    <section
      id="reviews"
      className="section-padding bg-gradient-to-b from-background via-accent/30 to-background overflow-hidden"
      ref={ref}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent/60 px-4 py-1.5 rounded-full mb-5">
            Patient Stories
          </span>
          <h2 className="section-title mt-3">
            Patient <span className="gradient-text">Reviews</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-0.5 bg-accent/60 px-4 py-2 rounded-full border border-primary/10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="font-heading font-bold text-foreground ml-2 text-lg">5.0</span>
            </div>
            <span className="text-muted-foreground text-sm font-medium">from 239+ Google Reviews</span>
          </div>
        </motion.div>

        {/* 3-Card Carousel */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Navigation Buttons - Large, flanking the cards */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-border bg-card/90 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            aria-label="Previous review"
          >
            <ArrowLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-border bg-card/90 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            aria-label="Next review"
          >
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          {/* Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-4 sm:gap-6 items-center px-10 sm:px-16">
            {/* Previous Card - hidden on mobile */}
            <motion.div
              className="hidden lg:block relative cursor-pointer"
              onClick={prev}
              key={`prev-${prevIdx}`}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 0.92, opacity: 0.55 }}
            >
              <ReviewCard review={reviews[prevIdx]} variant="prev" />
            </motion.div>

            {/* Active Card */}
            <div className="relative" style={{ minHeight: 320 }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative"
                >
                  <ReviewCard review={reviews[active]} variant="active" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Card - hidden on mobile */}
            <motion.div
              className="hidden lg:block relative cursor-pointer"
              onClick={next}
              key={`next-${nextIdx}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 0.92, opacity: 0.55 }}
            >
              <ReviewCard review={reviews[nextIdx]} variant="next" />
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > active ? 1 : -1);
                  setActive(i);
                }}
                className="group relative p-1"
                aria-label={`Go to review ${i + 1}`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === active
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/20 group-hover:bg-primary/40"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PatientReviews;
