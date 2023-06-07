import React, { FC } from 'react';
import styles from './styles.module.scss';
import { motion, Variants } from 'framer-motion';
import { Icon } from '@iconify/react';

type Props = {
  text: string;
  method?: any;
  darkTheme?: boolean; //DARK THEME SET DEFAULT TRUE OTHERWISE SET FALSE
};

const GeneralButton: FC<Props> = ({ text, method, darkTheme = true }) => {
  const textAnimation: Variants = {
    initial: {
      color: '#FFFFFF',
    },
    hover: {
      color: '#000000',
      transition: {
        duration: 0.1,
      },
    },
  };

  const buttonAnimation: Variants = {
    initial: {
      backgroundColor: '#000000',
      border: '1px solid #FFFFFF',
    },
    hover: {
      backgroundColor: '#BCE5A1',
      border: '1px solid #BCE5A1',
      transition: {
        duration: 0.5,
      },
    },
  };

  const arrowAnimation: Variants = {
    initial: {
      width: '50%',
      color: '#FFFFFF',
    },
    hover: {
      x: '90%',
      color: '#000000',
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <button type='submit' className={styles._container} onClick={method}>
      <motion.div
        whileHover='hover'
        variants={buttonAnimation}
        style={
          darkTheme
            ? { background: '#0000000', border: '1px solid #ffffff' }
            : { background: '#fffffff', border: '1px solid #000000' }
        }
        className={styles._buttonContainer}>
        <div className={styles._button}>
          <div className={styles._textContainer}>
            <motion.p
              className={styles._text}
              style={darkTheme ? { color: '#ffffff' } : { color: '#000000' }}
              variants={textAnimation}>
              {text}
            </motion.p>
          </div>

          <motion.div
            variants={arrowAnimation}
            className={styles._image}
            style={darkTheme ? { color: '#ffffff' } : { color: '#000000' }}>
            <Icon icon='mdi:arrow-right' width={22} />
          </motion.div>
        </div>
      </motion.div>
    </button>
  );
};

export default GeneralButton;
