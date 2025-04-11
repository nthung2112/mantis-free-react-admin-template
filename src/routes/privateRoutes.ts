import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// project imports
import Loadable from 'components/Loadable';
const DashboardLayout = lazy(() => import('../components/layout/Dashboard'));

// Dashboard pages
const DashboardDefault = Loadable(lazy(() => import('../pages/dashboard/default')));

// Component overview pages
const Color = Loadable(lazy(() => import('../pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('../pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('../pages/component-overview/shadows')));

// Extra pages
const SamplePage = Loadable(lazy(() => import('../pages/extra-pages/sample-page')));

const privateRoutes: RouteObject = {
  path: '/',
  element: React.createElement(DashboardLayout),
  children: [
    {
      path: '/',
      element: React.createElement(DashboardDefault)
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: React.createElement(DashboardDefault)
        }
      ]
    },
    {
      path: 'typography',
      element: React.createElement(Typography)
    },
    {
      path: 'color',
      element: React.createElement(Color)
    },
    {
      path: 'shadow',
      element: React.createElement(Shadow)
    },
    {
      path: 'sample-page',
      element: React.createElement(SamplePage)
    }
  ]
};

export default privateRoutes;
