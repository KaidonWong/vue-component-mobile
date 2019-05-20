<template>
	<div class="bottom">
		<div v-for="(item,index) of content" :key="index" class="item tapdiv" :class="onStyle[index]" @click="onClick(index,$event)">
			<div class="bg">
				<div class="iconfont" :class="item.icon"></div>
			</div>
			<div class="label">{{item.label}}</div>
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			selected: 0,
			content: [
				{
					label: "发现",
					icon: "icon-home1",
					event: "faxian"
				},
				{
					label: "视频",
					icon: "icon-shipin",
					event: "shipin"
				},
				{
					label: "我的",
					icon: "icon-yinle",
					event: "wode"
				},
				{
					label: "朋友",
					icon: "icon-qunzu",
					event: "pengyou"
				},
				{
					label: "账号",
					icon: "icon-yonghu",
					event: "zhanghao"
				}
			]
		};
	},
	computed: {
		onStyle: function() {
			let arr = new Array(this.content.length);
			arr.fill({ on: false });
            arr.splice(this.selected, 1, { on: true });
            return arr;
		}
	},
	methods: {
		onClick: function(index,event) {
            this.selected = index;
            this.$emit('switchevent',this.content[index].event);
		}
	}
};
</script>
<style lang="scss" scoped>
.bottom {
	display: flex;
	justify-content: space-between;
	padding: 0.2em 1.5em;
	align-items: center;
	position: absolute;
    width: 100%;
    height: 3em;
	bottom: 0;
	background-color: #eeeeee;
	.item {
		.bg {
			height: 1.6em;
			width: 1.6em;
			border-radius: 0.8em;
		}
		.iconfont {
			font-size: 1.6em;
			line-height: 1;
			color: #666;
			// transition: transform 0.1s ease-in-out;
		}
		.label {
			margin-top: 0.4em;
			text-align: center;
			font-size: 0.6em;
			color: #666;
			line-height: 1;
		}
		&.on {
			.bg {
				background: linear-gradient(135deg, #e99999, #ee0000);
				.iconfont {
					color: #ffffff;
					transform: scale(0.7);
				}
			}
			.label {
				color: #ee0000;
			}
		}
	}
}
</style>
