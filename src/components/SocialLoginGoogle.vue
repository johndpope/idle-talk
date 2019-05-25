<template>
  <q-btn
    round
    size="xl"
    :loading="loading"
    :disable="disabled"
    data-social-login-provider="google"
    class="bg-white text-brand-google"
    icon="ion-logo-google"
  />
</template>

<script>
export default {
  name: 'ComponentSocialLoginGoogle',
  data() {
    return {
      loading: true,
      disabled: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.gapi.load('auth2', {
        callback: () => {
          this.loading = false;
          this.disabled = false;
          const auth2 = window.gapi.auth2.init({
            cookiepolicy: 'single_host_origin'
          });
          auth2.attachClickHandler(
            document.querySelector('[data-social-login-provider="google"]'),
            {},
            function onSuccess(googleUser) {
              console.log(googleUser);
            },
            function onError(error) {
              console.error(error);
            }
          );
        },
        onerror: () => {
          this.loading = false;
          this.disabled = true;
        },
        timeout: 20000,
        ontimeout: () => {
          this.loading = false;
          this.disabled = true;
        }
      });
    });
  }
};
</script>

<style>
</style>
