import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';
import puntu from '../../../public/resources/portfolio/puntu.png';
// import puntuHover from '../../../public/resources/portfolio/puntu-hover.gif';
import vippo from '../../../public/resources/portfolio/vippo.png';
// import vippoHover from '../../../public/resources/portfolio/vippo-hover.gif'; d
import graysquare from '../../../public/resources/graysquare.png';
import GeneralButton from '../GeneralButton';
import FadeIn from '../FadeIn';

const Portfolio = () => {
  return (
    <div className={styles._main}>
      <FadeIn className={styles._content}>
        <div className={styles._imageLeftContainer}>
          <p className={styles._text}>Puntu</p>
          <Image className={styles._image} src={puntu} width={500} height={349} alt={'puntu'} quality={100} />
          {/* <Image className={styles.hover_image} src={puntuHover} width={500} height={349} alt={'puntu'} quality={100} /> */}
        </div>
        <div className={styles._imageRightContainer}>
          <p className={styles._text}>Vippo</p>
          <Image className={styles._image} src={vippo} width={500} height={349} alt={'vippo'} quality={100} />
          {/* <Image className={styles.hover_image} src={vippoHover} width={500} height={349} alt={'vippo'} quality={100} /> */}
        </div>

        <div className={styles._imageLeftContainerResponsive}>
          <p className={styles._text}>Puntu</p>
          <Image className={styles._image} src={puntu} width={350} height={250} alt={'puntu'} quality={100} />
          {/* <Image className={styles.hover_image} src={puntuHover} width={350} height={250} alt={'puntu'} quality={100} /> */}
        </div>
        <div className={styles._imageRightContainerResponsive}>
          <p className={styles._text}>Vippo</p>
          <Image className={styles._image} src={vippo} width={350} height={250} alt={'vippo'} quality={100} />
          {/* <Image className={styles.hover_image} src={vippoHover} width={350} height={250} alt={'vippo'} quality={100} /> */}
        </div>
      </FadeIn>
      <FadeIn className={styles._content}>
        <div className={styles._imageLeftContainer}>
          <p className={styles._text}>Banco Activo</p>
          <Image className={styles._image} src={graysquare} width={500} height={349} alt={'activo'} quality={100} />
          <Image
            className={styles.hover_image}
            src={graysquare}
            width={500}
            height={349}
            alt={'activo'}
            quality={100}
          />
        </div>
        <div className={styles._imageRightContainer}>
          <p className={styles._text}>Sudeca</p>
          <Image className={styles._image} src={graysquare} width={500} height={349} alt={'activo'} quality={100} />
          <Image className={styles.hover_image} src={graysquare} width={500} height={349} alt={'vippo'} quality={100} />
        </div>
      </FadeIn>
      {/* <div className={styles._buttonContainer}>
        <GeneralButton text={'See more'} />
      </div> */}
    </div>
  );
};

export default Portfolio;
