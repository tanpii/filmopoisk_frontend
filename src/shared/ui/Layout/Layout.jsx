import React from 'react';
import styles from './layout.module.css';
import Header from '../../../features/header/Header';


export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
