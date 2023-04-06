import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../public/resources/logo.svg';
import bananaBy from '../../../public/resources/banana-by.svg';
import behance from '../../../public/resources/behance.svg';
import linkeind from '../../../public/resources/linkedin.svg';
import instagram from '../../../public/resources/instagram.svg';

const Navbar = () => {
  return (
    <div className={styles._content}>
      <div className={styles._imageContainer}>
        <div className={styles._imageBox}>
          <Image src={bananaBy} alt={'bananaBy'} width={130} height={17} quality={100} />
        </div>

        <div className={styles._imageBoxTwo}>
          <Image src={logo} alt={'Banana Tech'} width={173} height={17} quality={100} />
        </div>
        <div className={styles._imageBoxResponsive}>
          <Image src={bananaBy} alt={'bananaBy'} width={90} height={17} quality={100} />
        </div>

        <div className={styles._imageBoxTwoResponsive}>
          <Image src={logo} alt={'Banana Tech'} width={120} height={17} quality={100} />
        </div>
      </div>

      <div className={styles._iconsContainer}>
        <div className={styles._icon}>
          <a href={'https://www.linkedin.com/company/bananacreative/mycompany/'} target='_blank' rel='noreferrer'>
            <Image src={linkeind} alt={'linkeind'} width={19} height={19} quality={100} />
          </a>
        </div>
        <div className={styles._icon}>
          <a
            href={'https://www.behance.net/Bananacreative?tracking_source=search_users%7Cbanana+creative'}
            target='_blank'
            rel='noreferrer'>
            <Image src={behance} alt={'behance'} width={28} height={17} quality={100} />
          </a>
        </div>
        <div className={styles._icon}>
          <a href={'https://www.instagram.com/_bananacreative/'} target='_blank' rel='noreferrer'>
            <Image src={instagram} alt={'instagram'} width={23} height={23} quality={100} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
