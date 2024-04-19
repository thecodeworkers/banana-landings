import Image from 'next/image';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
import FadeIn from '../../components/FadeIn';
import useTranslation from 'next-translate/useTranslation';

const AboutUs = forwardRef<HTMLDivElement>((props: any, ref): any => {
  const { t } = useTranslation('common');

  return (
    <div ref={ref} className={styles._main}>
      <FadeIn className={styles._content}>
        <div className={styles._textBox}>
          <div className={styles._backgroundImage}>
            <Image
              src={props?.image}
              alt={props?.altImage}
              width={props?.imageWidth}
              height={props?.imageHeight}
              quality={100}
            />
          </div>
          <div className={styles._backgroundImageResponsive}>
            <Image
              src={props?.image}
              alt={props?.altImage}
              width={props?.imageWidthResponsive}
              height={props?.imageHeightResponsive}
              quality={100}
            />
          </div>
          <p className={styles._title}>
            {t(props?.firstTitle)} 
            <br/>
            {t(props?.boldedSecond) == "true" ? <span style={{ color: props?.boldColor }}>{t(props?.firstBold)}</span> : t(props?.firstBold)}
            <br/>
            {t(props?.boldedThird) == "true" ? <span style={{ color: props?.boldColor }}> {t(props?.secondBold)} </span> : t(props?.secondBold)}
            <br/>
            {t(props?.boldedFourth)  == "true" ? (
              <span style={{ color: props?.boldColor }}>{t(props?.secondTitle)}</span>
            ) : (
              t(props?.secondTitle)
            )}
          </p>
        </div>
        <div className={styles._rightBox}>
          {props?.phases?.map((phase: string, index: string | number) => (
            <p key={index} className={styles._text}>
              {t(phase)}
            </p>
          ))}
        </div>
      </FadeIn>
    </div>
  );
});

AboutUs.displayName = 'AboutUs';

export default AboutUs;
