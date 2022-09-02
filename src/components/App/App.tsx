import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar';
import styles from './App.module.scss';

const App: FC = () => {
  return (
    <>
      <SideBar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
};

export default App;
