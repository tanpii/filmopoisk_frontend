import styles from "./circlebutton.module.css";
import arrow_right from "../../../assets/icons/arrow_right.svg";
import arrow_left from "../../../assets/icons/arrow_left.svg";

export default function CircleButton({ onClick, direction, size, disabled}) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${size === "S" ? styles.S : styles.M}`}
      disabled={disabled}
    >
      <img
        src={`${direction === "right" ? arrow_right : arrow_left}`}
        className={`${styles.icon}`}
        alt=""
      />
    </button>
  );
}
