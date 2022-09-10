import React, { FC } from 'react';
import styles from './PopapCity.module.scss';

export const PopapCity: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <div className={styles.content}>
          <div className={styles.title}>Выберите свой город:</div>
          <input placeholder="city" />
        </div>
      </div>
    </div>
  );
};
