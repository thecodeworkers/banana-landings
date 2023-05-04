import Image from 'next/image';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
import FadeIn from '../../components/FadeIn';

const Products = forwardRef<HTMLDivElement>((props: any, ref) => {
  return (
    <FadeIn className={styles._main}>
      <div ref={ref} className={styles._content}>
        {props?.logos?.map((logo: any, index: number | string) => (
          <div key={index} className={styles._image}>
            {logo?.image !== '' && <Image src={logo?.image} alt={logo?.alt} width={90} height={90} quality={100} />}
          </div>
        ))}
      </div>
      <div className={styles._contentResponsive}>
        {props?.logos?.map((logo: any, index: number | string) => (
          <div key={index} className={styles._image}>
            {logo?.image !== '' && <Image src={logo?.image} alt={logo?.alt} width={90} height={90} quality={100} />}
          </div>
        ))}
      </div>
    </FadeIn>
  );
});

Products.displayName = 'Products';

export default Products;
