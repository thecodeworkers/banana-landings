import Image from 'next/image';
import React from 'react';
import { scrolling } from '../../utils/common';
import styles from './styles.module.scss';
import logo from '../../../public/resources/logo.svg';
const Navbar = () => {
  return (
    <div className={styles._content}>
      <div className={styles._imageBox}>
        <Image src={logo} alt={'Banana Tech'} width={200} height={37} quality={100} />
      </div>

      <div className={styles._textBox}>
        <p className={styles._text}>About Us</p>
        <p className={styles._text} onClick={() => scrolling('servicesRef')}>
          What we do?
        </p>
        <p className={styles._text}>Technologies</p>
        <p className={styles._text}>Briefcase</p>
        <p className={styles._text}>Contact Us</p>
      </div>
    </div>
  );
};

export default Navbar;
