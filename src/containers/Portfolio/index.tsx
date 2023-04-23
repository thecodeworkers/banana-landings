import Image from 'next/image';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';

import puntu from '../../../public/resources/portfolio/puntu.svg';
import puntuHover from '../../../public/resources/portfolio/puntu-hover.gif';
import vippo from '../../../public/resources/portfolio/vippo.svg';
import vippoHover from '../../../public/resources/portfolio/vippo-hover.gif';

import pix from '../../../public/resources/portfolio/pix.svg';
import pixHover from '../../../public/resources/portfolio/puntu-hover.gif';
import expomorro from '../../../public/resources/portfolio/expomorro.svg';
import expomorroHover from '../../../public/resources/portfolio/vippo-hover.gif';

import FadeIn from '../../components/FadeIn';

const Portfolio = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className={styles._main}>
      <FadeIn className={styles._content}>
        <div className={styles._imageLeftContainer}>
          <p className={styles._text}>Puntu</p>

          <div className={styles._imageLeftContent} style={{ backgroundColor: '#E6427A' }}>
            <div className={styles._imageBox}>
              <Image src={puntu} fill alt={'puntu'} quality={100} />
            </div>
            <div className={styles._imageHoverBox}>
              <Image src={puntuHover} fill alt={'puntu'} quality={100} />
            </div>
          </div>
        </div>

        <div className={styles._imageRightContainer}>
          <p className={styles._text}>Vippo</p>
          <div className={styles._imageRightContent} style={{ backgroundColor: '#A5BC51' }}>
            <div className={styles._imageBox}>
              <Image src={vippo} fill alt={'vippo'} quality={100} />
            </div>
            <div className={styles._imageHoverBox}>
              <Image src={vippoHover} fill alt={'vippo'} quality={100} />
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn className={styles._content}>
        <div className={styles._imageLeftContainer}>
          <p className={styles._text}>Pix</p>

          <div className={styles._imageLeftContent} style={{ backgroundColor: '#57D6AF' }}>
            <div className={styles._imageBox}>
              <Image src={pix} fill alt={'pix'} quality={100} />
            </div>
            <div className={styles._imageHoverBox}>
              <Image src={pixHover} fill alt={'pix'} quality={100} />
            </div>
          </div>
        </div>

        <div className={styles._imageRightContainer}>
          <p className={styles._text}>Vippo</p>
          <div className={styles._imageRightContent} style={{ backgroundColor: '#559FAB' }}>
            <div className={styles._imageBox}>
              <Image src={expomorro} fill alt={'expomorro'} quality={100} />
            </div>
            <div className={styles._imageHoverBox}>
              <Image src={expomorroHover} fill alt={'expomorro'} quality={100} />
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
});

Portfolio.displayName = 'Portfolio';

export default Portfolio;
