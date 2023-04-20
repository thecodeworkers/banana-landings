import React from 'react';
import styles from './styles.module.scss';

const GeneralInput = ({ name, value, placeholder, onHandle }: any) => {
  return (
    <div className={styles._inputContainer}>
      <input className={styles._input} name={name} placeholder={placeholder} value={value} onChange={onHandle} />
    </div>
  );
};

export default GeneralInput;
