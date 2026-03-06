import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Video, Siren } from "lucide-react";

const ConsultationTimings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timings" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Timings</span>
          <h2 className="section-title mt-3">
            Consultation <span className="gradient-text">Hours</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="card-medical text-center">
              <Clock className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-heading font-bold text-foreground mb-1">Morning</h3>
              <p className="text-2xl font-heading font-bold gradient-text">7:00 AM – 8:00 AM</p>
            </div>
            <div className="card-medical text-center">
              <Clock className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-heading font-bold text-foreground mb-1">Evening</h3>
              <p className="text-2xl font-heading font-bold gradient-text">4:00 PM – 9:00 PM</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-medical text-center border-2 border-accent">
              <Video className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-heading font-semibold text-foreground text-sm">Online Consultation Available</h3>
              <p className="text-xs text-muted-foreground mt-1">Video calling for remote patients</p>
            </div>
            <div className="card-medical text-center border-2 border-medical-red-light">
              <Siren className="text-secondary mx-auto mb-3" size={28} />
              <h3 className="font-heading font-semibold text-foreground text-sm">24 Hour Emergency Service</h3>
              <p className="text-xs text-muted-foreground mt-1">Ambulance & hospital support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationTimings;
