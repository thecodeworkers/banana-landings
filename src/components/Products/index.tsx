import Image from 'next/image';
import React from 'react';
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
