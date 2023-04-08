import React from 'react';
import styles from './styles.module.scss';
import { motion, Variants } from 'framer-motion';

const FadeIn = ({ className, children }: any) => {
  const fadeInAnimation: Variants = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <motion.div className={className} initial='hide' whileInView='show' variants={fadeInAnimation}>
      {children}
    </motion.div>
  );
};

export default FadeIn;
