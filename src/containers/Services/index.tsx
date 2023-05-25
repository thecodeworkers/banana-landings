import Image from 'next/image';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
import FadeIn from '../../components/FadeIn';
import { motion, Variants } from 'framer-motion';

const Services = forwardRef<HTMLDivElement>((props: any, ref) => {
  const SvgAnimation: Variants = {
    rest: {
      transform: 'translateX(0%)',
      transition: { duration: 0.25 },
    },
    hover: {
      transform: 'translateX(-70%)',
      transition: { duration: 0.5 },
    },
  };

  const TextAnimation: Variants = {
    rest: {
      opacity: 0,
      left: '55%',
      transition: { duration: 0.1 },
    },
    hover: {
      opacity: 1,
      left: '55%',
      transition: { duration: 1 },
    },
  };
  return (
    <div ref={ref} className={styles._main}>
      {/* web */}
      <FadeIn className={styles._content}>
        <motion.div initial='rest' whileHover='hover' animate='rest' className={styles._leftContainer}>
          <motion.div variants={SvgAnimation} className={styles._imageLeft}>
            <Image src={props?.standar} alt={props?.altStandar} width={228} height={302} quality={100} />
          </motion.div>
          <motion.div variants={TextAnimation} className={styles._textLeftContainer}>
            <p className={styles?._leftTitle}>{props?.standarTitle}</p>
            {props?.standarTypes?.map((type: string, index: string | number) => (
              <p key={index} className={styles?._text}>
                {type}
              </p>
            ))}
          </motion.div>
        </motion.div>
        <motion.div initial='rest' whileHover='hover' animate='rest' className={styles._rightContainer}>
          <motion.div variants={SvgAnimation} className={styles._imageRight}>
            <Image src={props?.custom} alt={props?.altSCustom} width={228} height={302} quality={100} />
          </motion.div>

          <motion.div variants={TextAnimation} className={styles._textRightContainer}>
            <p className={styles?._rightTitle}>{props?.customTitle}</p>
            {props?.customTypes?.map((type: string, index: string | number) => (
              <p key={index} className={styles?._text}>
                {type}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </FadeIn>
      {/* web */}
      {/* responsive */}
      <FadeIn className={styles._contentResponsive}>
        <div className={styles._leftContainerResponsive}>
          <Image src={props?.standar} alt={props?.altStandar} width={158} height={200} quality={100} />

          <div className={styles._textLeftContainer}>
            <p className={styles?._leftTitle}>{props?.standarTitle}</p>
            {props?.standarTypes?.map((type: string, index: string | number) => (
              <p key={index} className={styles?._text}>
                {type}
              </p>
            ))}
          </div>
        </div>
        <div className={styles._rightContainerResponsive}>
          <Image src={props?.custom} alt={props?.altSCustom} width={158} height={200} quality={100} />

          <div className={styles._textRightContainer}>
            <p className={styles?._rightTitle}>{props?.customTitle}</p>
            {props?.customTypes?.map((type: string, index: string | number) => (
              <p key={index} className={styles?._text}>
                {type}
              </p>
            ))}
          </div>
        </div>
      </FadeIn>
      {/* responsive */}
    </div>
  );
});

Services.displayName = 'Services';

export default Services;
