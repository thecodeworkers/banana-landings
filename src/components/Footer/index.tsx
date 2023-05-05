import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../public/resources/logo.svg';
import bananaBy from '../../../public/resources/banana-by.svg';
import behance from '../../../public/resources/behance.svg';
import linkeind from '../../../public/resources/linkedin.svg';
import instagram from '../../../public/resources/instagram.svg';

const Footer = ({ copyright, phone, media }: any) => {
  return (
    <div className={styles._content}>
      <div className={styles._textBox}>
        <div className={styles._textContainer}>
          <p className={styles._text}>{phone}</p>
        </div>

        <div className={styles._textContainer}>
          <p className={styles._text}>{copyright}</p>
        </div>
      </div>
      <div className={styles._iconsContainer}>
        {media?.map((media: any, index: number | string) => (
          <div key={index} className={styles._icon}>
            <a href={media?.link} target='_blank' rel='noreferrer'>
              <Image src={media?.image} alt={media?.alt} width={19} height={19} quality={100} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
