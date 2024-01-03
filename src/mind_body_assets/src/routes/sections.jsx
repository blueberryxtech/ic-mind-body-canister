import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard';

export const IndexPage = lazy(() => import('../pages/app'));
export const MyDataPage = lazy(() => import('../pages/mydata'));
export const LoginPage = lazy(() => import('../pages/login'));
export const LearnMorePage = lazy(() => import('../pages/learnmore'));
export const Page404 = lazy(() => import('../pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'mydata', element: <MyDataPage /> },
        { path: 'learnmore', element: <LearnMorePage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },    
    {
      path: 'learnmore',
      element: <LearnMorePage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
