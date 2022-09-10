import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../../pages/Layout/Layout';
import { NotFound } from '../../pages/NotFound/NotFound';
import { RouteNames } from '../../router';
// import { RandomAnimal } from '../../pages/RandomAnimal/RandomAnimal';
// import App from '../App/App';

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteNames.Api} element={<Layout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* <Route path={RouteNames.App} element={<App />}>
            <Route path={RouteNames.Animal} element={<RandomAnimal />} />
          </Route> */}
      {/* Не совпадают типы для элемента | ReactNode | ReactComponentsType */}
      {/* {appRoutes.map((route) => (
                  <Route path={route.path} element={route.component} />
                ))} */}
    </BrowserRouter>
  );
};
