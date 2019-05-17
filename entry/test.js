import Vue from "vue";
import "../common/common.css";
import "../asset/iconfont/iconfont.css";
import testVue from "../component/test-vue/test-vue.vue";

import initVueMobile from "../common/vue-mobile-event.js";

initVueMobile();
new Vue({
	el: "#root",
	components: {
		"root-vue": testVue
	}
});
