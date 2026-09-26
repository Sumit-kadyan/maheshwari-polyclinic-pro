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
      <div className="sticky top-0 flex h-[100dvh] w-full flex-col overflow-hidden">
        
        {/* Header */}
        <div className="w-full pt-24 sm:pt-28 pb-4 z-10 shrink-0">
          <div className="section-container text-center">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent/60 px-4 py-1.5 rounded-full mb-3 sm:mb-4">
              Care in Action
            </span>
            <h2 className="section-title mt-2 sm:mt-3">
              Real Stories of <span className="gradient-text">Recovery</span>
            </h2>
          </div>
        </div>

        {/* Horizontal Sliding Track */}
        <div className="flex flex-1 items-center min-h-0 pt-2 pb-8 sm:pb-12">
          <motion.div 
            ref={carouselRef}
            style={{ x }} 
            className="flex items-center gap-6 sm:gap-8 px-5 sm:px-10 w-max"
          >
            {successStories.map((story, idx) => (
              <article
                key={idx}
                // Mobile: Vertical. Tablet: Immersive Overlay. Laptop: Side-by-side.
                className="group relative flex w-[85vw] sm:w-[500px] lg:w-[900px] max-w-[90vw] shrink-0 flex-col sm:block lg:flex lg:flex-row overflow-hidden rounded-[2rem] border border-border/50 bg-background transition-colors duration-500 hover:border-primary/20 sm:aspect-[10.5/7.5] lg:aspect-auto lg:h-auto lg:max-h-full lg:items-center"
                style={{ boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.12)" }}
              >
                {/* Image Area */}
                <div className="relative w-full aspect-[10.5/7.5] sm:absolute sm:inset-0 sm:h-full lg:relative lg:w-[50%] lg:shrink-0 overflow-hidden bg-muted">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Dark gradient overlay (Hidden on laptop) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent lg:hidden" />
                  
                  {/* MOBILE ONLY: Title & Meta layered on the image */}
                  <div className="absolute bottom-0 left-0 w-full p-6 pb-4 sm:hidden flex flex-col justify-end z-10">
                    <span className="mb-1.5 inline-block text-[11px] font-bold text-white/90 tracking-widest uppercase drop-shadow-md">
                      {story.meta}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white drop-shadow-md leading-tight">
                      {story.title}
                    </h3>
                  </div>
                </div>
                
                {/* Content Area - Description sits below on mobile, everything overlays on tablet, side-by-side on laptop */}
                <div className="relative z-10 flex flex-col flex-1 p-6 pt-5 sm:absolute sm:inset-0 sm:justify-end sm:p-8 lg:relative lg:inset-auto lg:justify-center lg:p-12 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  
                  {/* TABLET & LAPTOP ONLY: Title & Meta */}
                  <div className="hidden sm:block">
                    <span className="mb-2 sm:mb-3 inline-block text-[11px] font-bold text-white/90 lg:text-secondary tracking-widest uppercase drop-shadow-md lg:drop-shadow-none">
                      {story.meta}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white lg:text-foreground mb-2 sm:mb-3 drop-shadow-md lg:drop-shadow-none">
                      {story.title}
                    </h3>
                  </div>
                  
                  {/* Description (Visible everywhere, adapts text color automatically) */}
                  <p className="text-muted-foreground sm:text-white/90 lg:text-muted-foreground leading-relaxed text-sm lg:text-base sm:drop-shadow-md lg:drop-shadow-none">
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