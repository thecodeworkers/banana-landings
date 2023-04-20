import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import banana from '../../../public/resources/banana.svg';
import GeneralButton from '../../components/GeneralButton';
import { motion, Variants, useAnimate, useInView } from 'framer-motion';
import FadeIn from '../../components/FadeIn';

const Hero = () => {

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (isInView) animate(scope.current, { opacity: 1, marginTop: 0 }, { duration: 1, delay: 0.3, ease: 'linear' })
  }, [isInView])

  return (
    <div id="Hero" className={styles._main}>
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
      <div className={styles._paragraphContainer} ref={scope}>
        <p className={styles._paragraph}>
          <b>BANANA TECH</b> IS A TEAM OF EXPERTS FORMED BY SPECIALISTS IN SYSTEM ENGINEERING, UI-UX DESIGN,
          INFRASTRUCTURE AND INFORMATION SECURITY.
        </p>
      </div>
    </div>
  );
};

export default Hero;
