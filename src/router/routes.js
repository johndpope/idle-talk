const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Welcome.vue'),
        meta: {
          auth: null // No need to check whether user has authenticated
        }
      },
      {
        path: 'chat',
        component: () => import('pages/ChatRoom.vue'),
        meta: {
          auth: true // MUST be authenticated
        }
      },
      {
        path: 'login',
        component: () => import('pages/Login.vue'),
        meta: {
          auth: false // MUST NOT be authenticated
        }
      },
      {
        path: 'about',
        component: () => import('pages/About.vue'),
        meta: {
          auth: null // No need to check whether user has authenticated
        }
      },
      {
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
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
