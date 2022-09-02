import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar';
import styles from './App.module.scss';

const App: FC = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default App;
