import { isEqual as _isEqual } from 'lodash';
import { Dialog } from 'quasar';

export default async ({ store, router }) => {
  router.beforeEach((to, from, next) => {

    // MUST be authenticated
    if (to.matched.some(record => _isEqual(record.meta.auth, true))) {
      return store.state.auth.authenticated
        ? next() // Already authenticated. Continue.
        : Dialog.create({ // Authentication required. Ask user whether to proceed the login process.
          title: 'Please sign in first.',
          message: 'Would you like to go to sign in?',
          cancel: true,
          persistent: true,
        }).onOk(() => { // Go to login
          next({ path: '/login', query: { redirect: to.fullPath } });
        }).onCancel(() => { // Go back
          next({ path: from.fullPath });
        }).onDismiss(() => {
          // Triggered on both OK and Cancel
        });
    }

    // MUST NOT be authenticated
    if (to.matched.some(record => _isEqual(record.meta.auth, false))) {
      return !store.state.auth.authenticated
        ? next() // Unauthenticated user. Continue.
        : Dialog.create({ // Authenticated user. Ask user whether to sign out.
          title: 'Please sign out first.',
          message: 'You must sign out first to continue the request. Would you like to sign out?',
          cancel: true,
          persistent: true,
        }).onOk(() => { // Sign out
          // next({ path: '/login', query: { redirect: to.fullPath } });
          next();
        }).onCancel(() => { // Go back
          next({ path: from.fullPath });
        }).onDismiss(() => {
          // Triggered on both OK and Cancel
        });
    }
    return next(); // Make sure to always call next();
  });
}
