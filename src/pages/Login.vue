<template>
  <q-page padding>
    <q-card class="max-w-xs q-mx-auto">
      <q-card-section align="center">
        <h1 class="display-xxl font-saira">
          Hello, stranger
        </h1>
        <p class="font-montserrat text-base lh-2">
          Thanks for using Idle Talk ("Service").
          By using the Service, you are agreeing to the terms of service.
          Please read them carefully before using the Service.
        </p>
        <q-btn
          flat
          color="primary"
          size="xl"
          class="font-montserrat"
          label="Terms of service"
          @click="toggleDialogTermsOfService"
        />
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <form-login />
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
  methods: {
    toggleDialogTermsOfService(e) {
      e.preventDefault();
      import('components/DialogTermsOfService.vue').then(module => {
        this.$q
          .dialog({
            component: module.default,
            root: this.$root
          })
          .onOk(() => {})
          .onCancel(() => {})
          .onDismiss(() => {});
      });
    }
  },
  components: {
    FormLogin: () => import('components/FormLogin.vue'),
    SocialLoginGoogle: () => import('components/SocialLoginGoogle.vue')
  }
};
</script>


<style lang="scss" scoped>
</style>
