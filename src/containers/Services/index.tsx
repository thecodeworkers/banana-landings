import Image from 'next/image';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
import services from '../../../public/resources/services.svg';
import customs from '../../../public/resources/customs.svg';
import FadeIn from '../../components/FadeIn';

const Services = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className={styles._main}>
      <FadeIn className={styles._content}>
        <div className={styles._leftContainer}>
          <div className={styles._imageLeft}>
            <Image src={services} alt={'standar'} width={228} height={302} quality={100} />
          </div>
          <div className={styles._imageLeftResponsive}>
            <Image src={services} alt={'standar'} width={148} height={196} quality={100} />
          </div>
          <div className={styles._textLeftContainer}>
            <p className={styles?._leftTitle}>STANDARD</p>
            <p className={styles?._text}>_Landing </p>
            <p className={styles?._text}>_Website</p>
            <p className={styles?._text}>_Blog</p>
            <p className={styles?._text}>_E-commerce</p>
          </div>
        </div>
        <div className={styles._rightContainer}>
          <div className={styles._imageRight}>
            <Image src={customs} alt={'custom'} width={228} height={302} quality={100} />
          </div>
          <div className={styles._imageRightResponsive}>
            <Image src={customs} alt={'custom'} width={148} height={196} quality={100} />
          </div>
          <div className={styles._textRightContainer}>
            <p className={styles?._rightTitle}>CUSTOM</p>
            <p className={styles?._text}>_Mobile Apps </p>
            <p className={styles?._text}>_API’S</p>
            <p className={styles?._text}>_Web Apps</p>
            <p className={styles?._text}>_A.I</p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
});

Services.displayName = 'Services';

export default Services;
