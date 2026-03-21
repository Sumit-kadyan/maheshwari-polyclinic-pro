import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";

const credentials = [
  "Critical Care Specialist – Rajasthan Hospital",
  "NTMC / FCCS USA",
  "IDCCM / DHHM",
  "Critical Care Specialist – JHU Hospital",
  "Former Physician – Pardaya Hospital",
  "Consultant – Khandaka Hospital",
  "Consultant – Tagore Hospital",
];

const memberships = [
  "Life Member – Association of Physician of India",
  "Life Member – ISCCM",
  "Life Member – Metabolic Club",
];

const AboutDoctor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl overflow-hidden" style={{ boxShadow: "var(--shadow-elevated)" }}>
              <img
                src={doctorImg}
                alt="Dr. Munesh Maheshwari - Experienced Physician and Critical Care Doctor in Jaipur"
                className="w-full aspect-[4/5] object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent/60 px-4 py-1.5 rounded-full mb-5">About the Doctor</span>
            <h2 className="section-title mt-3 mb-2">
              About Dr. Munesh <span className="gradient-text">Maheshwari</span>
            </h2>
            <p className="text-lg font-medium text-primary mb-6">Critical Care Specialist (Physician) · <span className="text-secondary font-bold">26+ Years Experience</span></p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              With over 26 years of experience and extensive training from internationally acclaimed institutions including
              Johns Hopkins University Hospital and FCCS certification from the USA, Dr. Maheshwari
              brings world-class critical care expertise to Jaipur. He has worked in Jaipur's leading hospitals
              and is currently attached with most of the city's top hospitals. His commitment to patient-centered
              care and modern medical practices has earned him the trust of hundreds of patients.
            </p>

            <div className="mb-8">
              <h3 className="font-heading font-bold text-foreground mb-4">Credentials & Experience</h3>
              <div className="space-y-2.5">
                {credentials.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                    <span className="text-sm text-muted-foreground">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-foreground mb-4">Professional Memberships</h3>
              <div className="space-y-2.5">
                {memberships.map((m) => (
                  <div key={m} className="flex items-start gap-3">
                    <CheckCircle className="text-secondary mt-0.5 shrink-0" size={18} />
                    <span className="text-sm text-muted-foreground">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
