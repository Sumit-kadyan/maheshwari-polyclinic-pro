import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  { name: "Rajesh K.", location: "Gopalpura, Jaipur", text: "Exceptional care and attention to detail. Dr. Maheshwari is truly one of the best physicians in Jaipur. Highly recommended!", avatar: "RK" },
  { name: "Priya S.", location: "Triveni Nagar, Jaipur", text: "The clinic is modern and well-equipped. I was impressed by the digital prescription system and the overall professionalism.", avatar: "PS" },
  { name: "Anil M.", location: "Malviya Nagar, Jaipur", text: "Dr. Maheshwari's expertise in critical care saved my father's life. We are forever grateful for his dedication and skill.", avatar: "AM" },
  { name: "Sunita D.", location: "Vaishali Nagar, Jaipur", text: "Very clean and organized clinic. The online video consultation feature is extremely convenient. Great experience overall.", avatar: "SD" },
  { name: "Vikram T.", location: "Mansarovar, Jaipur", text: "Best polyclinic near Gopalpura. The staff is courteous and the doctor takes time to explain everything thoroughly.", avatar: "VT" },
  { name: "Meena R.", location: "C-Scheme, Jaipur", text: "I've been consulting Dr. Maheshwari for chronic disease management. His treatment plans are effective and well-thought-out.", avatar: "MR" },
];

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

  const getCardIndex = (i: number) => {
    const diff = (i - active + reviews.length) % reviews.length;
    return diff;
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.85,
      rotateY: dir > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.85,
      rotateY: dir > 0 ? -15 : 15,
      transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
    }),
  };

  // Show 3 stacked cards behind the active one
  const stackCards = [1, 2].map((offset) => {
    const idx = (active + offset) % reviews.length;
    return { review: reviews[idx], offset };
  });

  return (
    <section id="reviews" className="section-padding bg-gradient-to-b from-background via-accent/30 to-background overflow-hidden" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Patient Stories
          </span>
          <h2 className="section-title mt-3">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-0.5 bg-amber-50 px-4 py-2 rounded-full border border-amber-200/60">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="font-heading font-bold text-foreground ml-2 text-lg">5.0</span>
            </div>
            <span className="text-muted-foreground text-sm font-medium">from 239+ Google Reviews</span>
          </div>
        </motion.div>

        {/* Card Stack Area */}
        <motion.div
          className="relative max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ perspective: 1200 }}
        >
          {/* Stacked cards behind */}
          {stackCards.reverse().map(({ review, offset }) => (
            <div
              key={`stack-${offset}`}
              className="absolute inset-0 rounded-3xl bg-card border border-border/50"
              style={{
                transform: `translateY(${offset * 16}px) scale(${1 - offset * 0.04})`,
                opacity: 1 - offset * 0.25,
                zIndex: 10 - offset,
                boxShadow: `0 ${8 + offset * 8}px ${30 + offset * 15}px -${8 + offset * 4}px hsl(var(--primary) / ${0.06 - offset * 0.015})`,
              }}
            />
          ))}

          {/* Active card */}
          <div className="relative z-20" style={{ minHeight: 320 }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 rounded-3xl bg-card border border-border/40 p-8 sm:p-10 flex flex-col justify-between"
                style={{
                  boxShadow: "0 8px 40px -8px hsl(var(--primary) / 0.1), 0 2px 8px -2px hsl(var(--primary) / 0.06)",
                }}
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-8 sm:top-8 sm:right-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center">
                    <Quote size={22} className="text-primary/40" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + i * 0.06, duration: 0.3, type: "spring" }}
                    >
                      <Star size={16} className="fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Review text */}
                <motion.p
                  className="text-foreground/85 text-lg sm:text-xl leading-relaxed font-light flex-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                >
                  "{reviews[active].text}"
                </motion.p>

                {/* Reviewer info */}
                <motion.div
                  className="flex items-center gap-4 mt-8 pt-6 border-t border-border/50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                >
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm tracking-wide">
                    {reviews[active].avatar}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">{reviews[active].name}</p>
                    <p className="text-muted-foreground text-sm">{reviews[active].location}</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-24 sm:mt-20">
            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
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

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PatientReviews;
