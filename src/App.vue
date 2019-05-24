<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  meta: {
    meta: {},
    link: {
      googleFonts: {
        // Montserrat - 400, 900
        // Saira Extra Condensed - 400
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,900|Saira+Extra+Condensed&display=swap', // prettier-ignore
        rel: 'stylesheet'
      }
    },
    script: {},
    htmlAttr: {},
    bodyAttr: {},
    noscript: {
      default: 'Your browser does not support JavaScript.'
    }
  }
};
</script>

<style></style>
