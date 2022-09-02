import React, { FC } from 'react';
import img from '../../assets/images/404.jpg';
import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={img} alt="Error 404" />
        <h1>Page not Found</h1>
      </div>
    </>
  );
};
