import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const successStories = [
  {
    image: "/image_e6dda2.jpeg",
    title: "Healing at Home",
    meta: "87 Years Old • H1N1 Positive",
    description: "From severe hypoxia to a smile of gratitude. Through close monitoring and timely home-based treatment, she recovered remarkably well by Day 7."
  },
  {
    image: "/image_e6dd80.jpeg",
    title: "Care Beyond Boundaries",
    meta: "Australian Traveller • Hotel Visit",
    description: "Fell sick with seasonal fever and low oxygen at Hotel Raj Palace, Jaipur. With prompt care, her condition was managed in just a few hours, getting her back to her journey with a smile."
  }
];

const SuccessStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stories" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent/60 px-4 py-1.5 rounded-full mb-5">
            Care in Action
          </span>
          <h2 className="section-title mt-3">
            Real Stories of <span className="gradient-text">Recovery</span>
          </h2>
          <p className="section-subtitle mt-4">
            See how personalized, timely medical attention makes a difference.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {successStories.map((story, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + idx * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border/50 bg-background transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-primary/20"
              style={{ boxShadow: "0 4px 24px -6px hsl(var(--primary) / 0.06)" }}
            >
              <div className="relative w-full aspect-[10.5/7.5] overflow-hidden bg-muted">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col p-6 sm:p-8 flex-1">
                <span className="mb-3 inline-block text-[11px] font-bold text-secondary tracking-widest uppercase">
                  {story.meta}
                </span>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {story.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {story.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;