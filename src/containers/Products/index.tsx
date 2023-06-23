import Image from 'next/image';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
import FadeIn from '../../components/FadeIn';
import Slider from 'react-slick';

const Products = forwardRef<HTMLDivElement>((props: any, ref) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div ref={ref} className={styles._main}>
      <FadeIn>
        <div className={styles._content}>
          {props?.logos?.map((logo: any, index: number | string) => (
            <div key={index} className={styles._image}>
              {logo?.image !== '' && <Image src={logo?.image} alt={logo?.alt} width={90} height={90} quality={100} />}
            </div>
          ))}
        </div>
        <div className={styles._contentResponsive}>
          <Slider {...settings}>
            {props?.logos?.map((logo: any, index: number | string) => {
              if (logo?.image !== '') {
                return (
                  <div key={index} className={styles._image}>
                    <Image src={logo?.image} alt={logo?.alt} width={72} height={72} quality={100} />
                  </div>
                );
              }

              return null;
            })}
          </Slider>
        </div>
      </FadeIn>
    </div>
  );
});

Products.displayName = 'Products';

export default Products;
