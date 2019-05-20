<template>
	<div class="faxian-base">
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
	</div>
</template>
<script>
import searchInputVue from "../input-vue/search-input-vue.vue";
import bannerVue from "../banner-vue/banner-vue.vue";
import menuVue from "./menu-vue.vue";
import tjgdVue from "./tjgd-vue.vue";
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
<style lang="scss" scoped>
.topbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 3em;
	padding: 0 1em;
	.iconfont {
		font-size: 1.5em;
		color: #333333;
	}
	.search-container {
		width: 75%;
	}
}

.middle-scroll {
	overflow-y: scroll;
	height: calc(100% - 3em);
}
</style>