import Image from 'next/image';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
import FadeIn from '../../components/FadeIn';

const Portfolio = forwardRef<HTMLDivElement>((props: any, ref) => {
  return (
    <div ref={ref} className={styles._main}>
      <FadeIn className={styles._content}>
        {props?.projects?.map((project: any, index: string | number) => (
          <div key={index} className={styles._imageContainer}>
            <a href={project?.link} target='_blank' rel='noreferrer'>
              <p className={project?.name !== 'empty' ? styles._text : styles._emptyText}>{project?.name}</p>

              <div className={styles._imageLeftContent} style={{ backgroundColor: project?.backgroundColor }}>
                <div className={styles._imageBox}>
                  {project?.name !== 'empty' && <Image src={project?.image} fill alt={project?.alt} quality={100} />}
                </div>
                <div className={styles._imageHoverBox}>
                  {project?.name !== 'empty' && (
                    <Image src={project?.hoverImage} fill alt={project?.alt} quality={100} />
                  )}
                </div>
              </div>
            </a>
          </div>
        ))}
      </FadeIn>
    </div>
  );
});

Portfolio.displayName = 'Portfolio';

export default Portfolio;
