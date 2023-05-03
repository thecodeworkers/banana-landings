import React from 'react';
import styles from './styles.module.scss';

import { FadeIn } from '@/components';

const Paragraph = ({ data }: any) => {
  return (
    <FadeIn className={styles._paragraphContainer}>
      <p className={styles._paragraph}>
        <b>{data?.bolded}</b> {data?.content}
      </p>
    </FadeIn>
  );
};

export default Paragraph;
