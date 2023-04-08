import React from 'react';
import styles from './styles.module.scss';

import { FadeIn, GeneralButton, GeneralInput } from '../';

const Contact = () => {
  return (
    <div className={styles._main}>
      <FadeIn className={styles._content}>
        <div className={styles._textBox}>
          <p className={styles._title}>LETS GET IN TOUCH</p>
          <p className={styles._text}>Avenida Eugenio Mendoza</p>
          <p className={styles._text}>Torre IASA, Piso 8 Oficina 802-A</p>
          <p className={styles._text}>La Castellana, Caracas, Venezuela</p>
        </div>
        <div className={styles._formContainer}>
          <form className={styles._form}>
            <div className={styles._input}>
              <GeneralInput name={'name'} value={''} placeholder={'Company o startup*'} onhandle={() => {}} />
            </div>
            <div className={styles._input}>
              <GeneralInput name={'email'} value={''} placeholder={'Email*'} onhandle={() => {}} />
            </div>
            <div className={styles._input}>
              <GeneralInput name={'name'} value={''} placeholder={'Subject*'} onhandle={() => {}} />
            </div>
            <div className={styles._input}>
              <GeneralInput name={'name'} value={''} placeholder={'Message*'} onhandle={() => {}} />
            </div>
            <div className={styles._buttonContainer}>
              <GeneralButton text={'Send'} />
            </div>
          </form>
        </div>
      </FadeIn>
    </div>
  );
};

export default Contact;
