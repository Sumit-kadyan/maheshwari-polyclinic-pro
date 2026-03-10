import { motion, useInView, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import clinicInterior from "@/assets/interior-2.jpeg";
import reception from "@/assets/reception.jpeg";
import clinicExterior from "@/assets/exterior.jpg";
import treatment_area from "@/assets/treatment-area.jpg";
import clinicConsultation from "@/assets/friends.jpeg";
import doctorImg from "@/assets/doctor-portrait.jpg";
import clinicCabin from "@/assets/clinic-cabin.jpg";
import night from "@/assets/exterior-night.jpeg";
import sitting_area from "@/assets/sitting-area.jpeg";
import prize from "@/assets/prize.jpeg";
import award from "@/assets/awards.jpeg";
import clinicInterior2 from "@/assets/clinic-interior-2.jpg";

// Pre-coded "random" collage layout — each group fills exactly 420px height
// Groups are columns; items within a group stack vertically with a 8px gap
const collageGroups = [
  {
    width: "w-[260px]",
    items: [
      { src: doctorImg, alt: "Dr. Munesh Maheshwari - Best Physician in Jaipur", h: "h-[420px]" },
    ],
  },
  {
    width: "w-[300px]",
    items: [
      { src: clinicCabin, alt: "Doctor consultation cabin at Maheshwari Polyclinic Jaipur", h: "h-[240px]" },
      { src: clinicExterior, alt: "Maheshwari Polyclinic exterior near Gopalpura Bypass Jaipur", h: "h-[172px]" },
    ],
  },
  {
    width: "w-[220px]",
    items: [
      { src: treatment_area, alt: "Consultation room at multi-speciality clinic Jaipur", h: "h-[160px]" },
      { src: clinicConsultation, alt: "Dr. Munesh Maheshwari with his foreign friends", h: "h-[252px]" },
    ],
  },
  {
    width: "w-[280px]",
    items: [
      { src: reception, alt: "Reception area of Maheshwari Polyclinic Jaipur", h: "h-[280px]" },
      { src: clinicInterior2, alt: "Modern interior of Maheshwari Polyclinic Jaipur", h: "h-[132px]" },
    ],
  },
  {
    width: "w-[240px]",
    items: [
      { src: sitting_area, alt: "Modern Waiting area of Maheshwari Polyclinic Jaipur", h: "h-[190px]" },
      { src: award, alt: "Awards and certificates at Maheshwari Polyclinic Jaipur", h: "h-[222px]" },
    ],
  },
  {
    width: "w-[270px]",
    items: [
      { src: prize, alt: "Dr. Munesh Maheshwari holding a certificate ", h: "h-[420px]" },
    ],
  },
  {
    width: "w-[300px]",
    items: [
      { src: clinicInterior2, alt: "Awards and certificates at Maheshwari Polyclinic Jaipur", h: "h-[170px]" },
      { src: night, alt: "Maheshwari Polyclinic exterior near Gopalpura Bypass Jaipur", h: "h-[242px]" },
    ],
  },
  {
    width: "w-[250px]",
    items: [
      { src: clinicExterior, alt: "Maheshwari Polyclinic building near Triveni Nagar Jaipur", h: "h-[300px]" },
      { src: clinicInterior, alt: "Waiting area of Maheshwari Polyclinic Jaipur", h: "h-[112px]" },
    ],
  },
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
    scrollX.current += delta * 0.03;
    if (scrollX.current >= maxScroll) scrollX.current = 0;
    container.scrollLeft = scrollX.current;
  });

  const handleScroll = () => {
    if (scrollRef.current) scrollX.current = scrollRef.current.scrollLeft;
  };

  let itemIndex = 0;

  return (
    <section className="section-padding overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent/60 px-4 py-1.5 rounded-full mb-5">Gallery</span>
          <h2 className="section-title mt-3">
            Clinic <span className="gradient-text">Gallery</span>
          </h2>
        </div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onScroll={handleScroll}
        className="flex gap-2 overflow-x-auto px-6 pb-4 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {collageGroups.map((group, gi) => (
          <div key={gi} className={`flex-shrink-0 ${group.width} flex flex-col gap-2 h-[420px]`}>
            {group.items.map((img) => {
              const i = itemIndex++;
              return (
                <motion.div
                  key={`${img.alt}-${i}`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.32, 0.72, 0, 1] }}
                  className={`w-full ${img.h} rounded-2xl overflow-hidden group relative`}
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
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClinicGallery;
