import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import { GeneralButton } from '@/components/';
import { motion, useAnimate, useInView } from 'framer-motion';
import { scrolling } from '../../utils/common';
import useTranslation from "next-translate/useTranslation";

const Hero = ({ data, action }: any) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  const { t } = useTranslation("common");

  useEffect(() => {
    if (isInView) animate(scope.current, { opacity: 1, marginTop: 0 }, { duration: 1, delay: 0.3, ease: 'linear' });
  }, [isInView]);

  return (
    <div className={styles._main}>
      <div className={styles._content}>
        <div className={styles._textBox}>
          <p className={styles._title}>
            {t(data?.titleFirstLine)} <br/>
            {t(data?.titleSecondLine)} <br/>
            <span> {t(data?.bold)} </span>
          </p>

          <p className={styles._text}>{t(data?.subtitleFirstLine)}<br/>{t(data?.subtitleSecondLine)}</p>

          <div className={styles._buttonContainer}>
            <GeneralButton method={() => scrolling(action)} text={t(data?.button)} />
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
          <Image src={data?.image} alt={data?.altImage} width={500} height={800} quality={100} />
        </motion.div>
        <div className={styles._imageBoxResponsive}>
          <Image src={data?.image} alt={data?.altImage} width={250} height={270} quality={100} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
