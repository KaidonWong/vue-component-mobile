<template>
	<div class="base">
		<!-- <search-input-vue v-model="searchVal" placeholder="为你推荐 backstreet boys"></search-input-vue>
		<div style="border: 1px solid #000">
			<banner-vue :picSrcArr="imgArr"></banner-vue>
		</div>-->
		<div class="transition-test">
			<div @click="showA = !showA">button</div>
			<transition :name="transitionName">
				<!-- <div class="A" v-if="showA">A</div> -->
				<div class="B" v-if="!showA">B</div>
			</transition>
		</div>
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
			],
			transitionName: "inner",
			showA: true
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
	.A {
		background-color: #ee0000;
	}
	.B {
		background-color: #00ee00;
	}
	.inner-enter-active,
	.inner-leave-active {
		transition: all 1s;
	}
	.inner-enter,
	.inner-leave-to {
		transform: translateX(10em);
		opacity: 0;
	}
}
</style>
<style scoped>
</style>
