<template>
	<div class="base">
		<search-input-vue v-model="searchVal" placeholder="为你推荐 backstreet boys"></search-input-vue>
        <div style="border: 1px solid #000"><banner-vue :picSrcArr="imgArr"></banner-vue></div>
	</div>
</template>
<script>
import searchInputVue from "../input-vue/search-input-vue.vue";
import bannerVue from "../banner-vue/banner-vue.vue";
export default {
	data: function() {
		return {
			searchVal: "",
			imgArr: [
				"../../asset/img/banner/1.jpg",
				"../../asset/img/banner/2.jpg",
				"../../asset/img/banner/3.jpg"
			]
		};
	},
	components: {
		"search-input-vue": searchInputVue,
		"banner-vue": bannerVue
	},
	methods: {}
};
</script>
<style lang="scss" scoped>
.base {
	margin: 20px;
}
</style>