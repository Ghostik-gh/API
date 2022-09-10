import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import styles from './Layout.module.scss';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde atque
          vitae, porro quia ut sed mollitia reiciendis, et, quam facilis
          quisquam odit voluptas modi? Illum, voluptas unde. Odio, quas
          blanditiis.
        </div>
        <Outlet />
      </div>
    </>
  );
};
