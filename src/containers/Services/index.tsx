import Image from 'next/image';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
import services from '../../../public/resources/services.svg';
import customs from '../../../public/resources/customs.svg';
import FadeIn from '../../components/FadeIn';

const Services = forwardRef<HTMLDivElement>((props: any, ref) => {
  return (
    <div ref={ref} className={styles._main}>
      {/* web */}
      <FadeIn className={styles._content}>
        <div className={styles._leftContainer}>
          <div className={styles._imageLeft}>
            <Image src={props?.standar} alt={props?.altStandar} width={228} height={302} quality={100} />
          </div>

          <div className={styles._textLeftContainer}>
            <p className={styles?._leftTitle}>{props?.standarTitle}</p>
            {props?.standarTypes?.map((type: string, index: string | number) => (
              <p key={index} className={styles?._text}>
                {type}{' '}
              </p>
            ))}
          </div>
        </div>
        <div className={styles._rightContainer}>
          <div className={styles._imageRight}>
            <Image src={props?.custom} alt={props?.altSCustom} width={228} height={302} quality={100} />
          </div>

          <div className={styles._textRightContainer}>
            <p className={styles?._rightTitle}>{props?.customTitle}</p>
            {props?.customTypes?.map((type: string, index: string | number) => (
              <p key={index} className={styles?._text}>
                {type}{' '}
              </p>
            ))}
          </div>
        </div>
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
                {type}{' '}
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
                {type}{' '}
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
