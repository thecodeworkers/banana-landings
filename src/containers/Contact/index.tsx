import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
import { FormikConfig } from './formik';
import { Footer, GeneralButton, GeneralInput } from '@/components';
import { useAnimate } from 'framer-motion';
import { Icon } from '@iconify/react';
import useTranslation from "next-translate/useTranslation";

const Contact = forwardRef<HTMLDivElement>((props: any, ref) => {
  const { t } = useTranslation("common");

  const handleSubmit = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${props?.phone}&text=${t(props?.contactMessage)} Company: ${values?.company} , Email: ${values?.email} , Subject: ${values?.subject}`,
    );
    resetForm();
  };

  const bookACall = () => {
    window.open(`https://wkf.ms/442Kkju`);
  };

  const goToWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?phone=${props?.phone}&text=%C2%A1Hola!%20Estuve%20revisando%20su%20web%20y%20me%20encantar%C3%ADa%20desarrollar%20un%20proyecto%C2%A0con%C2%A0ustedes.`);
  };

  const [form, animateForm] = useAnimate();
  const [haveProject, animateProject] = useAnimate();

  const messages: string[] = [t(props?.requiredMessages?.[0]), t(props?.requiredMessages?.[1])];

  const {
    values,
    handleSubmit: formikSubmit,
    handleChange,
    errors,
    resetForm,
    touched,
    setTouched
  } = FormikConfig(handleSubmit, messages);

  const handleOnTouched = (key: string) => {
    setTouched({ ...touched, [key]: true });
  };

  const toForm = () => {
    animateForm(form.current, { left: 0 }, { duration: 0.75, ease: 'linear', type: 'spring' });
    animateProject(haveProject.current, { left: '-100vw' }, { duration: 0.75, ease: 'linear', type: 'spring' });
  };

  const toHaveProject = () => {
    animateForm(form.current, { left: '100vw' }, { duration: 0.75, ease: 'linear', type: 'spring' });
    animateProject(haveProject.current, { left: 0 }, { duration: 0.75, ease: 'linear', type: 'spring' });
  };

  type FormType = {
    key: 'company' | 'email' | 'subject';
    name: string;
  };

  return (
    <div ref={ref} className={styles._main}>
      <div className={styles._content}>
        {/* Have a Project */}
        <div ref={haveProject} className={styles._animationHaveProjectWrapper}>
          <div className={styles._haveProjectWrapper}>
            <div className={styles._haveProject}>
              <p className={styles._haveProjectText}>{t(props?.gotTitle)}</p>
              <div className={styles._haveProjectButtons}>
                <div className={styles._button}>
                  <GeneralButton text={t(props?.touchButton)} ignoreTheme method={()=>goToWhatsApp()} />
                </div>
                <div className={styles._button}>
                  <GeneralButton method={() => bookACall()} ignoreTheme text={t(props?.callButton)} />
                </div>
              </div>
            </div>

            <Footer
              media={props?.media}
              phone={props?.phone}
              copyright={props?.copyright}
              mediaText={props?.mediaText}
              message={t(props?.haveProjectMessage)}
              mail={props?.email}
            />
          </div>
        </div>
        {/* Form */}
        <div ref={form} className={styles._animationFormWrapper}>
          <div className={styles._formWrapper}>
            <div className={styles._textBox}>
              <p className={styles._goBack} onClick={toHaveProject}>
                <Icon icon='mdi:arrow-left' width={22} />
                {t(props?.goBackText)}
              </p>
              <p className={styles._title}>{t(props?.contactTitle)}</p>
              <div className={styles._textContainer}>
                {props?.address?.map((address: any, index: number | string) => (
                  <p key={index} className={styles._text}>
                    {address}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles._formContainer}>
              <form className={styles._form} onSubmit={formikSubmit}>
                {props?.form?.map((field: FormType, index: number | string) => (
                  <div key={index} className={styles._input}>
                    <GeneralInput
                      name={field?.key}
                      id={field?.key}
                      value={values[field.key]}
                      onChange={handleChange}
                      onFocus={() => handleOnTouched(field?.key)}
                      placeholder={t(field?.name)}
                      error={errors[field.key] && touched[field.key] ? true : false}
                      errorMessage={errors[field.key]}
                    />
                  </div>
                ))}

                <div className={styles._buttonContainer}>
                  <GeneralButton method={handleSubmit} ignoreTheme text={t(props?.sendButton)} />
                </div>
              </form>
              <div>
                {props?.address?.map((address: any, index: number | string) => (
                  <p key={index} className={styles._textResponsive}>
                    {address}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;
