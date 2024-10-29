import { Variants } from 'framer-motion';

export const purpleBallPulsing: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    x: [0, -15, 15, 0],
    y: [0, 15, -15, 0],
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 5,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};
