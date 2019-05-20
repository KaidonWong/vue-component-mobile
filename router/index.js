import Vue from "vue";
import VueRouter from "vue-router";

import faxianVue from "../component/faxian-vue/faxian-vue.vue";
import wodeVue from "../component/wode-vue/wode-vue.vue";
import woxihuanVue from "../component/wode-vue/gedan/woxihuan-vue.vue";

Vue.use(VueRouter);
const routes = [
	{
		path: "", //默认进入的页面
		components: {
			base: faxianVue
		}
	},
	{
		path: "/faxian",
		components: {
			base: faxianVue
		}
	},
	{
		path: "/wode",
		components: {
			base: wodeVue
		}
    },
    {
		path: "/wode/woxihuan",
		components: {
			base: woxihuanVue
		}
	}
];

var router = new VueRouter({
	routes // (缩写) 相当于 routes: routes
});

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default router;
