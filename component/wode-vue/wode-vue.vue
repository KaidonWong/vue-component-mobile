<template>
	<div class="wode-base">
		<div class="header">
			<div class="iconfont icon-cloud"></div>
			<div class="title">我的音乐</div>
			<div class="iconfont icon-music1"></div>
		</div>
		<div class="middle-scroll">
			<div class="download-alert">
				<div class="iconfont icon-exclamation-circle"></div>
				<div>下载队列（57项下载失败）</div>
			</div>
			<div class="menus">
				<div class="menu clearfix">
					<div class="icon-title">
						<span class="iconfont icon-yinle"></span>
						<span>本地音乐</span>
					</div>
					<div class="iconfont icon-arrow1"></div>
				</div>
				<div class="menu clearfix">
					<div class="icon-title">
						<span class="iconfont icon-recentsicon"></span>
						<span>最近播放</span>
					</div>
					<div class="iconfont icon-arrow1"></div>
				</div>
				<div class="menu clearfix">
					<div class="icon-title">
						<span class="iconfont icon-radio-"></span>
						<span>我的电台</span>
					</div>
					<div class="iconfont icon-arrow1"></div>
				</div>
				<div class="menu clearfix">
					<div class="icon-title">
						<span class="iconfont icon-collect1"></span>
						<span>我的收藏</span>
					</div>
					<div class="iconfont icon-arrow1"></div>
				</div>
			</div>
			<div class="separate-div"></div>
			<gedan-vue :title="title1" :content="content1"></gedan-vue>
            <gedan-vue :title="title2" :content="content2"></gedan-vue>
		</div>
	</div>
</template>
<script>
import gedanVue from "./gedan-vue.vue";
export default {
	components: {
		"gedan-vue": gedanVue
	},
	data: function() {
		return {
			title1: "我创建的歌单",
			content1: [
				{
					title: "我喜欢的音乐",
					songNumber: 120,
					img: "../../asset/img/wode/8.jpg"
				},
				{
					title: "Lauv热门50单曲",
					songNumber: 50,
					img: "../../asset/img/wode/1.jpg"
				},
				{
					title: "kaidonWong的年度歌单",
					songNumber: 10,
					img: "../../asset/img/wode/2.jpg"
				}
			],
			title2: "我收藏的歌单",
			content2: [
				{
					title: "美国丽人American Beauty",
					songNumber: 120,
					img: "../../asset/img/wode/3.jpg"
				},
				{
					title: "美国丽人American Beauty",
					songNumber: 1,
					img: "../../asset/img/wode/4.jpg"
                },
                				{
					title: "美国丽人American Beauty",
					songNumber: 2,
					img: "../../asset/img/wode/5.jpg"
				},
			]
		};
	}
};
</script>
<style lang="scss" src="./wode.scss" scoped>
</style>