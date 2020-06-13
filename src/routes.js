import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
];

export default routes;
