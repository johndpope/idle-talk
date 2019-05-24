<template>
  <q-page padding>
    <q-card>
      <q-card-section>
      </q-card-section>
      <q-card-section>
      </q-card-section>
      <q-card-section>
        <social-login-google />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageLogin',
  components: {
    SocialLoginGoogle: () => import('components/SocialLoginGoogle.vue')
  }
};
</script>


<style lang="scss" scoped>
</style>
