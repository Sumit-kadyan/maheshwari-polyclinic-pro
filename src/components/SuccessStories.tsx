import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const successStories = [
  {
    image: "/image_e6dda2.jpeg",
    title: "Healing at Home",
    meta: "87 Years Old • H1N1 Positive",
    description: "Recovered remarkably well from severe hypoxia with our dedicated home-based treatment."
  },
  {
    image: "/image_e6dd80.jpeg",
    title: "Care Beyond Boundaries",
    meta: "Australian Traveller • Hotel Visit",
    description: "Prompt hotel care stabilized her seasonal fever and low oxygen in just hours."
  },
  {
    // Client input: Traveller foreigner recoverd had seasonal flu and fever
    image: "/0001.jpeg", 
    title: "Overcoming Seasonal Flu",
    meta: "International Traveller • Hotel Visit",
    description: "Prompt treatment for seasonal flu and fever ensured a quick, comfortable recovery during their travels."
  },
  {
    // Client input: Foreigner from Spain With loose motions diarrhea
    image: "/0002.jpeg", 
    title: "Relief from Traveler's Bug",
    meta: "Spanish Tourist • Hotel Visit",
    description: "Fast, effective care for severe diarrhea allowed this traveler to comfortably resume their vacation."
  },
  {
    // Client input: Foreigner from US had diarrhea
    image: "/0003.jpeg", 
    title: "Swift Recovery in Jaipur",
    meta: "US Tourist • Hotel Visit",
    description: "Dehydration and illness were successfully managed on-site, restoring their health and peace of mind."
  },
  {
    // Client input: Time of procedure of ICu & cardiac like TAVI
    image: "/0009.jpeg", 
    title: "Advanced Cardiac Support",
    meta: "ICU Management • TAVI",
    description: "Expert critical care and precise monitoring during and after complex cardiac procedures like TAVI, ensuring optimal recovery."
  },
  {
    // Client input: Foreigner from Australia Severe pain abdomen in mid night managed in hotel
    image: "/0005.jpeg", 
    title: "Midnight Emergency Care",
    meta: "Australian Traveller • Hotel Visit",
    description: "Responded to a midnight call for severe abdominal pain, successfully stabilizing the patient in their room."
  },
  {
    // Client input: Newley married couple from Australia gets sick manged. In hotel
    image: "/0006.jpeg", 
    title: "Saving the Trip",
    meta: "Australian Newlyweds • Hotel Visit",
    description: "When sudden illness struck, swift in-room medical attention got this couple back to enjoying their stay."
  },
  {
    // Client input: From Australia Fever with cough manged hotel
    image: "/0007.jpeg", 
    title: "Managing Fever & Cough",
    meta: "Australian Traveller • Hotel Visit",
    description: "Accurate diagnosis and targeted medication quickly resolved a disruptive fever and cough at their hotel."
  },
  {
    // Client input: Foreigner pt happy after treatment in hotel
    image: "/0008.jpeg", 
    title: "Restoring Health & Smiles",
    meta: "International Patient • Hotel Visit",
    description: "Delivered attentive, personalized care directly to their hotel, resulting in a fast recovery and a happy patient."
  }
];

const SuccessStories = () => {
  const targetRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateRange = () => {
      if (carouselRef.current) {
        const range = carouselRef.current.scrollWidth - window.innerWidth;
        setScrollRange(range > 0 ? range : 0);
      }
    };
    
    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section 
      ref={targetRef} 
      id="stories" 
      className="relative bg-card" 
      style={{ height: scrollRange > 0 ? `calc(100vh + ${scrollRange}px)` : "auto", minHeight: "100vh" }} 
    >
      {/* Changed to h-[100dvh] for strict viewport fitting */}
      <div className="sticky top-0 flex h-[100dvh] w-full flex-col overflow-hidden">
        
        {/* Header - Reduced top padding to free up space */}
        <div className="w-full pt-12 sm:pt-16 pb-4 z-10 shrink-0">
          <div className="section-container text-center">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent/60 px-4 py-1.5 rounded-full mb-3 sm:mb-4">
              Care in Action
            </span>
            <h2 className="section-title mt-2 sm:mt-3">
              Real Stories of <span className="gradient-text">Recovery</span>
            </h2>
          </div>
        </div>

        {/* Horizontal Sliding Track - Reduced bottom padding & added min-h-0 */}
        <div className="flex flex-1 items-center pb-8 sm:pb-12 min-h-0">
          <motion.div 
            ref={carouselRef}
            style={{ x }} 
            className="flex gap-6 sm:gap-8 px-5 sm:px-10 w-max"
          >
            {successStories.map((story, idx) => (
              <article
                key={idx}
                // Slightly narrower (350px), capped at 75vh to ensure it never gets cut off
                className="group relative flex w-[85vw] sm:w-[350px] max-h-[75vh] shrink-0 flex-col overflow-hidden rounded-[2rem] border border-border/50 bg-background transition-colors duration-500 hover:border-primary/20"
                style={{ boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.12)" }}
              >
                {/* Image Side */}
                <div className="relative w-full aspect-[10.5/7.5] shrink-0 overflow-hidden bg-muted">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Content Side - Added overflow-y-auto to handle super-short screens securely */}
                <div className="flex flex-col p-6 sm:p-7 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <span className="mb-2 inline-block text-[11px] font-bold text-secondary tracking-widest uppercase">
                    {story.meta}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {story.description}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;