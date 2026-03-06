import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  { name: "Rajesh K.", text: "Exceptional care and attention to detail. Dr. Maheshwari is truly one of the best physicians in Jaipur. Highly recommended!" },
  { name: "Priya S.", text: "The clinic is modern and well-equipped. I was impressed by the digital prescription system and the overall professionalism." },
  { name: "Anil M.", text: "Dr. Maheshwari's expertise in critical care saved my father's life. We are forever grateful for his dedication and skill." },
  { name: "Sunita D.", text: "Very clean and organized clinic. The online video consultation feature is extremely convenient. Great experience overall." },
  { name: "Vikram T.", text: "Best polyclinic near Gopalpura. The staff is courteous and the doctor takes time to explain everything thoroughly." },
  { name: "Meena R.", text: "I've been consulting Dr. Maheshwari for chronic disease management. His treatment plans are effective and well-thought-out." },
];

const PatientReviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="section-title mt-3">
            Trusted by <span className="gradient-text">239+ Patients</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-heading font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground text-sm">Google Rating</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-medical"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{r.text}"</p>
              <p className="font-heading font-semibold text-foreground text-sm">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientReviews;
