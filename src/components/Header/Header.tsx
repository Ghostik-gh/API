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

  const [list, setList] = useState(false);

  const handleMouseEnter = () => {
    setList(true);
  };
  const handleMouseLeave = () => {
    setList(false);
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
            <div className={styles.title}>
              <Link to={RouteNames.Api}>Covid-19 Statistic</Link>
            </div>
            <div className={styles.city}>
              Your city is: <span onClick={ChangeCity}>{city}</span>
            </div>
          </div>
          <div className={styles.bottom}>
            <span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* <Link to={RouteNames.Api}></Link> */}
              About Covid ▼
              {list ? (
                <ul className={styles.list}>
                  <li>
                    <a href="#symptoms">1. Symptoms</a>
                  </li>
                  <li>
                    <Link to={RouteNames.Paths}>2. Transmission paths</Link>
                  </li>
                  <li>
                    <Link to={RouteNames.Prevention}>
                      3. 8 steps for Prevention
                    </Link>
                  </li>
                  <li>
                    <Link to={RouteNames.Myths}>
                      4. Myths about the coronavirus
                    </Link>
                  </li>
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
