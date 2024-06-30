import styles from "./circlebutton.module.css";
import arrow_right from "../../../assets/arrow_right.svg";
import arrow_left from "../../../assets/arrow_left.svg";

export default function CircleButton({ onClick, direction, size }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${size === "S" ? styles.S : styles.M}`}
    >
      <img
        src={`${direction === "right" ? arrow_right : arrow_left}`}
        className={`${styles.icon}`}
        alt=""
      />
    </button>
  );
}
