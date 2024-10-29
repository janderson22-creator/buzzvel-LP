import { Variants } from 'framer-motion';

export const sunPulsing: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    backgroundColor: ['#ffcc00', '#ff9900', '#ffcc00'],
    x: [0, 20, 0],
    y: [0, 20, 0],
    rotate: [0, 10, -10, 0],
    boxShadow: [
      '0 0 0 rgba(255, 204, 0, 0)',
      '0 0 20px rgba(255, 204, 0, 0.5)',
      '0 0 40px rgba(255, 204, 0, 0.7)',
      '0 0 0 rgba(255, 204, 0, 0)',
    ],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

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
