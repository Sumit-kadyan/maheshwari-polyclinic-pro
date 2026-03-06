import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      <a
        href="https://wa.me/919784800627?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn bottom-6 right-6"
        style={{ background: "#25D366" }}
        aria-label="Book on WhatsApp"
      >
        <MessageCircle className="text-primary-foreground" size={24} />
      </a>
      <a
        href="tel:+919784800627"
        className="floating-btn bottom-6 left-6 gradient-primary"
        aria-label="Call clinic"
      >
        <Phone className="text-primary-foreground" size={24} />
      </a>
    </>
  );
};

export default FloatingButtons;
