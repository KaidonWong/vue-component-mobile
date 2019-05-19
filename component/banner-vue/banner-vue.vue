<template>
	<div v-swipeleft="onLeft" v-swiperight="onRight" class="cover-mask" style="width: 100%;">
		<div
			class="banner-container clearfix"
			:style="[styleBannerContainerWidth,styleBannerContainerTranslate,styleBannerContainerTransition]"
		>
			<div
				class="banner"
				:style="styleBannerWidth"
				v-for="(item,index) of picSrcArrAdded"
				:key="index"
			>
				<div class="pic-container">
					<img :src="item" alt>
				</div>
			</div>
			<div style="display:none">
				<!-- 为了加载图片资源 -->
				<img src="../../asset/img/faxian/banner/1.jpg" alt>
				<img src="../../asset/img/faxian/banner/2.jpg" alt>
				<img src="../../asset/img/faxian/banner/3.jpg" alt>
				<img src="../../asset/img/faxian/banner/4.jpg" alt>
				<img src="../../asset/img/faxian/banner/5.jpg" alt>
				<img src="../../asset/img/faxian/banner/6.jpg" alt>
			</div>
		</div>
        <div class='button-container'>
            <banner-button-vue :index='currentIndex' :total="picTotal"></banner-button-vue>
        </div>
	</div>
</template>
<script>
import bannerButtonVue from "./banner-button-vue.vue";
const constAnimationOn = {
	transition: "transform 0.2s ease-in-out"
};
const constAnimationOff = {
	transition: "none"
};
export default {
	props: {
		picSrcArr: Array
    },
    components: {
        "banner-button-vue": bannerButtonVue
    },
	data: function() {
		let length = this.picSrcArr.length + 2;
		return {
			picTotal: length,
			currentIndex: 1,
			transitionStatus: true,
			styleBannerWidth: {
				width: `${100 / length}%`
			},
			styleBannerContainerWidth: {
				width: `${length * 100}%`
			},
			styleBannerContainerTransition: constAnimationOn,
		};
	},
	computed: {
		picSrcArrAdded: function() {
			//收尾多增加一个图片，实现轮播效果
			let ret = new Array();
			ret.push(this.picSrcArr[this.picSrcArr.length - 1]);
			ret.splice(1, 0, ...this.picSrcArr);
			ret.push(this.picSrcArr[0]);
			return ret;
		},
		styleBannerContainerTranslate: function() {
			return {
				transform: `translateX(${(-100 / this.picTotal) *
					this.currentIndex}%)`
			};
		}
	},
	methods: {
		adjustOffset: function(direction) {
			if (direction == "left") {
				//处于末尾的位置
				if (this.currentIndex == this.picTotal - 1) {
					this.styleBannerContainerTransition = constAnimationOff;
					this.currentIndex = 1;
					setTimeout(() => {
						this.styleBannerContainerTransition = constAnimationOn;
						this.currentIndex++;
					},10);
				} else {
					this.currentIndex++;
				}
			} else {
				//处于开始的位置
				if (this.currentIndex == 0) {
					this.styleBannerContainerTransition = constAnimationOff;
					this.currentIndex = this.picTotal - 2;
					setTimeout(() => {
						this.styleBannerContainerTransition = constAnimationOn;
						this.currentIndex--;
					},10);
				} else {
					this.currentIndex--;
				}
			}
		},
		onLeft: function() {
			this.adjustOffset("left");
		},
		onRight: function() {
			this.adjustOffset("right");
		}
    },
    mounted: function() {
        setInterval(()=>{
            this.onLeft();
        },5000);
    }
};
</script>
<style lang="scss" scoped>
@import "../../common/pic-container.scss";
.cover-mask {
    position: relative;
	overflow-x: hidden;
	.banner-container {
		.banner {
			float: left;
			padding: 0.5em;
			@include pic-container(40%);
			img {
				border-radius: 0.5em;
			}
		}
    }
    .button-container {
        position: absolute;
        width: 100%;
        bottom: 0.6em;
        text-align: center;
    }
}
</style>
