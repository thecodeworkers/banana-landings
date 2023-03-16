import React from 'react';
import styles from './styles.module.scss';

const GeneralButton = ({ name, value, placeholder, onhandle }: any) => {
  return (
    <div className={styles._inputContainer} onChange={onhandle}>
      <input className={styles._input} name={name} placeholder={placeholder} value={value} />
    </div>
  );
};

export default GeneralButton;
