<template>
  <q-btn
    class="social-login-google-btn"
    label="Google"
    icon="ion-logo-google"
  />
</template>

<script>
import { isNil as _isNil } from 'lodash';

export default {
  name: 'ComponentSocialLoginGoogle',
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.loadAsync('https://apis.google.com/js/api:client.js')
        .then(() => {
          if (_isNil(window.gapi)) return;
          window.gapi.load('auth2', function() {
            const btn = document.querySelector('.social-login-google-btn');
            const auth2 = window.gapi.auth2.init({
              client_id: process.env.CRED_GOOGLE_WEB_CLIENT_ID,
              cookiepolicy: 'single_host_origin',
              scope: ''
            });
            auth2.attachClickHandler(
              btn,
              {},
              function onSuccess(googleUser) {
                console.log(googleUser);
              },
              function onError(error) {
                console.error(error);
              }
            );
          });
        })
        .catch();
    });
  },
  methods: {
    loadAsync(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.head.append(script);
      });
    }
  }
};
</script>

<style>
</style>
