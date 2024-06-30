import { useState, useEffect, useRef } from 'react';
import styles from './selector.module.css';
import ArrowDownIcon from '../../../assets/icons/arrow-down.svg';
import ArrowUpIcon from '../../../assets/icons/arrow-up.svg';

export default function CustomSelector({ options, placeholder, onChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectedOption) {
      onChange(selectedOption);
    }
  }, [selectedOption, onChange]);

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

  const handleChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect} ref={selectRef}>
      <div className={`${styles.selectContainer} ${isOpen ? styles.selectContainerOpen : ''}`} onClick={toggleOptions}>
        <div className={`${styles.selectedValue} ${!selectedOption ? styles.placeholder : ''}`}>
          {selectedOption || placeholder}
        </div>
        {isOpen ? (
          <img src={ArrowUpIcon} alt="arrow up" />
        ) : (
          <img src={ArrowDownIcon} alt="arrow down" />
        )}
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li
              key={option}
              className={selectedOption === option ? styles.selected : ''}
              onClick={() => handleChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
