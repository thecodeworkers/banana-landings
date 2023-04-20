import React, { forwardRef, useState } from 'react';
import styles from './styles.module.scss';
import { FormikConfig } from './formik';
import { FadeIn, GeneralButton, GeneralInput } from '@/components';

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const handleSubmit = (formValues: any) => {
    console.log(formValues);
    window.open(
      `https://api.whatsapp.com/send?phone=+584126350200&text=!Hi team Banana! I would like more information about your products and services, I have attached my contact information. Company: ${formValues?.company} , Email: ${formValues?.email} , Subject: ${formValues?.subject} , Message: ${formValues?.message}`,
    );
    resetForm();
  };

  const {
    values,
    handleSubmit: formikSubmit,
    handleChange,
    errors,
    resetForm,
    touched,
    setTouched,
  } = FormikConfig(handleSubmit);

  const handleOnTouched = (key: string) => {
    setTouched({ ...touched, [key]: true });
  };

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
          <form className={styles._form} onSubmit={formikSubmit}>
            <div className={styles._input}>
              <GeneralInput
                name={'company'}
                id={'company'}
                value={values?.company}
                onChange={handleChange}
                onFocus={() => handleOnTouched('company')}
                placeholder={'Company o startup*'}
                error={errors.company && touched.company ? true : false}
                errorMessage={errors?.company}
              />
            </div>

            <div className={styles._input}>
              <GeneralInput
                name={'email'}
                id={'email'}
                value={values?.email}
                onFocus={() => handleOnTouched('email')}
                placeholder={'Email*'}
                onChange={handleChange}
                error={errors.email && touched.email ? true : false}
                errorMessage={errors?.email}
              />
            </div>
            <div className={styles._input}>
              <GeneralInput
                name={'subject'}
                id={'subject'}
                value={values?.subject}
                placeholder={'Subject*'}
                onFocus={() => handleOnTouched('subject')}
                onChange={handleChange}
                error={errors.subject && touched.subject ? true : false}
                errorMessage={errors?.subject}
              />
            </div>
            <div className={styles._input}>
              <GeneralInput
                name={'message'}
                id={'message'}
                value={values?.message}
                placeholder={'Message*'}
                onFocus={() => handleOnTouched('message')}
                onChange={handleChange}
                error={errors.message && touched.message ? true : false}
                errorMessage={errors?.message}
              />
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

Contact.displayName = 'Contact';

export default Contact;
