import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, HeartPulse, Siren, Video, ShieldCheck, Activity } from "lucide-react";

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

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Our Services</span>
          <h2 className="section-title mt-3">
            Comprehensive <span className="gradient-text">Medical Care</span>
          </h2>
          <p className="section-subtitle">
            From routine consultations to critical care, we provide a full spectrum of medical services with a patient-first approach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-medical group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-500">
                <s.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-500" size={22} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
