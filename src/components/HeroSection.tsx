import { motion } from "framer-motion";
import { Star, Phone, MessageCircle } from "lucide-react";
import doctorImg from "@/assets/doctor.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/30 blur-3xl" />

      <div className="section-container section-padding w-full pt-28 sm:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-accent/60 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
              <span className="text-xs font-semibold text-accent-foreground tracking-wide uppercase">
                Award-Winning Multi Speciality Clinic
              </span>
            </div>

            <h1 className="section-title !text-4xl sm:!text-5xl lg:!text-6xl !leading-tight mb-6">
              Maheshwari Polyclinic – Trusted Critical Care{" "}
              <span className="gradient-text">Specialist</span>{" "}
              in Jaipur
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Experience compassionate, world-class medical care at Maheshwari Polyclinic.
              Dr. Munesh Maheshwari brings internationally trained critical care expertise
              to every patient.
            </p>

            {/* Trust Metrics */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-foreground">5.0</span>
              </div>
              <div className="h-5 w-px bg-border" />
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">239+</strong> Patient Reviews
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919784800627?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-medical"
              >
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a href="tel:+919784800627" className="btn-secondary-medical">
                <Phone size={18} />
                Call Clinic
              </a>
            </div>
          </motion.div>

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden" style={{ boxShadow: "var(--shadow-elevated)" }}>
                <img
                  src={doctorImg}
                  alt="Dr. Munesh Maheshwari - Best Physician and Critical Care Specialist in Jaipur near Gopalpura Bypass"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 sm:-left-8 bg-card rounded-2xl p-4 shadow-lg border border-border"
              >
                <p className="font-heading font-bold text-sm text-foreground">Dr. Munesh Maheshwari</p>
                <p className="text-xs text-muted-foreground">Critical Care Specialist</p>
                <p className="text-xs text-primary font-medium mt-1">FCCS USA · IDCCM</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
