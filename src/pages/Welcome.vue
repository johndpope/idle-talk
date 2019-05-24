<template>
  <q-page padding>
    <h1>
      Welcome!!
    </h1>
    <q-btn
      color="primary"
      label="Go to chatroom"
      :to="{ name: 'RouteChatRoom' }"
    />
    <q-btn
      color="primary"
      label="Go to login"
      :to="{ name: 'RouteLogin' }"
    />
    <q-btn
      color="primary"
      label="Go to about"
      :to="{ name: 'RouteAbout' }"
    />
  </q-page>
</template>

<script>
export default {
  name: 'PageWelcome'
};
</script>

<style>
</style>
