import styles from './actor.module.css'

export default function Actor ({ name, photo }) {
  return (
    <div className={styles.actor}>
      <div className={styles.photo}> 
        <img src={photo} alt={`${name} photo`}/>
      </div>
      <p className={styles.photo}>{name}</p>
    </div>
  );
};
