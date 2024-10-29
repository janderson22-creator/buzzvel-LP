import { Variants } from 'framer-motion';

export const ovalBgPulsing: Variants = {
  initial: {
    scale: 1,
    y: 0,
  },
  animate: {
    scale: [1, 1.05, 1],
    y: [0, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};
