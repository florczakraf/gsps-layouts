/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import { setUpReplicants } from '@gsps-layouts/browser_shared/replicant_store';
import vuetify from '@gsps-layouts/_misc/vuetify';
import Vue from 'vue';
import App from './main.vue';
import store from './store';

setUpReplicants(store).then(() => {
  new Vue({
    vuetify,
    store,
    el: '#App',
    render: (h) => h(App),
  });
});
