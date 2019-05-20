import Vue from "vue";
import "../common/common.css";
import "../asset/iconfont/iconfont.css";
import router from "../router";
import mainVue from "../component/main-vue/main-vue.vue";
import initVueMobile from "../common/vue-mobile-event.js";

initVueMobile();
new Vue({
    el: "#root",
    router,
	components: {
		"root-vue": mainVue
	}
});