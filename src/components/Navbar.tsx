import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import clinicLogo from "@/assets/clinic-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Timings", href: "#timings" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-card/70 backdrop-blur-2xl shadow-[0_1px_0_0_hsl(var(--border)/0.5),0_4px_20px_-6px_hsl(var(--primary)/0.08)]"
          : "bg-gradient-to-b from-card/40 via-card/20 to-transparent backdrop-blur-lg"
      }`}
    >
      {/* Subtle bottom fade line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-700 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--border) / 0.6) 20%, hsl(var(--border) / 0.6) 80%, transparent)",
        }}
      />

      <div className="section-container flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <img src={clinicLogo} alt="Maheshwari Polyclinic – Best Multi Speciality Clinic in Jaipur" className="w-9 h-9 object-contain" width="36" height="36" />
          <div className="hidden sm:block">
            <p className="font-heading font-bold text-sm text-foreground leading-tight">
              Maheshwari
            </p>
            <p className="text-[10px] text-muted-foreground leading-tight tracking-wide">
              Polyclinic
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-[13px] font-medium text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/[0.05] transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919784800627"
            className="btn-primary-medical text-[13px] !py-2 !px-5 !rounded-full !shadow-[0_2px_12px_-3px_hsl(var(--primary)/0.4)] hover:!shadow-[0_4px_18px_-3px_hsl(var(--primary)/0.5)]"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">Call Now</span>
          </a>
          <button
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground rounded-lg hover:bg-muted/60 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden bg-card/80 backdrop-blur-2xl border-t border-border/40"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary py-2.5 px-4 rounded-xl hover:bg-primary/[0.05] transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
