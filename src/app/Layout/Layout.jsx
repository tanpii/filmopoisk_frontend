import React from 'react';
import { useState } from 'react';
import styles from './layout.module.css';
import Header from '../../features/header/Header';
import Modal from '../../features/modal/Modal';


export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className={styles.layout}>
      <Header open={openModal}/>
      <Modal isOpen={isOpen} onClose={closeModal}></Modal>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
