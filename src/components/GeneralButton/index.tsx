import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import arrowRight from '../../../public/resources/arrow-right.svg';
import { motion, Variants } from 'framer-motion';

const GeneralButton = ({ text, method }: any) => {
  const arrowAnimation: Variants = {
    initial: {
      width: '50%',
    },
    hover: {
      x: '90%',
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div whileHover='hover' className={styles._buttonContainer} onClick={method}>
      <div className={styles._button}>
        <div className={styles._textContainer}>
          <p className={styles._text}>{text}</p>
        </div>

        <motion.div variants={arrowAnimation} className={styles._image}>
          <Image src={arrowRight} alt={'arrow'} width={15} height={12} quality={100} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GeneralButton;
