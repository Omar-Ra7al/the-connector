import { motion } from "framer-motion";

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  y = -20,
  scale = 1,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y, scale: scale }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeIn;
