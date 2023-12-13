import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FormikConfig } from './formik';
import GeneralInput from '../GeneralInput';
import { Icon } from '@iconify/react';
import { useMutation, gql } from '@apollo/client';
import { CircleCross } from '../../../public/resources/svg';

type Info = {
  title: string;
  text: string[];
  checkboxDisclaimer: string[];
  buttonText: string;
};

const SUBMIT_FORM = gql`
  mutation SubmitForm($email: String!) {
    submitForm(input: { formId: 1, data: [{ id: 2, value: $email }] }) {
      errors {
        fieldId
        message
        slug
      }
      message
      success
    }
  }
`;

const PopUp = (info: Info) => {
  const [show, setShow] = useState(true);
  const [submitForm, { data, loading, error }] = useMutation(SUBMIT_FORM);

  async function handleSubmit() {
    if (Object.keys(errors).length < 1 && values?.email) {
      submitForm({ variables: { email: values.email } })
        .then(() => setShow(!show))
        .catch((error) => console.log(error));
    }
  }

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

  type FormType = {
    key: 'email';
    name: string;
  };

  return (
    <>
      <div className={show ? styles._popup : styles._hidden}>
        <button className={styles._close} onClick={() => setShow(!show)}>
          <CircleCross />
        </button>
        <h4 className={styles._title}>{info?.title}</h4>
        <div className={styles._text}>
          <h6>
            {info?.text[0]}
            <br className={styles._lineBreak} />
            {info?.text[1]}
          </h6>
        </div>
        <form className={styles._form} onSubmit={formikSubmit}>
          <div className={styles._input}>
            <GeneralInput
              name='email'
              id='email'
              value={values['email']}
              onChange={handleChange}
              onFocus={() => handleOnTouched('email')}
              placeholder={'Email*'}
              error={errors['email'] && touched['email'] ? true : false}
              errorMessage={errors['email']}
              addStyle={styles._inputText}
              colorBlack
            />
          </div>

          <button type='submit' className={styles._button} onClick={handleSubmit}>
            {info?.buttonText}
            <Icon icon='mdi:arrow-right' width={22} className={styles._arrow} />
          </button>
        </form>
      </div>
    </>
  );
};

export default PopUp;
