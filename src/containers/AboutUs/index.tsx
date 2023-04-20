import Image from 'next/image';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';

import crystal from '../../../public/resources/crystal.svg';
import FadeIn from '../../components/FadeIn';

const AboutUs = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className={styles._main}>
      <FadeIn className={styles._content}>
        <div className={styles._textBox}>
          <div className={styles._backgroundImage}>
            <Image src={crystal} alt={'arrow'} width={470} height={332} quality={100} />
          </div>
          <div className={styles._backgroundImageResponsive}>
            <Image src={crystal} alt={'arrow'} width={400} height={300} quality={100} />
          </div>
          <p className={styles._title}>
            WE CREATE <span className={styles._greenTitleFirst}>FUNCTIONAL</span>
            <span className={styles._greenTitleSecond}> & BEAUTIFUL </span>WEBSITES
          </p>
        </div>
        <div className={styles._rightBox}>
          <p className={styles._text}>UX Research_</p>
          <p className={styles._text}>Desing System_</p>
          <p className={styles._text}>Wireframing_</p>
          <p className={styles._text}>Development_</p>
          <p className={styles._text}>Q/A_</p>
        </div>
      </FadeIn>
    </div>
  );
});

AboutUs.displayName = 'AboutUs'

export default AboutUs;
