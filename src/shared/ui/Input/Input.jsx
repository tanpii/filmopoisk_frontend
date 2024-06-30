import styles from "./input.module.css";

export default function Input({
  children,
  placeholder,
  required = false,
  error = "",
  value,
  onChange,
}) {
  const handleChange = (event) => {
    onChange(event);
  };

  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputName}>
        {children} {required ? <span className={styles.required}>*</span> : ""}
      </span>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        placeholder={placeholder}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
