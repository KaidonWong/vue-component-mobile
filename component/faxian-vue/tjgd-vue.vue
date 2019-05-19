<template>
	<div class="tjgd">
		<div class="header">
			<div class="title">推荐歌单</div>
			<button-vue style="font-size:0.8em;">歌单广场</button-vue>
		</div>
		<div class="content">
			<div class="box" v-for="(item,index) of boxes" :key="index" >
				<div class="cover">
					<div class="pic-container">
						<img :src="item.cover" alt>
					</div>
				</div>
				<div class="label">{{item.label}}</div>
			</div>
		</div>
		<div style="display: none">
			<img src="../../asset/img/faxian/tuijiangedan/1.jpg" alt>
			<img src="../../asset/img/faxian/tuijiangedan/2.jpg" alt>
			<img src="../../asset/img/faxian/tuijiangedan/3.jpg" alt>
			<img src="../../asset/img/faxian/tuijiangedan/4.jpg" alt>
			<img src="../../asset/img/faxian/tuijiangedan/5.jpg" alt>
			<img src="../../asset/img/faxian/tuijiangedan/6.jpg" alt>
		</div>
	</div>
</template>
<script>
import buttonVue from "../button-vue/button1-vue.vue";
export default {
	data: function() {
		return {
			boxes: [
				{
					cover: "../../asset/img/faxian/tuijiangedan/1.jpg",
					label: "拯救歌荒大作战！下一首单曲循环"
				},
				{
					cover: "../../asset/img/faxian/tuijiangedan/2.jpg",
					label: "拯救歌荒大作战！下一首单曲循环"
				},
				{
					cover: "../../asset/img/faxian/tuijiangedan/3.jpg",
					label: "拯救歌荒大作战！下一首单曲循环"
				},
				{
					cover: "../../asset/img/faxian/tuijiangedan/4.jpg",
					label: "拯救歌荒大作战！下一首单曲循环"
				},
				{
					cover: "../../asset/img/faxian/tuijiangedan/5.jpg",
					label: "拯救歌荒大作战！下一首单曲循环"
				},
				{
					cover: "../../asset/img/faxian/tuijiangedan/6.jpg",
					label: "拯救歌荒大作战！下一首单曲循环"
				}
			]
		};
	},
	components: {
		"button-vue": buttonVue
	}
};
</script>
<style lang="scss" scoped>
@import "../../common/pic-container.scss";
.tjgd {
	padding: 1em 0.5em;
	.header {
		display: flex;
		justify-content: space-between;
        align-items: center;
        padding: 0 0.5em;
		.title {
			font-size: 1.1em;
		}
	}
	.content {
        display: flex;
        flex-wrap: wrap;
		.box {
            width: calc(100% / 3);
            padding: 0.5em;
			.cover {
				@include pic-container(100%);
            }
            .label {
                font-size: 0.7em;
            }
		}
	}
}
</style>
