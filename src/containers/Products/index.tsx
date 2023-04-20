import Image from 'next/image';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
import javascript from '../../../public/resources/technologies/js.svg';
import python from '../../../public/resources/technologies/py.svg';
import figma from '../../../public/resources/technologies/figma.svg';
import photo from '../../../public/resources/technologies/ps.svg';
import ilustrator from '../../../public/resources/technologies/ai.svg';
import goland from '../../../public/resources/technologies/go.svg';
import tailwind from '../../../public/resources/technologies/tail.svg';
import sass from '../../../public/resources/technologies/sass.svg';
import gsap from '../../../public/resources/technologies/gsap.svg';
import xd from '../../../public/resources/technologies/xd.svg';
import FadeIn from '../../components/FadeIn';

const Products = forwardRef<HTMLDivElement>((props, ref) => {
  const rowOne = [javascript, python, tailwind, goland, sass, gsap];
  const rowTwo = [figma, photo, ilustrator, xd];

  const rowOneResponsive = [javascript, figma, python];
  const rowTwoResponsive = [photo, ilustrator, xd];
  const rowThreeResponsive = [goland, sass];
  const rowFourResponsive = [tailwind, gsap];

  return (
    <FadeIn className={styles._main}>
      <div ref={ref} className={styles._content}>
        {rowOne.map((logo, index) => (
          <div key={index} className={styles._image}>
            <Image src={logo} alt={`logo${index}`} width={90} height={90} quality={100} />
          </div>
        ))}
      </div>
      <div className={styles._content}>
        <div className={styles._image} />
        {rowTwo.map((logo, index) => (
          <div key={index} className={styles._image}>
            <Image src={logo} alt={`logo${index}`} width={90} height={90} quality={100} />
          </div>
        ))}
        <div className={styles._image} />
      </div>
      <div className={styles._contentResponsive}>
        {rowOneResponsive.map((logo, index) => (
          <div key={index} className={styles._image}>
            <Image src={logo} alt={`logo${index}`} width={90} height={90} quality={100} />
          </div>
        ))}
      </div>
      <div className={styles._contentResponsive}>
        {rowTwoResponsive.map((logo, index) => (
          <div key={index} className={styles._image}>
            <Image src={logo} alt={`logo${index}`} width={90} height={90} quality={100} />
          </div>
        ))}
      </div>
      <div className={styles._contentResponsiveCenter}>
        {rowThreeResponsive.map((logo, index) => (
          <div key={index} className={styles._image}>
            <Image src={logo} alt={`logo${index}`} width={90} height={90} quality={100} />
          </div>
        ))}
      </div>
      <div className={styles._contentResponsive}>
        {rowFourResponsive.map((logo, index) => (
          <div key={index} className={styles._image}>
            <Image src={logo} alt={`logo${index}`} width={150} height={90} quality={100} />
          </div>
        ))}
      </div>
    </FadeIn>
  );
});

Products.displayName = 'Products'

export default Products;
