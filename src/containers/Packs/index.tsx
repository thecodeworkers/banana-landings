import React, { forwardRef } from 'react';
import { FadeIn, GeneralButton } from '@/components';
import { Icon } from '@iconify/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.scss';

const Packs = forwardRef<HTMLDivElement>((props, ref) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      }
    ]
  };
  
  const packages = [
    {
      title: 'One page',
      text: 'From $1.425',
      props: [
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'TEMPLATE COMPRISING A SINGLE VIEW WITH A MINIMUM OF 4 SECTIONS AND A MAXIMUM OF 8 SECTIONS',
        },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'WORDPRESS TEMPLATE' },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'TEMPLATE COMPRISING 5 VIEWS AND 4 SECTIONS PER VIEW',
        },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'BANNER CUSTOMIZATION FOR ALL VIEWS' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'FONT CUSTOMIZATION' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'ICON MODIFICATION' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'CONTACT FORM' },
        { icon: 'material-symbols:check', color: '#D380FF', name: "WEBSITE'S LOOK AND FEEL" },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: "WEBSITE'S COPIES",
        },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'WEB INTERACTIONS WILL BE BASED ON THOSE PROVIDED BY THE DEFAULT TEMPLATE MANUAL ON HOW TO MANAGE THE PLATFORM',
        },
      ],
    },
    {
      title: 'Landing Page',
      text: 'From $2.250',
      props: [
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'TEMPLATE COMPRISING 5 VIEWS AND 4 SECTIONS PER VIEW',
        },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'WORDPRESS TEMPLATE' },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'TEMPLATE COMPRISING 5 VIEWS AND 4 SECTIONS PER VIEW',
        },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'BANNER CUSTOMIZATION FOR ALL VIEWS' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'FONT CUSTOMIZATION' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'ICON MODIFICATION' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'CONTACT FORM' },
        { icon: 'material-symbols:check', color: '#D380FF', name: "WEBSITE'S LOOK AND FEEL" },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: "WEBSITE'S COPIES",
        },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'WEB INTERACTIONS WILL BE BASED ON THOSE PROVIDED BY THE DEFAULT TEMPLATE MANUAL ON HOW TO MANAGE THE PLATFORM',
        },
      ],
    },
    {
      title: 'E- commerce',
      text: 'From $3.200  ',
      props: [
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'TEMPLATE INCLUDING MAIN PAGE, SHOP, INDIVIDUAL PRODUCT, CART AND PAYMENT GATEWAY (9 TO 11 VIEWS)',
        },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'SHOPIFY TEMPLATE' },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'CUSTOMIZATION OF BANNERS FOR ALL VIEWS (DESIGNED FOR WEB AND RESPONSIVE)',
        },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'FONT CUSTOMIZATION (NEW FONTS APPLIED TO THE BRAND)',
        },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'ICON MODIFICATION (ICONS DESIGNED FOR THE BRAND)' },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'LOOK AND FEEL OF THE ENTIRE WEB (VIDEO WITH THE DESIGN PROPOSAL OF THE ENTIRE WEB BEFORE PROCEEDING TO DEVELOPMENT)',
        },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'CONTACT FORM' },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'WEB INTERACTIONS WILL BE BASED ON THOSE PROVIDED BY THE DEFAULT TEMPLATE MANUAL ON HOW TO MANAGE THE PLATFORM',
        },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: "WEBSITE'S COPIES",
        },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'WEBSITE ELEMENTS' },
        { icon: 'material-symbols:check', color: '#D380FF', name: '50 PRODUCTS UPLOADS' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'MANUAL ON HOW TO ADMINISTRATE THE PLATFORM' },
      ],
    },
  ];
  
  return (
    <div ref={ref} className={styles._main}>
      <FadeIn>
        <p className={styles._title}>PACKS</p>
          <div className={styles._packages}>
          <Slider {...settings}>
              {packages.map((pack, index) => (
                <div key={index} style={{ width: `${100 / packages.length}%` }} className={styles._packageContainer}>
                  <div className={styles._packageContent}>
                    <div className={styles._textContent}>
                      <p className={styles._packTitle}>{pack?.title}</p>
                      <p className={styles._packSubTitle}>{pack?.text}</p>
                      <div className={styles._divider} />
                    </div>
                    <div className={styles._packagesTextContent}>
                      {pack?.props.map((prop, idx) => (
                        <div key={idx} className={styles._propContainer}>
                          <Icon icon={prop?.icon} color={prop?.color} width={22} height={22} />
                          <p className={prop?.icon == 'material-symbols:close' ? styles._disableText : styles._text}>
                            {prop?.name}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className={styles._buttonMainContainer}>
                      <div className={styles._buttonContainer}>
                        <GeneralButton text={'Book a Call'} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
          </div>
      </FadeIn>
    </div>
  );
});
Packs.displayName = 'Packs';

export default Packs;
