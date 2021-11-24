import React from 'react';
import style from '../persons.module.scss';
function PersonCard({ name }) {
  return (
    <div className={style.personCard}>
      <h1>{name}</h1>
    </div>
  );
}

export default PersonCard;
