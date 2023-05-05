import Image from 'next/image';
import React, { FC, useState } from 'react';
import { scrolling } from '../../utils/common';
import styles from './styles.module.scss';
import logo from '../../../public/resources/logo.svg';

type Props = {
  data: any;
  refs: {
    aboutUs: any;
    services: any;
    products: any;
    portfolio: any;
    contact: any;
    packs: any;
  };
};

type Option = {
  name: string;
  scrollTo: string;
};

type ScrollOption = {
  aboutUs: any;
  services: any;
  products: any;
  portfolio: any;
  contact: any;
  packs: any;
};

const Navbar: FC<Props> = ({ data, refs }) => {
  const [show, setShow] = useState<boolean>(false);
  const options: Option[] = [
    { name: 'About Us', scrollTo: 'aboutUs' },
    { name: 'What we do?', scrollTo: 'services' },
    { name: 'Packs', scrollTo: 'packs' },
    { name: 'Technologies', scrollTo: 'products' },
    { name: 'Briefcase', scrollTo: 'portfolio' },
    { name: 'Contact Us', scrollTo: 'contact' },
  ];

  const handleShowMenu = () => setShow((show) => !show);

  return (
    <>
      <div className={styles._navbar}>
        <div className={styles._content}>
          <div className={styles._imageBox}>
            <Image src={logo} alt={'Banana Tech'} width={200} height={37} quality={100} />
          </div>
          <div className={styles._imageBoxResponsive}>
            <Image src={logo} alt={'Banana Tech'} width={150} height={26} quality={100} />
          </div>

          <div className={styles._textBox}>
            {data?.routes?.map((route: any, index: number | string) => (
              <p key={index} className={styles._text} onClick={() => scrolling(refs[route?.ref as keyof ScrollOption])}>
                {route?.name}
              </p>
            ))}
          </div>

          <button className={!show ? styles._menuBurguer : styles._closedMenu} onClick={handleShowMenu}>
            <div></div>
            <div></div>
            <div></div>
          </button>

          {show && (
            <div className={styles._menu}>
              {options.map(({ name, scrollTo }: Option, index) => (
                <div key={index} className={styles._textContainer}>
                  <p
                    className={styles._text}
                    onClick={() => {
                      scrolling(refs[scrollTo as keyof ScrollOption]);
                      setShow(false);
                    }}>
                    {name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
