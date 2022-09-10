import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const [about, setAbout] = useState(false);

  const handleMouseEvent = () => {
    setAbout(true);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.top}>
            <div>Title</div>
            <div>Title</div>
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
