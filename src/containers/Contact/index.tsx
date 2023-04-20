import React, { forwardRef, useState } from 'react';
import styles from './styles.module.scss';

import { FadeIn, GeneralButton, GeneralInput } from '../../components';

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const onHandle = ({target}: any) => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  return (
    <div ref={ref} className={styles._main}>
      <FadeIn className={styles._content}>
        <div className={styles._textBox}>
          <p className={styles._title}>LETS GET IN TOUCH</p>
          <p className={styles._text}>Avenida Eugenio Mendoza</p>
          <p className={styles._text}>Torre IASA, Piso 8 Oficina 802-A</p>
          <p className={styles._text}>La Castellana, Caracas, Venezuela</p>
          <p className={styles._text}>+1 (786) 819-1151</p>
          <p className={styles._text}>+58 412-6350200</p>
        </div>
        <div className={styles._formContainer}>
          <form className={styles._form}>
            <div className={styles._input}>
              <GeneralInput name={'name'} value={form.name} placeholder={'Company o startup*'} onHandle={onHandle} />
            </div>
            <div className={styles._input}>
              <GeneralInput name={'email'} value={form.email} placeholder={'Email*'} onHandle={onHandle} />
            </div>
            <div className={styles._input}>
              <GeneralInput name={'subject'} value={form.subject} placeholder={'Subject*'} onHandle={onHandle} />
            </div>
            <div className={styles._input}>
              <GeneralInput name={'message'} value={form.message} placeholder={'Message*'} onHandle={onHandle} />
            </div>
            <div className={styles._buttonContainer}>
              <GeneralButton text={'Send'} />
            </div>
          </form>
        </div>
      </FadeIn>
    </div>
  );
});

Contact.displayName = 'Contact'

export default Contact;
