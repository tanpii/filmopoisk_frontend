import { useState } from "react";
import styles from "./input.module.css";

export default function Input({ children, placeholder, required = false, error = "", onChange}) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onChange(value);
  };

  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputName}>
        {children} {required ? <span className={styles.required}>*</span> : ''}
      </span>
      <input
        required={required}
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        placeholder={placeholder}
      />
      {error ? 
      <span className={styles.error}>
        {error}
      </span>
       : ""}
    </div>
  );
}
