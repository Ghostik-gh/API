import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router';
import styles from './SideBar.module.scss';

const sideBarInfo = [
  { id: '1', title: 'Random Animals', to: RouteNames.Animal },
  { id: '2', title: 'second', to: RouteNames.App },
];

export const SideBar: FC = () => {
  return (
    <div className={styles.SideBar}>
      <div className={styles.title}>API's</div>

      {sideBarInfo.map((row) => (
        <Link to={row.to} key={row.id}>
          <div className={styles.row}>
            <span>
              {row.id}. {row.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
