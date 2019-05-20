<template>
	<div class="base">
		<transition :name="transitionName">
			<router-view name="base" class="baseRouterView"></router-view>
		</transition>
		<bottom-vue @switchevent="onSwitch"></bottom-vue>
	</div>
</template>
<script>
import bottomVue from "../bottom-vue/bottom-vue.vue";
export default {
	components: {
		"bottom-vue": bottomVue
	},
	data: function() {
		return {
			transitionName: "inner"
		};
	},
	methods: {
		onSwitch(e) {
			this.$router.push({ path: `/${e}` });
		}
	},
	watch: {
		$route(to, from) {
			const toDepth = to.path.split("/").length;
			const fromDepth = from.path.split("/").length;
			this.transitionName = toDepth < fromDepth ? "outer" : "inner";
		}
	}
};
</script>
<style lang="scss" scoped>
.base {
	height: 100%;
	.baseRouterView {
		height: calc(100% - 3em);
	}
}
.inner-enter-active {
	transition: all 0.3s ease-out;
}
.inner-enter {
	transform: translateX(100%);
	opacity: 0;
}

.outer-leave-active {
	transition: all 0.3s ease-out;
}
.outer-leave-to {
	transform: translateX(100%);
	opacity: 0;
}
</style>