<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  meta: {
    meta: {
      googleSignInClientId: {
        name: 'google-signin-client_id',
        content: '273389259899-cjflhfg1s347huh7ulv3oug8b9bc0nuk.apps.googleusercontent.com' // prettier-ignore
      }
    },
    link: {},
    script: {
      googlePlatformLibrary: {
        src: 'https://apis.google.com/js/platform.js',
        async: true,
        defer: true
      }
    },
    htmlAttr: {},
    bodyAttr: {},
    noscript: {
      default: 'This is content for browsers with no JS (or disabled JS)'
    }
  }
};
</script>

<style></style>
