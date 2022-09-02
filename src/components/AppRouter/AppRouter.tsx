import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from '../../pages/NotFound/NotFound';
import { RandomAnimal } from '../../pages/RandomAnimal/RandomAnimal';
import { appRoutes, RouteNames } from '../../router';
import App from '../App/App';

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteNames.App} element={<App />}>
          <Route path={RouteNames.Animal} element={<RandomAnimal />} />
          <Route path="*" element={<NotFound />} />
          {/* Не совпадают типы для элемента | ReactNode | ReactComponentsType */}
        </Route>
        {appRoutes.map((route) => (
          <Route path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
