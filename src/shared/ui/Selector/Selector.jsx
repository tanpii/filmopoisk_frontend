import React, { useState, useEffect, useRef } from 'react';
import styles from './selector.module.css';
import ArrowDownIcon from '../../../assets/icons/arrow-down.svg';
import ArrowUpIcon from '../../../assets/icons/arrow-up.svg';

export default function Selector({ children, options, placeholder, onChange, defaultValue }) {
  const [selectedOption, setSelectedOption] = useState({ value: null, text: '' }); // Изменено начальное значение на null
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    if (defaultValue && defaultValue.value !== '0') { // Проверка на defaultValue.value !== '0'
      setSelectedOption({
        value: defaultValue.value || null, // Изменено на null
        text: defaultValue.text || '',
      });
    }
  }, [defaultValue]);

  const handleChange = (value, text) => {
    setSelectedOption({ value, text });
    setIsOpen(false);
    onChange(value);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.customSelect} ref={selectRef}>
      <span className={styles.selectorName}>{children}</span>
      <div className={`${styles.selectContainer} ${isOpen ? styles.selectContainerOpen : ''}`} onClick={toggleOptions}>
        <div className={`${styles.selectedValue} ${selectedOption.value === null ? styles.placeholder : ''}`}> {/* Изменено условие для placeholder */}
          {selectedOption.text || placeholder}
        </div>
        {isOpen ? (
          <img src={ArrowUpIcon} alt="arrow up" />
        ) : (
          <img src={ArrowDownIcon} alt="arrow down" />
        )}
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {Object.entries(options).map(([value, text]) => (
            <li
              key={value}
              className={selectedOption.value === value ? styles.selected : ''}
              onClick={() => handleChange(value, text)}
            >
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
