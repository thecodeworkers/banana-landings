import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
import useTranslation from "next-translate/useTranslation";

import { FadeIn } from '@/components';

const Paragraph = forwardRef<HTMLDivElement>((props: any, ref): any => {
  const { t } = useTranslation("common");

  return (
    <div ref={ref}>
      <FadeIn className={styles._paragraphContainer}>
        <p className={styles._paragraph}>
          <b>{t(props?.bolded)}</b> {t(props?.content)}
        </p>
      </FadeIn>
    </div>
  );
});

Paragraph.displayName = 'Paragraph';

export default Paragraph;
