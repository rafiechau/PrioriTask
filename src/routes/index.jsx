import MainLayout from '@layouts/MainLayout';
import AddPage from '@pages/AddPage';
import DetailPage from '@pages/DetailPage';

import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import Register from '@pages/Register';
import UpdatePage from '@pages/UpdatePage';

const routes = [
  {
    path: '/',
    name: 'home',
    protected: true,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'register',
    protected: false,
    component: Register,
    layout: MainLayout,
  },
  // {
  //   path: '/add',
  //   name: 'add',
  //   protected: false,
  //   component: Add,
  //   layout: MainLayout,
  // },
  // {
  //   path: '/edit',
  //   name: 'edit',
  //   protected: false,
  //   component: Edit,
  //   layout: MainLayout,
  // },
  // {
  //   path: '/detail/:id',
  //   name: 'detail',
  //   protected: false,
  //   component: Detail,
  //   layout: MainLayout,
  // },

  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
