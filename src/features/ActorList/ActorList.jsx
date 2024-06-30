import React from 'react';
import Actor from '../../shared/ui/Actor/Actor';
import styles from './actorList.module.css'

const ActorList = ({ actors }) => {
  return (
    <div className={styles.actorList}>
      {actors.map((actor, index) => (
        <Actor key={index} name={actor.name} photo={actor.photo} />
      ))}
    </div>
  );
};

export default ActorList;
