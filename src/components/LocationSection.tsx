import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent/60 px-4 py-1.5 rounded-full mb-5">Location</span>
          <h2 className="section-title mt-3">
            Visit Our <span className="gradient-text">Clinic</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2 rounded-3xl overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
            <iframe
              src="https://maps.google.com/maps?q=Maheshwari+Polyclinic,+Gopalpura+Bypass,+Jaipur&t=&z=15&ie=UTF8&iwloc=A&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maheshwari Polyclinic Location"
              className="w-full"
            />
          </div>

          <div className="card-medical flex flex-col justify-center">
            <MapPin className="text-primary mb-4" size={32} />
            <h3 className="font-heading font-bold text-foreground text-lg mb-3">Maheshwari Polyclinic</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              150-10-B Scheme<br />
              Gopalpura Bypass<br />
              Near Triveni Nagar<br />
              Jaipur, Rajasthan
            </p>
            <a
              href="https://www.google.com/maps/search/Maheshwari+Polyclinic+Gopalpura+Bypass+Jaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-medical w-full justify-center"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
