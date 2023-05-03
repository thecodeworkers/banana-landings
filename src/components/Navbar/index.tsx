import Image from 'next/image';
import React, { FC, useState } from 'react';
import { scrolling } from '../../utils/common';
import styles from './styles.module.scss';
import logo from '../../../public/resources/logo.svg';
import { Icon } from '@iconify/react';


type Props = {
  refs: {
    aboutUs: any;
    services: any;
    products: any;
    portfolio: any;
    contact: any;
    packs: any;
  };
};

const Navbar: FC<Props> = ({ refs }) => {

  const [show, setShow] = useState<boolean>(false);
  const options = [
    { name: 'About Us', scrollTo: 'aboutUs' },
    { name: 'What we do?', scrollTo: 'services' },
    { name: 'Technologies', scrollTo: 'products' },
    { name: 'Briefcase', scrollTo: 'portfolio' },
    { name: 'Contact Us', scrollTo: 'contact' },
    { name: 'Packs', scrollTo: 'packs' },
  ];

  const handleShowMenu = () => setShow((show) => !show);

  return (
    <>
      <div className={styles._content}>
        <div className={styles._imageBox}>
          <Image src={logo} alt={'Banana Tech'} width={200} height={37} quality={100} />
        </div>
        <div className={styles._imageBoxResponsive}>
          <Image src={logo} alt={'Banana Tech'} width={150} height={26} quality={100} />
        </div>
   
        <div className={styles._textBox}>
          <p className={styles._text} onClick={() => scrolling(refs.aboutUs)}>
            About Us
          </p>

          <p className={styles._text} onClick={() => scrolling(refs.services)}>
            What we do?
          </p>
          <p className={styles._text} onClick={() => scrolling(refs.packs)}>
            Packs
          </p>
          <p className={styles._text} onClick={() => scrolling(refs.products)}>
            Technologies
          </p>
          <p className={styles._text} onClick={() => scrolling(refs.portfolio)}>
            Briefcase
          </p>
          <p className={styles._text} onClick={() => scrolling(refs.contact)}>
            Contact Us
          </p>
        </div>

        <button className={!show ? styles._menuBurguer : styles._closedMenu} onClick={handleShowMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button>

        {
          show && (
            <div className={styles._menu}>
            {options.map((route, index) => (
              <div key={index} className={styles._textContainer}>
                <p className={styles._text} onClick={() => scrolling(route?.scrollTo)}>
                  {route?.name}
                </p>
              </div>
            ))}
          </div>
          )
        }
    
      </div>
    </>
  );
};

export default Navbar;
