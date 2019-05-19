<template>
	<div class="base">
		<div class="topbar">
			<div class="iconfont icon-mic"></div>
			<div class="search-container">
				<search-input-vue v-model="searchVal" placeholder="为你推荐 backstreet boys"></search-input-vue>
			</div>
			<div class="iconfont icon-music1"></div>
		</div>
		<div class="middle-scroll">
			<banner-vue :picSrcArr="imgArr"></banner-vue>
			<menu-vue></menu-vue>
			<div class="separate-line"></div>
			<tjgd-vue></tjgd-vue>
		</div>

		<bottom-vue></bottom-vue>
	</div>
</template>
<script>
import searchInputVue from "../input-vue/search-input-vue.vue";
import bannerVue from "../banner-vue/banner-vue.vue";
import menuVue from "../faxian-vue/menu-vue.vue";
import tjgdVue from "../faxian-vue/tjgd-vue.vue";
import bottomVue from "../bottom-vue/bottom-vue.vue";
export default {
	components: {
		"search-input-vue": searchInputVue,
		"banner-vue": bannerVue,
		"menu-vue": menuVue,
		"tjgd-vue": tjgdVue,
		"bottom-vue": bottomVue
	},
	data: function() {
		return {
			searchVal: "",
			imgArr: [
				"../../asset/img/faxian/banner/1.jpg",
				"../../asset/img/faxian/banner/2.jpg",
				"../../asset/img/faxian/banner/3.jpg",
				"../../asset/img/faxian/banner/4.jpg",
				"../../asset/img/faxian/banner/5.jpg",
				"../../asset/img/faxian/banner/6.jpg"
			]
		};
	},
	methods: {}
};
</script>
<style lang="scss" src='./main.scss' scoped>
</style>