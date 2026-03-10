import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent/60 px-4 py-1.5 rounded-full mb-5">Contact</span>
          <h2 className="section-title mt-3">
            Contact <span className="gradient-text">Information</span>
          </h2>
          <p className="section-subtitle">
            Ready to book your appointment? Reach out to us through any of the channels below.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <a
              href="https://wa.me/919784800627?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="card-medical flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                <MessageCircle className="text-green-600 group-hover:text-primary-foreground transition-colors duration-500" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-sm">WhatsApp Booking</h3>
                <p className="text-sm text-muted-foreground">+91 97848 00627</p>
              </div>
            </a>

            <a href="tel:+919784800627" className="card-medical flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                <Phone className="text-primary group-hover:text-primary-foreground transition-colors duration-500" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-sm">Call Clinic</h3>
                <p className="text-sm text-muted-foreground">+91 97848 00627</p>
              </div>
            </a>

            <a href="mailto:muneshc007@yahoo.com" className="card-medical flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                <Mail className="text-primary group-hover:text-primary-foreground transition-colors duration-500" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-sm">Email Us</h3>
                <p className="text-sm text-muted-foreground">muneshc007@yahoo.com</p>
              </div>
            </a>

            <div className="card-medical flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-sm">Visit Us</h3>
                <p className="text-sm text-muted-foreground">150-10-B Scheme, Gopalpura Bypass, Jaipur</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
