import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, Users, Monitor, Siren } from "lucide-react";

const indicators = [
  {
    icon: Award,
    title: "Experienced Physician",
    description: "Internationally trained critical care specialist with decades of experience",
  },
  {
    icon: Users,
    title: "Global Patient Trust",
    description: "Trusted by hundreds of patients with a perfect 5.0⭐ Google rating",
  },
  {
    icon: Monitor,
    title: "Modern Digital Clinic",
    description: "Smart healthcare technology for efficient and seamless patient care",
  },
  {
    icon: Siren,
    title: "Emergency Support",
    description: "24/7 emergency medical services with ambulance and hospital support",
  },
];

const TrustIndicators = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-medical text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-500">
                <item.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-500" size={26} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
