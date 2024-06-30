import styles from "./scoreitem.module.css";
import star from '../../../../assets/icons/star.svg';
import star_filled from '../../../../assets/icons/star_filled.svg';
import star_hovered from '../../../../assets/icons/star-hovered.svg';

export function ScoreItem({ children, filled, hovered, onMouseEnter, onMouseLeave, onChange }) {
  const handleClick = (event) => {
    event.stopPropagation();
    onChange(children)
  }
  return (
    <div className={styles.box} onMouseEnter={ () => onMouseEnter(children) } onClick={ handleClick } onMouseLeave={() => onMouseLeave()}>
        <img src={hovered ? star_hovered : (filled ? star_filled : star)} alt="star" />
        <span className={hovered ? styles.label : (filled ? styles.filled_label : styles.label)}>{children}</span>
    </div>
  );
}
