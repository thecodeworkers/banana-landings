import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';
import banana from '../../../public/resources/banana.svg';
import GeneralButton from '../GeneralButton';

const FirstBanner = () => {
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
        <div className={styles._imageBox}>
          <Image src={banana} alt={'Banana Tech'} width={500} height={800} quality={100} />
        </div>
      </div>
      <div className={styles._paragraphContainer}>
        <p className={styles._paragraph}>
          <b>BANANA TECH</b> IS A TEAM OF EXPERTS FORMED BY SPECIALISTS IN SYSTEM ENGINEERING, UI-UX DESIGN,
          INFRASTRUCTURE AND INFORMATION SECURITY.
        </p>
      </div>
    </div>
  );
};

export default FirstBanner;
