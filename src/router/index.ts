import React from 'react';
// import { Home } from '../pages/Home';

export interface IRoute {
  path: string;
  component: React.ReactNode | null;
  exact?: boolean;
}

export enum RouteNames {
  Api = '/API',
  App = '/app/',
  Animal = 'animal',
  Symptoms = '#symptoms',
  Paths = 'paths',
  Prevention = 'prevention',
  Myths = 'myths',
}

// Проблема с типом component обычный route не принимает тип надо как то обернуть в <>
export const appRoutes: IRoute[] = [
  // { path: RouteNames.Home, exact: true, component: <Home /> },
];
