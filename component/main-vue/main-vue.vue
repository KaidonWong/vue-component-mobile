<template>
	<div class="base">
		<div class="topbar">
			<div class="iconfont icon-mic"></div>
			<div class="search-container">
				<search-input-vue v-model="searchVal" placeholder="为你推荐 backstreet boys"></search-input-vue>
			</div>
			<div class="iconfont icon-music1"></div>
		</div>
		<banner-vue :picSrcArr="imgArr"></banner-vue>
        <menu-vue></menu-vue>
        <div class="separate-line"></div>
        <tjgd-vue></tjgd-vue>
		<div class="bottom">test</div>
	</div>
</template>
<script>
import searchInputVue from "../input-vue/search-input-vue.vue";
import bannerVue from "../banner-vue/banner-vue.vue";
import menuVue from "../faxian-vue/menu-vue.vue";
import tjgdVue from "../faxian-vue/tjgd-vue.vue";
export default {
	components: {
		"search-input-vue": searchInputVue,
        "banner-vue": bannerVue,
        "menu-vue": menuVue,
        "tjgd-vue": tjgdVue
	},
	data: function() {
		return {
			searchVal: "",
			imgArr: [
				"../../asset/img/banner/1.jpg",
				"../../asset/img/banner/2.jpg",
				"../../asset/img/banner/3.jpg",
				"../../asset/img/banner/4.jpg",
				"../../asset/img/banner/5.jpg",
				"../../asset/img/banner/6.jpg"
			]
		};
	},
	methods: {}
};
</script>
<style lang="scss" src='./main.scss' scoped>
</style>