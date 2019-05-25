<template>
  <q-form
    @submit="() => {}"
    @reset="() => {}"
  >

    <q-input
      lazy-rules
      clearable
      clear-icon="ion-close"
      counter
      type="text"
      class="font-montserrat"
      v-model="username.model"
      :label="username.label"
      :hint="username.hint"
      :rules="username.rules"
    >
      <template v-slot:prepend>
        <q-icon name="ion-person" />
      </template>
    </q-input>



      <q-btn
      class="full-width"
        label="Submit"
        type="submit"
        color="primary"
      />
  </q-form>
</template>

<script>
import { trim as _trim, lt as _lt, gt as _gt } from 'lodash';

export default {
  name: 'ComponentFormLogin',
  data() {
    return {
      username: {
        model: '',
        label: 'Username',
        hint: 'This will be how your name will be displayed',
        rules: [
          function required(value) {
            return _trim(value).length > 0 ? true : 'This field is required';
          },
          function minLength(value) {
            const len = 4;
            return _gt(_trim(value).length, len)
              ? true
              : `This field must be longer than ${len} characters long`;
          },
          function maxLength(value) {
            const len = 16;
            return _lt(_trim(value).length, len)
              ? true
              : `This field must be shorter than ${len} characters long`;
          }
        ]
      },
      consent: {
        model: false
      }
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped></style>
