import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Lock, Zap, Clock, Database } from "lucide-react";

const features = [
  { icon: FileText, title: "Digital Prescriptions", description: "Paperless prescriptions accessible  from your device" },
  { icon: Lock, title: "Secure Patient Records", description: "End-to-end encrypted medical records for complete privacy" },
  { icon: Zap, title: "Efficient Management", description: "Streamlined patient flow for minimal waiting time" },
  { icon: Clock, title: "Faster Consultations", description: "Quick access to medical history speeds up every visit" },
  { icon: Database, title: "Medical History Tracking", description: "Complete longitudinal health records at your fingertips" },
];

const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/20" />

      <div className="section-container relative">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Technology</span>
          <h2 className="section-title mt-3">
            Modern Digital <span className="gradient-text">Healthcare</span> Experience
          </h2>
          <p className="section-subtitle">
            Powered by Medichain smart clinic technology, we deliver a seamless and intelligent healthcare experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card-medical text-center ${i === features.length - 1 && features.length % 3 !== 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <f.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
