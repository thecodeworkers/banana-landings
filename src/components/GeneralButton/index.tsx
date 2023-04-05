import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import arrowRight from '../../../public/resources/arrow-right.svg';
const GeneralButton = ({ text, method }: any) => {
  return (
    <div className={styles._buttonContainer} onClick={method}>
      <div className={styles._button}>
        <div className={styles._textContainer}>
          <p className={styles._text}>{text}</p>
        </div>

        <div className={styles._image}>
          <Image src={arrowRight} alt={'arrow'} width={15} height={15} quality={100} />
        </div>
      </div>
    </div>
  );
};

export default GeneralButton;
