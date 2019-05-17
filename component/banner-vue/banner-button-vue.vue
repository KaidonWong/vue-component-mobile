<template>
	<div class="circles clearfix">
		<div v-for="(item,index) of emptyArr" :key="index" class="circle" :class="circleOnClass[index]"></div>
	</div>
</template>
<script>
export default {
	props: {
		total: 0,
		index: 0
	},
	computed: {
		emptyArr: function() {
			let arr = new Array(this.total);
			return arr;
		},
		circleOnClass: function() {
			let arr = new Array(this.total);
			arr.fill({ on: false });
			arr.splice(this.index, 1, { on: true });
			if (this.index == 0) {
				arr.splice(this.total - 2, 1, { on: true });
			}
			if (this.index == this.total - 1) {
				arr.splice(1, 1, { on: true });
			}
			return arr;
		}
	}
};
</script>
<style lang="scss" scoped>
.circles {
	display: inline-block;
	.circle {
		float: left;
		margin: 0 0.1em;
		width: 0.4em;
		height: 0.4em;
		border-radius: 0.2em;
		background-color: #aaaaaa;
		&.on {
			background-color: #9c1523;
        }
        &:first-of-type,&:last-of-type{
            display: none;
        }
	}
}
</style>
