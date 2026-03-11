import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorFollower = () => {
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<"default" | "link" | "button" | "text" | "image">("default");
  const cursorX = useSpring(0, { damping: 25, stiffness: 300 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 300 });
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = "ontouchstart" in window;
    if (isTouchDevice.current) return;
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest("a, button, [role='button'], input, textarea, select");
      const img = target.closest("img, video, [data-cursor='image']");
      const heading = target.closest("h1, h2, h3, h4, h5, h6, [data-cursor='text']");
      const btn = target.closest(".btn-primary-medical, .btn-secondary-medical, .floating-btn");
      
      if (btn) setVariant("button");
      else if (el) setVariant("link");
      else if (img) setVariant("image");
      else if (heading) setVariant("text");
      else setVariant("default");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [visible, cursorX, cursorY]);

  if (isTouchDevice.current) return null;

  const variants = {
    default: { width: 12, height: 12, opacity: 0.6, backgroundColor: "hsl(210, 80%, 45%)" },
    link: { width: 40, height: 40, opacity: 0.15, backgroundColor: "hsl(210, 80%, 45%)" },
    button: { width: 50, height: 50, opacity: 0.12, backgroundColor: "hsl(0, 65%, 55%)" },
    text: { width: 56, height: 56, opacity: 0.08, backgroundColor: "hsl(210, 80%, 45%)" },
    image: { width: 64, height: 64, opacity: 0.1, backgroundColor: "hsl(200, 80%, 50%)" },
  };
  const v = variants[variant];

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-normal"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: v.width,
        height: v.height,
        opacity: visible ? v.opacity : 0,
        backgroundColor: v.backgroundColor,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
    />
  );
};

export default CursorFollower;