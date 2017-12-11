import Vue from 'vue';
import VueMathPlugin from './VueMathPlugin';

Vue.use(VueMathPlugin);

new Vue({
    el : '#app',
    data : { item : 48 }
});
