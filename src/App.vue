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
    link: {
      googleFonts: {
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,900|Saira+Extra+Condensed&display=swap', // prettier-ignore
        rel: 'stylesheet'
      }
    },
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
      default: 'Your browser does not support JavaScript.'
    }
  }
};
</script>

<style></style>
