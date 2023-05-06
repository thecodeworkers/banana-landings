import React, { forwardRef } from 'react';
import styles from './styles.module.scss';

import { FadeIn } from '@/components';

const Paragraph = forwardRef<HTMLDivElement>((props: any, ref): any => {
  return (
    <div ref={ref}>
      <FadeIn className={styles._paragraphContainer}>
        <p className={styles._paragraph}>
          <b>{props?.bolded}</b> {props?.content}
        </p>
      </FadeIn>
    </div>
  );
});

Paragraph.displayName = 'Paragraph';

export default Paragraph;
