import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';
import javascript from '../../../public/resources/js.svg';
import python from '../../../public/resources/py.svg';
import figma from '../../../public/resources/figma.svg';
import photo from '../../../public/resources/ps.svg';
import ilustrator from '../../../public/resources/ai.svg';
import goland from '../../../public/resources/go.svg';
import tailwind from '../../../public/resources/tail.svg';
import sass from '../../../public/resources/sass.svg';
import gsap from '../../../public/resources/gsap.svg';
import xd from '../../../public/resources/xd.svg';

const Products = () => {
  const rowOne = [javascript, python, tailwind, goland, sass, gsap];
  const rowTwo = [figma, photo, ilustrator, xd];

  return (
    <div className={styles._main}>
      <div className={styles._content}>
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
    </div>
  );
};

export default Products;
