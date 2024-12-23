import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const fadeInUp: Variants = {
  offscreen: {
    y: 300,
  },
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'linear' } },
};

type AnimatedBlockProps = {
  isVisible: boolean;
  children: ReactNode;
};

export const AnimatedBlock = ({ isVisible, children }: AnimatedBlockProps) => (
  <motion.div initial="hidden" animate={isVisible ? 'visible' : 'hidden'} variants={fadeInUp}>
    {children}
  </motion.div>
);
