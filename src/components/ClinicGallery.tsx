import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clinicInterior from "@/assets/clinic-interior.jpg";
import clinicExterior from "@/assets/clinic-exterior.jpg";
import clinicConsultation from "@/assets/clinic-consultation.jpg";
import doctorImg from "@/assets/doctor-portrait.jpg";

const images = [
  { src: doctorImg, alt: "Dr. Munesh Maheshwari", span: "row-span-2" },
  { src: clinicInterior, alt: "Maheshwari Polyclinic Interior", span: "" },
  { src: clinicExterior, alt: "Maheshwari Polyclinic Exterior", span: "" },
  { src: clinicConsultation, alt: "Consultation Room", span: "col-span-2" },
];

const ClinicGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Gallery</span>
          <h2 className="section-title mt-3">
            Our <span className="gradient-text">Clinic</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicGallery;
