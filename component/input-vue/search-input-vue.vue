<template>
	<div class="base-search">
		<div class="iconfont icon-search"></div>
		<input type="text" :placeholder="placeholder" @input="onInput($event)">
	</div>
</template>
<script>
export default {
	model: {
		prop: "searchVal",
		event: "inputevent"
	},
	props: {
		placeholder: String,
		searchVal: String
    },
    methods: {
        onInput: function(e) {
            this.$emit('inputevent',e.target.value);
        }
    }
};
</script>
<style lang="scss" scoped>
.base-search {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 2.4em;
	border-radius: 1.2em;
	padding: 0 0.8em;
	background-color: rgba($color: #929191, $alpha: 0.1);
	.iconfont {
		display: inline-block;
		color: #929292;
	}
	input {
		display: block;
		width: 85%;
		font-size: 1em;
		border: none;
		outline: none;
		background: none;

		// background-color: antiquewhite;
	}
}
</style>