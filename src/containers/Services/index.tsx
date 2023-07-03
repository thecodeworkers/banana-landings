import React, { forwardRef, useRef } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './styles.module.scss';
import FadeIn from '../../components/FadeIn';

const Services = forwardRef<HTMLDivElement>((props: any, ref) => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef
  })

  const StandardSVG = useTransform(scrollYProgress, [0, 0.25, 0.5], ['0%', '-70%', '0%']);
  const TextStandardOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 1, 0]);
  const TextStandardTranslate = useTransform(scrollYProgress, [0, 0.25, 0.5], ['10%', '0%', '10%']);
  const CustomSVG = useTransform(scrollYProgress, [0.5, 0.75, 1], ['0%', '-70%', '0%']);
  const TextCustomOpacity = useTransform(scrollYProgress, [0.5, 0.75, 1], [0, 1, 0]);
  const TextCustomTranslate = useTransform(scrollYProgress, [0.5, 0.75, 1], ['10%', '0%', '10%']);

  return (
    <div ref={containerRef} className={styles._main}>
      {/* web */}
      <div ref={ref} className={styles._sticky}>
        <FadeIn className={styles._content}>
          <div className={styles._leftContainer}>
            <motion.div style={{ translateX: StandardSVG }} className={styles._imageLeft}>
              <Image src={props?.standar} alt={props?.altStandar} width={228} height={302} quality={100} />
            </motion.div>
            <motion.div style={{ opacity: TextStandardOpacity, right: TextStandardTranslate }} className={styles._textLeftContainer}>
              <p className={styles?._leftTitle}>{props?.standarTitle}</p>
              {props?.standarTypes?.map((type: string, index: string | number) => (
                <p key={index} className={styles?._text}>
                  {type}
                </p>
              ))}
            </motion.div>
          </div>
          <div className={styles._rightContainer}>
            <motion.div style={{ translateX: CustomSVG }} className={styles._imageRight}>
              <Image src={props?.custom} alt={props?.altSCustom} width={228} height={302} quality={100} />
            </motion.div>

            <motion.div style={{ opacity: TextCustomOpacity, right: TextCustomTranslate }} className={styles._textRightContainer}>
              <p className={styles?._rightTitle}>{props?.customTitle}</p>
              {props?.customTypes?.map((type: string, index: string | number) => (
                <p key={index} className={styles?._text}>
                  {type}
                </p>
              ))}
            </motion.div>
          </div>
        </FadeIn>
      </div>
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
