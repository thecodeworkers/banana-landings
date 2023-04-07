import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';

import crystal from '../../../public/resources/crystal.svg';

const SecondBanner = () => {
  return (
    <div className={styles._main}>
      <div className={styles._content}>
        <div className={styles._textBox}>
          <div className={styles._backgroundImage}>
            <Image src={crystal} alt={'arrow'} width={470} height={332} quality={100} />
          </div>
          <div className={styles._backgroundImageResponsive}>
            <Image src={crystal} alt={'arrow'} width={400} height={300} quality={100} />
          </div>
          <p className={styles._title}>
            WE CREATE <span>FUNCTIONAL & BEAUTIFUL </span>WEBSITES
          </p>
        </div>
        <div className={styles._rightBox}>
          <p className={styles._text}>UX Research_</p>
          <p className={styles._text}>Desing System_</p>
          <p className={styles._text}>Wireframing_</p>
          <p className={styles._text}>Development_</p>
          <p className={styles._text}>Q/A_</p>
        </div>
      </div>
      <div className={styles._paragraphContainer}>
        <p className={styles._paragraph}>
          THERE’S TWO WAYS TO APROACH YOUR PROJECT, CHOOSE THE ONE THAT BEST FITS YOUR NEEDS
        </p>
      </div>
    </div>
  );
};

export default SecondBanner;
