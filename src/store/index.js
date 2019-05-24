// Dependencies
import Vue from "vue";
import Vuex from "vuex";

// Modules
import auth from './auth';
import chat from './chat';
import user from './user';

Vue.use(Vuex);

export default async function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: { auth, chat, user },
    strict: process.env.DEV
  });
  return Store;
}
