import React from 'react';
import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <div className={styles.text}>Загрузка...</div>
    </div>
  );
};

export default Loader;
