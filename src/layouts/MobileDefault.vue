<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>`
        <q-toolbar-title
          @click="$router.push({ name: 'RouteWelcome' })"
          class="cursor-pointer"
        >
          MOBILE
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs>
        tabs
      </q-tabs>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutMobileDefault',
  data() {
    return {};
  }
};
</script>
