import { useState, useRef, useCallback } from 'react';
import styles from "./score.module.css";
import { ScoreItem } from "./ScoreItem/ScoreItem";

export default function Score({ scored = 0, onChange }) {
  const [selectedScore, setSelectedScore] = useState(scored);
  const [hoveredScore, setHoveredScore] = useState(0);
  const debounceTimeout = useRef(null);

  const handleMouseEnter = (value) => {
    setHoveredScore(value);
  };

  const handleMouseLeave = () => {
    setHoveredScore(0);
  };

  const handleChange = useCallback((value) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      setSelectedScore(value);
      onChange(value);
    }, 1000);
  }, [onChange]);

  return (
    <div className={`${styles.container}`}>
      {Array.from({ length: 5 }, (_, index) => (
        <ScoreItem
          key={index}
          filled={hoveredScore > 0 ? false : (index + 1 <= selectedScore)}
          hovered={index + 1 <= hoveredScore}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onChange={() => handleChange(index + 1)}
        >
          {index + 1}
        </ScoreItem>
      ))}
    </div>
  );
}
