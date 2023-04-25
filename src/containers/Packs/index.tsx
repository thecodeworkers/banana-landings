import React from 'react';
import styles from './styles.module.scss';
import { FadeIn, GeneralButton } from '@/components';
import { Icon } from '@iconify/react';

const Packs = () => {
  const packages = [
    {
      title: 'One page',
      text: 'A partir de $1.425',
      props: [
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Plantilla que comprende 4 secciones por vista' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Plantilla de wordpress' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Personalización de banners para todas las vistas' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Personalización de tipografías ' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Modificación de iconos' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Formulario de contacto' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Look and feel de la web' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Copy de la web' },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'Las interacciones web serán en base a las que trae la plantilla por defecto',
        },
        { icon: 'material-symbols:close', color: '#BCE5A1', name: 'Manual de como administrar la plataforma' },
      ],
    },
    {
      title: 'Landing Page',
      text: 'A partir de $2.250',
      props: [
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Plantilla que comprende 4 secciones por vista' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Plantilla de wordpress' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Personalización de banners para todas las vistas' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Personalización de tipografías ' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Modificación de iconos' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Formulario de contacto' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Look and feel de la web' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Copy de la web' },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'Las interacciones web serán en base a las que trae la plantilla por defecto',
        },
        { icon: 'material-symbols:close', color: '#BCE5A1', name: 'Manual de como administrar la plataforma' },
      ],
    },
    {
      title: 'E- commerce',
      text: 'A patir de $3.200',
      props: [
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Plantilla que comprende 4 secciones por vista' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Plantilla de wordpress' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Personalización de banners para todas las vistas' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Personalización de tipografías ' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Modificación de iconos' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Formulario de contacto' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Look and feel de la web' },
        { icon: 'material-symbols:check', color: '#D380FF', name: 'Copy de la web' },
        {
          icon: 'material-symbols:check',
          color: '#D380FF',
          name: 'Las interacciones web serán en base a las que trae la plantilla por defecto',
        },
        { icon: 'material-symbols:close', color: '#BCE5A1', name: 'Manual de como administrar la plataforma' },
      ],
    },
  ];
  return (
    <FadeIn className={styles._main}>
      <p className={styles._title}>PACKS</p>
      <div className={styles._packages}>
        {packages.map((pack, index) => (
          <div key={index} style={{ width: `100% /${packages?.length}` }} className={styles._packageContainer}>
            <p className={styles._packTitle}>{pack?.title}</p>
            <p className={styles._packSubTitle}>{pack?.text}</p>
            <div className={styles._divider} />
            {pack?.props.map((prop, idx) => (
              <div key={idx} className={styles._propContainer}>
                <Icon icon={prop?.icon} color={prop?.color} width={22} height={22} />
                <p className={prop?.icon == 'material-symbols:close' ? styles._disableText : styles._text}>
                  {prop?.name}
                </p>
              </div>
            ))}
            <div className={styles._buttonContainer}>
              <GeneralButton text={'Book a Call'} />
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default Packs;
