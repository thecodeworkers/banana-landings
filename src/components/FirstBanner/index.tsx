import Image from 'next/image';
import React, { useRef } from 'react';
import styles from './styles.module.scss';
import banana from '../../../public/resources/banana.svg';
import GeneralButton from '../GeneralButton';
import { motion, Variants } from 'framer-motion';

const FirstBanner = () => {
  const textAnimation: Variants = {
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
    <div className={styles._main}>
      <div className={styles._content}>
        <div className={styles._textBox}>
          <p className={styles._title}>
            WE HELP YOU BOOST YOUR <span> BUSSINES </span>
          </p>

          <p className={styles._text}>We develop, create and innovate your ideas.</p>

          <div className={styles._buttonContainer}>
            <GeneralButton text={'Contact us'} />
          </div>
        </div>
        <motion.div
          className={styles._imageBox}
          animate={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: 300 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
          }}>
          <Image src={banana} alt={'Banana Tech'} width={500} height={800} quality={100} />
        </motion.div>
        <div className={styles._imageBoxResponsive}>
          <Image src={banana} alt={'Banana Tech'} width={250} height={270} quality={100} />
        </div>
      </div>
      <div className={styles._paragraphContainer}>
        <motion.p className={styles._paragraph} initial='hide' whileInView='show' variants={textAnimation}>
          <b>BANANA TECH</b> IS A TEAM OF EXPERTS FORMED BY SPECIALISTS IN SYSTEM ENGINEERING, UI-UX DESIGN,
          INFRASTRUCTURE AND INFORMATION SECURITY.
        </motion.p>
      </div>
    </div>
  );
};

export default FirstBanner;
