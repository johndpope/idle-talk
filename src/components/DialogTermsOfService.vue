<template>
  <q-dialog
    persistent
    maximized
    transition-show="slide-up"
    transition-hide="slide-down"
    ref="dialog"
    @hide="onDialogHide"
  >
    <q-layout
      view="lHr lpr lFr"
      container
      class="q-dialog-plugin bg-white"
    >
      <q-header
        reveal
        elevated
      >
        <q-toolbar>
          <q-toolbar-title class="font-saira display-xxl">
            Terms of Service
          </q-toolbar-title>
          <q-btn
            flat
            v-close-popup
            round
            size="xl"
            icon="ion-close"
          />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page padding>
          <p
            v-for="(term, i) in terms"
            :key="i"
            class="font-montserrat text-lead lh-2 q-mb-xl"
          >
            {{ term }}
          </p>
        </q-page>
      </q-page-container>
      <q-footer elevated>
        <q-toolbar>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </q-dialog>
</template>

<script>
export default {
  name: 'ComponentDialogTermsOfService',
  data() {
    return {
      terms: [
        'You must follow any policies made available to you within the Service. Don’t misuse our Service. For example, don’t interfere with our Service or try to access them using a method other than the interface and the instructions that we provide. You may use our Service only as permitted by law, including applicable export and re-export control laws and regulations. We may suspend or stop providing our Service to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.',
        'Using our Service does not give you ownership of any intellectual property rights in our Service or the content you access. You may not use content from our Service unless you obtain permission from its owner or are otherwise permitted by law. These terms do not grant you the right to use any branding or logos used in our Service. Don’t remove, obscure, or alter any legal notices displayed in or along with our Service.',
        'In connection with your use of the Service, we may send you service announcements, administrative messages, and other information. You may opt out of some of those communications.',
        'Service is available on mobile devices. Do not use such Service in a way that distracts you and prevents you from obeying traffic or safety laws.',
        "We don't collect, store, modify and reproduce any kind of information.",
        'By using our Service, you are agreeing that you are solely responsible for (and that Service provider has no responsibility to you or to any third party for) any breach of your obligations under the terms and for the consequences of any such breach.'
      ]
    };
  },
  methods: {
    show() {
      // Required method for Dialog Plugin. DO NOT change its name.
      this.$refs.dialog.show();
    },
    hide() {
      // Required method for Dialog Plugin. DO NOT change its name.
      this.$refs.dialog.hide();
    },
    onDialogHide() {
      this.$emit('hide');
    },
    onOk() {
      this.$emit('ok'); // this.$emit('ok', { ...extra args });
      this.hide();
    },
    onCancel() {
      this.hide();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
