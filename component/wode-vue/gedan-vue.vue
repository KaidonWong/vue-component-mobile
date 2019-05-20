<template>
	<div class="gd-base" :class="onClass">
		<div class="header">
			<div class="left" @click="onToggle">
				<div class="iconfont icon-arrowdown"></div>
				<div>
					{{title}}
					<span>({{content.length}})</span>
				</div>
			</div>
			<div class="right">
				<div class="iconfont icon-dots"></div>
			</div>
		</div>
		<div class="content">
			<div v-for="(item,index) of content" :key="index" class="item clearfix" @click="goto('woxihuan')">
				<div class="icon">
					<div class="pic-container">
						<img :src="item.img" alt>
					</div>
				</div>
				<div class="para">
					<div>{{item.title}}</div>
					<div>{{item.songNumber}}首歌曲</div>
				</div>
			</div>
		</div>
		<div style="display: none">
			<img src="../../asset/img/wode/1.jpg" alt>
			<img src="../../asset/img/wode/2.jpg" alt>
			<img src="../../asset/img/wode/3.jpg" alt>
			<img src="../../asset/img/wode/4.jpg" alt>
			<img src="../../asset/img/wode/5.jpg" alt>
			<img src="../../asset/img/wode/6.jpg" alt>
			<img src="../../asset/img/wode/7.jpg" alt>
			<img src="../../asset/img/wode/8.jpg" alt>
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			onClass: {
				on: false
			}
		};
	},
	props: {
		title: String,
		content: Array
	},
	methods: {
		onToggle: function() {
			this.onClass.on = !this.onClass.on;
        },
        goto: function(e) {
            this.$router.push({path:"/wode/woxihuan"});
        }
	}
};
</script>
<style lang="scss" scoped>
@import "../../common/pic-container.scss";
.gd-base {
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em;
		.left {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 45%;
			> div {
				line-height: 1;
				&:nth-of-type(2) {
					font-size: 1.1em;
				}
				span {
					font-size: 0.8em;
					color: #aaaaaa;
				}
			}
			.icon-arrowdown {
				transition: transform 0.2s;
				transform-origin: 50% 40%;
				transform: rotate(-90deg);
			}
		}
		.right {
		}
	}
	.content {
        display: none;
		.item {
            margin: 0em 1em 1em 1em;
			.icon {
                float: left;
                width: 3em;
				@include pic-container(100%);
				img {
					border-radius: 0.3em;
				}
			}
			.para {
                float: left;
                padding: 0.5em;
                >div {
                    line-height: 1;
                    &:first-of-type {

                    }
                    &:last-of-type {
                        margin-top: 0.2em;
                        color: #aaaaaa;
                        font-size: 0.8em;
                    }
                }
			}
		}
	}
	&.on {
		.header {
			.left {
				.icon-arrowdown {
					transform: rotate(0);
				}
			}
        }
        .content {
            display: block;
        }
	}
}
</style>