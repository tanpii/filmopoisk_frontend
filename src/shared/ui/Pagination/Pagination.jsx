import React from 'react';
import CircleButton from '../CircleButton/CircleButton';
import styles from './pagination.module.css'

export default function Pagination ({ currentPage, totalPages, onPageChange }) {
  return (
    <div className={styles.pagination}>
      <CircleButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} direction='left' size='S'/>
      <span className={styles.page}>{currentPage}</span>
      <CircleButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} direction='right' size='S'/>
    </div>
  );
};
