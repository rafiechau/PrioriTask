import MainLayout from '@layouts/MainLayout';
import AddPage from '@pages/AddPage';
import DetailPage from '@pages/DetailPage';

import Home from '@pages/Home';
import LoginPage from '@pages/Login';
import NotFound from '@pages/NotFound';
import RegisterPage from '@pages/Register';
import UpdatePage from '@pages/UpdatePage';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'login',
    protected: false,
    component: LoginPage,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'register',
    protected: false,
    component: RegisterPage,
    layout: MainLayout,
  },
  {
    path: '/add',
    name: 'add',
    protected: false,
    component: AddPage,
    layout: MainLayout,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    protected: false,
    component: UpdatePage,
    layout: MainLayout,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    protected: false,
    component: DetailPage,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
