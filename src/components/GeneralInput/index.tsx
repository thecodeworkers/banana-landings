import React from 'react';
import styles from './styles.module.scss';

const GeneralInput = ({ name, value, placeholder, onChange, id, error, errorMessage, onFocus, addStyle, colorBlack }: any) => {
  return (
    <>
      <div className={styles._inputContainer} style={colorBlack? {borderColor: "black"} : undefined}>
        <input
          className={addStyle? addStyle : styles._input}
          name={name}
          id={id}
          autoComplete={'off'}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          value={value}
        />
      </div>
      {error && errorMessage && <p className={styles?._validates} style={colorBlack? {color: "black"} : undefined}>{errorMessage}</p>}
    </>
  );
};

export default GeneralInput;
