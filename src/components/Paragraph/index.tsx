import React from 'react';
import styles from './styles.module.scss';

import FadeIn from '../FadeIn';

const Paragraph = ({ content, bolded }: any) => {
  return (
    <FadeIn className={styles._paragraphContainer}>
      <p className={styles._paragraph}>
        <b>{bolded}</b> {content}
      </p>
    </FadeIn>
  );
};

export default Paragraph;
