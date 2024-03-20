import Image from 'next/image';
import React, { FC, useState } from 'react';
import { scrolling } from '../../utils/common';
import styles from './styles.module.scss';
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";

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

const Navbar: FC<Props> = ({ data, refs }) => {
  const [show, setShow] = useState<boolean>(false);
  const { t } = useTranslation("common");
  const language = t("language");

  const ChangeLang = () => {
    if (language === "ENG") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  };

  const handleShowMenu = () => setShow((show) => !show);

  const goTo = () => {
    window.open(data?.home?.link)
  }

  return (
    <>
      <div className={styles._navbar}>
        <div className={styles._content}>
          <div className={styles._imageBox}>
            <Image src={data?.image} alt={data?.alt} width={200} height={37} quality={100} />
          </div>
          <div className={styles._imageBoxResponsive}>
            <Image src={data?.image} alt={data?.alt} width={150} height={26} quality={100} />
          </div>

          <div className={styles._textBox}>
            <a className={styles._text} href={data?.home?.link}>
              {t(data?.home?.name)}
            </a>
            {data?.routes?.map((route: any, index: number | string) => (
              <p key={index} className={styles._text} onClick={() => scrolling(refs[route?.ref as keyof ScrollOption])}>
                {t(route?.name)}
              </p>
            ))}
            <button className={styles._textLang} onClick={() => ChangeLang()}>
              {language}
            </button>
          </div>

          <button className={!show ? styles._menuBurguer : styles._closedMenu} onClick={handleShowMenu}>
            <div></div>
            <div></div>
            <div></div>
          </button>

          {show && (
            <div className={styles._menu}>
              <div className={styles._textContainer}>
                <p className={styles._text} onClick={()=>goTo()}>
                  {t(data?.home?.name)}
                </p>
              </div>
              {data?.routes?.map((route: any, index: number | string) => (
                <div key={index} className={styles._textContainer}>
                  <p
                    className={styles._text}
                    onClick={() => {
                      scrolling(refs[route?.ref as keyof ScrollOption]);
                      setShow(false);
                    }}>
                    {t(route?.name)}
                  </p>
                </div>
              ))}
              <button className={styles._textLang} onClick={() => ChangeLang()}>
                {t("language")}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
