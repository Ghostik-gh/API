import React, { FC } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/user/userSlice';
import styles from './PopapCity.module.scss';

export const PopapCity: FC = () => {
  const dispatch = useAppDispatch();

  const closePopap = () => {
    dispatch(userSlice.actions.clickExit());
  };

  return (
    <>
      <div className={styles.close} onClick={closePopap}>
        X
      </div>
      <div className={styles.container}>
        <div className={styles.window}>
          <div className={styles.content}>
            <div className={styles.title}>Выберите свой город:</div>
            <input placeholder="city" />
          </div>
        </div>
      </div>
    </>
  );
};
