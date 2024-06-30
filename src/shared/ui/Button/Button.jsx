import styles from './button.module.css';

export function FilledButton({ children, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles.filled}`}>{children}</button>
  )
}

export function GhostButton({ children, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles.ghost}`}>{children}</button>
  )
}