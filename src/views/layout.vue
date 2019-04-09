<template>
	<div class="app-wrapper">
		<div class="main-container">
			<!-- 头部组件渲染 -->
			<Nav></Nav>
			<!-- 添加一个element-ui内置的过渡动画 -->
			<!-- <transition name="el-zoom-in-center"> -->
			<!-- 通过路由渲染不同内容的页面 -->
				<router-view></router-view>
			<!-- </transition> -->
			<Footer v-show="routePath != '/'"></Footer>
		</div>
	</div>
</template>

<script>
import Nav from "../components/nav";
import Footer from "../components/footer";

export default {
	name: "layout",
	components: {
		Nav,
		Footer
	},
	data() {
		return {
			routePath: ''
		}
	},
    watch: {
		$route(){
			this.routePath = this.$route.path;
		}
	},
	created() {
		this.routePath = this.$route.path;
	}
};
</script>