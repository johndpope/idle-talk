<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title
          @click="$router.push({ name: 'RouteWelcome' })"
          class="cursor-pointer"
        >
          DESKTOP
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs>
        tabs
      </q-tabs>
    </q-header>
    <q-drawer
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-grey-2"
    >
      <q-scroll-area class="fit q-pa-sm">
        scroll area
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDesktopDefault',

  data() {
    return {
      leftDrawer: false
    };
  }
};
</script>
