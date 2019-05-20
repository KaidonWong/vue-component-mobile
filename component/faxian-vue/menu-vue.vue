<template>
	<div class="menus">
		<div class="menu">
			<div class="circle">
				<i class="iconfont icon-calendar3"></i>
			</div>
			<div class="label">每日推荐</div>
		</div>
		<div class="menu">
			<div class="circle">
				<i class="iconfont icon-calendar"></i>
			</div>
			<div class="label">歌单</div>
		</div>
		<div class="menu">
			<div class="circle">
				<i class="iconfont icon-chart"></i>
			</div>
			<div class="label">排行榜</div>
		</div>
		<div class="menu">
			<div class="circle">
				<i class="iconfont icon-radio"></i>
			</div>
			<div class="label">电台</div>
		</div>
		<div class="menu">
			<div class="circle">
				<i class="iconfont icon-broadcast1"></i>
			</div>
			<div class="label">直播</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.menus {
	display: flex;
	justify-content: space-between;
	padding: 0.5em 1em;
	.menu {
		width: 3em;
		.circle {
			width: 3em;
			height: 3em;
			border-radius: 1.5em;
			background: linear-gradient(135deg, #e99999, #ee0000);
			color: #ffffff;
			text-align: center;
			.iconfont {
				line-height: 2;
				font-size: 1.5em;
			}
		}
		.label {
			margin-top: 0.4em;
			color: #444444;
			font-size: 0.75em;
			text-align: center;
		}
	}
}
</style>
