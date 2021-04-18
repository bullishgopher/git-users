import React from 'react';
import styles from './style.module.scss';

export default function TextInput({ inputRef, ...props }) {
  return <input className={styles.input} ref={inputRef} {...props} />;
}
