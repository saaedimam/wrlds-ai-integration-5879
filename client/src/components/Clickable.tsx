import { motion } from "framer-motion";
import { Link } from "wouter";

type ClickableVariant = "bounceGlow" | "rippleBlue" | "pop" | "press" | "tilt";

const variants = {
  pop: { 
    whileTap: { scale: 0.96 }, 
    whileHover: { scale: 1.02 },
    transition: { duration: 0.14, ease: [0.2, 0.8, 0.2, 1] }
  },
  press: { 
    whileTap: { scale: 0.97, boxShadow: "0 6px 18px rgba(0,0,0,.12)" },
    transition: { duration: 0.16, ease: [0.2, 0.8, 0.2, 1] }
  },
  tilt: { 
    whileHover: { rotate: -1, y: -2 },
    transition: { duration: 0.12, ease: [0.2, 0.8, 0.2, 1] }
  },
  bounceGlow: {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.95, boxShadow: "0 0 0 8px rgba(139,0,0,.12)" },
    transition: { duration: 0.16, ease: [0.2, 0.8, 0.2, 1] }
  },
  rippleBlue: { 
    whileTap: { scale: 0.98, boxShadow: "0 0 0 10px rgba(14,165,165,.14)" },
    transition: { duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }
  }
};

interface ClickableProps {
  variant?: ClickableVariant;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function Clickable({ 
  variant = "pop", 
  as: Component = "button", 
  children, 
  className = "",
  ...props 
}: ClickableProps) {
  // Handle Link component specially
  if (Component === Link) {
    const MotionLink = motion.create(Link);
    return (
      <MotionLink
        {...variants[variant]} 
        className={className}
        {...props}
      >
        {children}
      </MotionLink>
    );
  }
  
  // Handle regular HTML elements
  const MotionComponent = motion[Component as keyof typeof motion] as any;
  
  return (
    <MotionComponent 
      {...variants[variant]} 
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}