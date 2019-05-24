import { Platform } from 'quasar';

const routes = [
  {
    path: '/',
    component: () => Platform.is.mobile
      ? import('layouts/MobileDefault.vue')
      : import('layouts/DesktopDefault.vue'),
    children: [
      {
        name: 'RouteWelcome',
        path: '',
        component: () => import('pages/Welcome.vue'),
        meta: {
          auth: null // No need to check whether user has authenticated
        }
      },
      {
        name: 'RouteChatRoom',
        path: 'chat',
        component: () => import('pages/ChatRoom.vue'),
        meta: {
          auth: true // MUST be authenticated
        }
      },
      {
        name: 'RouteLogin',
        path: 'login',
        component: () => import('pages/Login.vue'),
        meta: {
          auth: false // MUST NOT be authenticated
        }
      },
      {
        name: 'RouteAbout',
        path: 'about',
        component: () => import('pages/About.vue'),
        meta: {
          auth: null // No need to check whether user has authenticated
        }
      },
      {
        name: 'RouteSettings',
        path: 'settings',
        component: () => import('pages/Settings.vue'),
        meta: {
          auth: null // No need to check whether user has authenticated
        }
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    name: 'RouteError404',
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
