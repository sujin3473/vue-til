import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index';
import { formatDate } from '@/utils/filters';

Vue.filter('formatDate', formatDate);
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
