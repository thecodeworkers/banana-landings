import Image from 'next/image';
import React, { FC, useState } from 'react';
import { scrolling } from '../../utils/common';
import styles from './styles.module.scss';
import PopUp from '../PopUp';

type Props = {
  data: any;
  refs: {
    aboutUs: any;
    services: any;
    products: any;
    portfolio: any;
    contact: any;
    packs: any;
    weDo: any;
  };
  popup?: any
};

type ScrollOption = {
  aboutUs: any;
  services: any;
  products: any;
  portfolio: any;
  contact: any;
  packs: any;
  weDo: any;
};

const Navbar: FC<Props> = ({ data, refs, popup }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleShowMenu = () => setShow((show) => !show);

  return (
    <>
      <div className={styles._navbar}>
        <PopUp {...popup} />
        <div className={styles._content}>
          <div className={styles._imageBox}>
            <Image src={data?.image} alt={data?.alt} width={200} height={37} quality={100} />
          </div>
          <div className={styles._imageBoxResponsive}>
            <Image src={data?.image} alt={data?.alt} width={150} height={26} quality={100} />
          </div>

          <div className={styles._textBox}>
            <a className={styles._text} href={data?.home?.link}>
              {data?.home?.name}
            </a>
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
              {data?.routes?.map((route: any, index: number | string) => (
                <div key={index} className={styles._textContainer}>
                  <p
                    className={styles._text}
                    onClick={() => {
                      scrolling(refs[route?.ref as keyof ScrollOption]);
                      setShow(false);
                    }}>
                    {route?.name}
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
