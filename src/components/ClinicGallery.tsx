import { motion, useInView, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import clinicInterior from "@/assets/clinic-interior.jpg";
import clinicExterior from "@/assets/clinic-exterior.jpg";
import clinicConsultation from "@/assets/clinic-consultation.jpg";
import doctorImg from "@/assets/doctor-portrait.jpg";

const images = [
  { src: doctorImg, alt: "Dr. Munesh Maheshwari", height: "h-[340px]" },
  { src: clinicInterior, alt: "Maheshwari Polyclinic Interior", height: "h-[160px]" },
  { src: clinicExterior, alt: "Maheshwari Polyclinic Exterior", height: "h-[160px]" },
  { src: clinicConsultation, alt: "Consultation Room", height: "h-[240px]" },
  { src: clinicInterior, alt: "Treatment Area", height: "h-[200px]" },
  { src: doctorImg, alt: "Dr. Maheshwari Consulting", height: "h-[280px]" },
  { src: clinicExterior, alt: "Clinic Entrance", height: "h-[180px]" },
  { src: clinicConsultation, alt: "Modern Equipment", height: "h-[260px]" },
];

const ClinicGallery = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isSectionVisible = useInView(sectionRef, { amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  const scrollX = useRef(0);

  useAnimationFrame((_, delta) => {
    if (!scrollRef.current || !isSectionVisible || isHovered) return;
    const container = scrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    scrollX.current += delta * 0.03; // very slow
    if (scrollX.current >= maxScroll) scrollX.current = 0;
    container.scrollLeft = scrollX.current;
  });

  // Sync scrollX ref if user manually scrolls
  const handleScroll = () => {
    if (scrollRef.current) scrollX.current = scrollRef.current.scrollLeft;
  };

  return (
    <section className="section-padding overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Gallery</span>
          <h2 className="section-title mt-3">
            Our <span className="gradient-text">Clinic</span>
          </h2>
        </div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img, i) => (
          <motion.div
            key={`${img.alt}-${i}`}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
            className={`flex-shrink-0 w-[280px] md:w-[320px] ${img.height} rounded-2xl overflow-hidden group relative`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="absolute bottom-3 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
              {img.alt}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClinicGallery;
