import { Heart } from "lucide-react";
import clinicLogo from "@/assets/clinic-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
            <img src={clinicLogo} alt="Maheshwari Polyclinic Logo" className="w-9 h-9 object-contain" width="36" height="36" />
              <div>
                <p className="font-heading font-bold text-sm text-background">Maheshwari Polyclinic</p>
                <p className="text-[10px] text-background/60">Multi Speciality Hi-Tech Clinic</p>
              </div>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Awarded India's Best Multi Speciality Clinic. Providing world-class critical care and physician services in Jaipur.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-background text-sm mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Reviews", "Timings", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-background/60 hover:text-background transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-background text-sm mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-background/60">
              <p>+91 97848 00627</p>
              <p>muneshc007@yahoo.com</p>
              <p>150-10-B Scheme, Gopalpura Bypass</p>
              <p>Near Triveni Nagar, Jaipur</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/40 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Maheshwari Polyclinic. Made with <Heart size={12} className="text-secondary" /> in Jaipur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
