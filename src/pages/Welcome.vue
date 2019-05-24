<template>
  <q-page
    padding
    class="column items-center justify-center"
  >
    <q-card
      flat
      class="max-w-xs"
    >
      <q-card-section align="center">
        <h1 class="display-xxl font-saira">
          Idle Talk
        </h1>
        <h3 class="font-montserrat text-uppercase">
          Keep calm and chat on
        </h3>
      </q-card-section>
      <q-separator inset />
      <q-card-actions align="center">

        <q-btn
          flat
          size="xl"
          :to="{ name: $store.state.auth.authenticated ? 'RouteChatRoom' : 'RouteLogin' }"
        >
          {{ $store.state.auth.authenticated ? 'Join chat' : 'Login' }}
        </q-btn>
      </q-card-actions>
      <q-card-actions align="center">
        <q-btn
          flat
          :to="{ name: 'RouteAbout' }"
        >
          About
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageWelcome'
};
</script>

<style>
</style>
