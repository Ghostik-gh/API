import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RouteNames } from '../../router';
import { userSlice } from '../../store/reducers/user/userSlice';
import { PopapCity } from '../PopapCity/PopapCity';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const dispatch = useAppDispatch();

  const { city, error, isLoading, popap } = useAppSelector(
    (state) => state.rootReducer.userReducer
  );

  const [about, setAbout] = useState(false);

  const handleMouseEvent = () => {
    setAbout(true);
  };
  const ChangeCity = () => {
    dispatch(userSlice.actions.getCity());
  };

  return (
    <>
      {popap ? <PopapCity /> : null}
      <div className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.top}>
            <div className={styles.title}>Covid-19 Statistic</div>
            <div className={styles.city}>
              Your city is: <span onClick={ChangeCity}>{city}</span>
            </div>
          </div>
          <div className={styles.bottom}>
            <span
              onMouseEnter={handleMouseEvent}
              onMouseLeave={() => {
                setAbout(false);
              }}
            >
              <Link to={RouteNames.Api}>Covid-19</Link>
              {about ? (
                <ul className={styles.about}>
                  <li>1.</li>
                  <li>2.</li>
                  <li>3.</li>
                </ul>
              ) : null}
            </span>
            <span>
              <Link to={RouteNames.Api}>Other</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
