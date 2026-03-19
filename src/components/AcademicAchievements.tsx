import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Globe, Award, MapPin, ChevronDown } from "lucide-react";

interface Achievement {
  title: string;
  location?: string;
  year?: string;
  category: "international" | "national" | "certification";
}

const achievements: Achievement[] = [
  // International
  { title: "National Trauma Management Course (NTMC)", location: "South Africa", category: "international" },
  { title: "BLS & ACLS Course", location: "American Heart Association", category: "international" },
  { title: "ISCCM Expert Committee – National Guidelines for Planning & Designing ICUs in India", category: "international" },
  { title: "International Coronary Congress", year: "2016", category: "international" },
  { title: "ERS (European Respiratory Society)", location: "New Delhi", year: "2014", category: "international" },
  { title: "American Thyroid Association (Thyroid Disorder)", location: "USA", category: "international" },
  { title: "International Coronary Congress", year: "2016", category: "international" },
  { title: "Certified Program – Management of Stroke", location: "Harvard Medical School, Boston", category: "certification" },

  // National Conferences
  { title: "3rd Eternal Criticon", year: "2018", category: "national" },
  { title: "DiabeteIndia", year: "2019", category: "national" },
  { title: "Annual Critical Care Conference", location: "JN Hospital", category: "national" },
  { title: "National Workshop on ABG & Electrolytes", location: "Rajasthan Hospital", category: "national" },
  { title: "Non-Invasive Ventilation Workshop", location: "JNU", category: "national" },
  { title: "Renal Replacement Therapy by ACE", category: "national" },
  { title: "Dorso Lumbar Fractures Workshop (2 Days)", location: "Khandaka Hospital, Jaipur", year: "2004", category: "national" },
  { title: "ISC (International Symposium of Cardiology)", year: "2013", category: "national" },
  { title: "Mechanical Ventilation Workshop", category: "national" },
  { title: "IMPACT", year: "2015", category: "national" },
  { title: "Echocon", location: "Jaipur", year: "2016", category: "national" },
  { title: "Neuro Critical Care", location: "Jaipur", year: "2015", category: "national" },
  { title: "EHC (Eternal Heart Conclave)", year: "2015", category: "national" },
  { title: "AIAARCON", location: "Jaipur", year: "2014", category: "national" },
  { title: "Echo & Cardiology Conference (2 Days)", location: "Medanta Hospital, Delhi", year: "2015", category: "national" },
  { title: "IASMCON", location: "Jaipur", year: "2014", category: "national" },
  { title: "CCA (Complex Coronary Angiography)", year: "2015", category: "national" },
  { title: "Wound Care Management", year: "2015", category: "national" },

  // Certifications & Courses
  { title: "Certificate Program in Low Back Pain", category: "certification" },
  { title: "16th Annual Symposium on Treatment for AMI", year: "2017", category: "national" },
  { title: "Certificate Course on Rheumatology", year: "2016", category: "certification" },
  { title: "Raj APICON", year: "2014", category: "national" },
  { title: "Gastro Conclave", year: "2014", category: "national" },
  { title: "1st Annual JNU Critical Care Conference", year: "2017", category: "national" },
  { title: "1st Annual Diabetes, Thyroid & Endocrine Conference", year: "2017", category: "national" },
  { title: "16th Annual Symposium on Optimal Treatment for Acute Myocardial Infarction", category: "national" },
];

const categoryConfig = {
  international: {
    label: "International",
    icon: Globe,
    gradient: "from-primary/10 to-primary/5",
    border: "border-primary/15",
    iconColor: "text-primary",
    badge: "bg-primary/10 text-primary",
  },
  national: {
    label: "National",
    icon: Award,
    gradient: "from-accent to-accent/50",
    border: "border-border/40",
    iconColor: "text-foreground/60",
    badge: "bg-accent text-foreground/70",
  },
  certification: {
    label: "Certification",
    icon: GraduationCap,
    gradient: "from-secondary/10 to-secondary/5",
    border: "border-secondary/15",
    iconColor: "text-secondary",
    badge: "bg-secondary/10 text-secondary",
  },
};

type CategoryKey = keyof typeof categoryConfig;

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) => {
  const config = categoryConfig[achievement.category];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className={`group relative rounded-2xl border ${config.border} bg-gradient-to-br ${config.gradient} p-4 sm:p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
    >
      <div className="flex items-start gap-3.5">
        <div className={`w-9 h-9 rounded-xl bg-card/80 border ${config.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={16} className={config.iconColor} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground/90 leading-snug">
            {achievement.title}
          </p>
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            {achievement.location && (
              <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                <MapPin size={10} className="shrink-0" />
                {achievement.location}
              </span>
            )}
            {achievement.year && (
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${config.badge}`}>
                {achievement.year}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AcademicAchievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<CategoryKey | "all">("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeFilter === "all"
    ? achievements
    : achievements.filter((a) => a.category === activeFilter);

  const displayed = showAll ? filtered : filtered.slice(0, 12);

  const counts = {
    all: achievements.length,
    international: achievements.filter((a) => a.category === "international").length,
    national: achievements.filter((a) => a.category === "national").length,
    certification: achievements.filter((a) => a.category === "certification").length,
  };

  const filters: { key: CategoryKey | "all"; label: string }[] = [
    { key: "all", label: "All" },
    { key: "international", label: "International" },
    { key: "national", label: "National" },
    { key: "certification", label: "Certifications" },
  ];

  return (
    <section
      id="achievements"
      className="section-padding bg-gradient-to-b from-background via-accent/20 to-background"
      ref={ref}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent/60 px-4 py-1.5 rounded-full mb-5">
            Academic Excellence
          </span>
          <h2 className="section-title mt-3">
            Conferences & <span className="gradient-text">Workshops</span>
          </h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Continuous learning across {achievements.length}+ national and international conferences, certifications, and specialized workshops.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {[
            { num: counts.international, label: "International", icon: Globe },
            { num: counts.national, label: "National", icon: Award },
            { num: counts.certification, label: "Certifications", icon: GraduationCap },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 bg-card border border-border/40 rounded-2xl px-5 py-3"
              style={{ boxShadow: "0 2px 12px -4px hsl(var(--primary) / 0.06)" }}
            >
              <stat.icon size={18} className="text-primary" />
              <div>
                <span className="text-xl font-heading font-bold text-foreground">{stat.num}</span>
                <span className="text-xs text-muted-foreground ml-1.5">{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => { setActiveFilter(f.key); setShowAll(false); }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border ${
                activeFilter === f.key
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card text-muted-foreground border-border/40 hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {f.label}
              <span className={`ml-1.5 text-[10px] ${activeFilter === f.key ? "opacity-80" : "opacity-50"}`}>
                {counts[f.key]}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {displayed.map((achievement, i) => (
            <AchievementCard key={`${achievement.title}-${i}`} achievement={achievement} index={i} />
          ))}
        </div>

        {/* Show More / Less */}
        {filtered.length > 12 && (
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-border/40 bg-card text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              {showAll ? "Show Less" : `View All ${filtered.length} Achievements`}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""} group-hover:translate-y-0.5`}
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AcademicAchievements;
