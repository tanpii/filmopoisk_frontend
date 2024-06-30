import React, { useState, useRef, useCallback } from 'react';
import SearchIcon from '../../../assets/icons/search.svg';
import CloseIcon from '../../../assets/icons/close.svg';
import styles from './searchInput.module.css';

export default function SearchInput({ placeholder, onChange, defaultValue='' }) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const debounceTimeout = useRef(null);

  const debouncedOnChange = useCallback((value) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      onChange(value);
    }, 500);
  }, [onChange]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    debouncedOnChange(event.target.value);
  };

  const clearInput = () => {
    setInputValue('');
    debouncedOnChange('');
  };

  return (
    <div className={styles.searchContainer}>
      <img src={SearchIcon} alt="search" className={styles.searchIcon} />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={styles.searchInput}
      />
      {inputValue && (
        <button onClick={clearInput} className={styles.clearButton}>
          <img src={CloseIcon} alt="close search" className={styles.clearIcon} />
        </button>
      )}
    </div>
  );
}
