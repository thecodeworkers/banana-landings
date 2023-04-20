import React, { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import arrowRight from '../../../public/resources/arrow-right.svg';
import { motion, Variants } from 'framer-motion';
import { Icon } from '@iconify/react';

type Props = {
  text: string;
  method?: () => {}
}

const GeneralButton: FC<Props> = ({ text, method }) => {
  const textAnimation: Variants = {
    initial: {
      color: 'white',
    },
    hover: {
      color: 'black',
      transition: {
        duration: 0.1,
      },
    },
  };
  const buttonAnimation: Variants = {
    initial: {
      backgroundColor: 'black',
      border: '1px solid #ffffff',
    },
    hover: {
      backgroundColor: '#BCE5A1',
      border: 'none',
      transition: {
        duration: 0.5,
      },
    },
  };
  const arrowAnimation: Variants = {
    initial: {
      width: '50%',
      color: 'white',
    },
    hover: {
      x: '90%',
      color: 'black',
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div whileHover='hover' variants={buttonAnimation} className={styles._buttonContainer} onClick={method}>
      <div className={styles._button}>
        <div className={styles._textContainer}>
          <motion.p className={styles._text} variants={textAnimation}>
            {text}
          </motion.p>
        </div>

        <motion.div variants={arrowAnimation} className={styles._image}>
          {/* <Image src={arrowRight} alt={'arrow'} width={15} height={12} quality={100} /> */}
          <Icon icon='mdi:arrow-right' width={22} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GeneralButton;
