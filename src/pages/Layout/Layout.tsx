import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import styles from './Layout.module.scss';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
};
