<template>
  <div>
    Social Login Google
  </div>
</template>

<script>
export default {
  name: 'ComponentSocialLoginGoogle',
  meta: {
    meta: {
      googleSignInClientId: {
        name: 'google-signin-client_id',
        content: process.env.CRED_GOOGLE_WEB_CLIENT_ID
      }
    },
    script: {
      googlePlatformLibrary: {
        src: 'https://apis.google.com/js/platform.js',
        async: true,
        defer: true
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
