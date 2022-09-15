import React, { useEffect } from 'react';
import { ISymptom } from '../symptomsList';
import styles from './SymptomsItem.module.scss';

export const SymptomsItem = (props: ISymptom) => {
  useEffect(() => {
    console.log(props);
  });
  return (
    <div className={styles.cv_grid__item}>
      <div className={styles.cv_icon_card}>
        <img src={props.img} alt="" className="cv-icon-card__img" />
        <div className="cv-icon-card__text">{props.text}</div>
      </div>
    </div>
  );
};
