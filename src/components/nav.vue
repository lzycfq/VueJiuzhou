<template>
    <div id="nav" :class="[activeIndex == '/'?'nav-fixed':'nav-absolute']">
        <div class="nav-box">
            <div class="nav-icon">
                <img src="../assets/images/icon.png" alt="icon">
            </div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                <el-menu-item index="/">
                    <router-link to="/">首页</router-link>
                </el-menu-item>
                <el-menu-item index="/activity">
                    <router-link to="/activity">最新活动</router-link>
                </el-menu-item>
                <el-submenu index="service">
                    <template slot="title">服务保障</template>
                    <el-menu-item index="/seven-star">
                        <router-link to="/seven-star">七星级标准含义</router-link>
                    </el-menu-item>
                    <el-menu-item index="/order">
                        <router-link to="/order">订单节点管理</router-link>
                    </el-menu-item>
                    <el-menu-item index="/special">
                        <router-link to="/special">服务特色</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="join">
                    <template slot="title">师傅加盟</template>
                    <el-menu-item index="/admission">
                        <router-link to="/admission">入驻条件</router-link>
                    </el-menu-item>
                    <el-menu-item index="/information">
                        <router-link to="/information">准备资料</router-link>
                    </el-menu-item>
                    <el-menu-item index="/red-lines">
                        <router-link to="/red-lines">管理红线</router-link>
                    </el-menu-item>
                    <el-menu-item index="/wechat">
                        <router-link to="/wechat">使用微信接单</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="/share">
                    <router-link to="/share">案例分享</router-link>
                </el-menu-item>
                <el-menu-item index="/resources">
                    <router-link to="/resources">人力资源</router-link>
                </el-menu-item>
                <el-menu-item index="/express">
                    <router-link to="/express">快递与仓储</router-link>
                </el-menu-item>
                <el-submenu index="about">
                    <template slot="title">关于九州联保</template>
                    <el-menu-item index="/introduce">
                        <router-link to="/introduce">平台介绍</router-link>
                    </el-menu-item>
                    <el-menu-item index="/join-in">
                        <router-link to="/join-in">加入我们</router-link>
                    </el-menu-item>
                    <el-menu-item index="/contact">
                        <router-link to="/contact">联系方式</router-link>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '/'
        }
    },
    watch: {
		$route(){
			this.activeIndex = this.$route.path;
		}
	},
    methods: {
        // handleSelect(key, keyPath) {
        //     this.$router.push(key);
        // }
    },
    created() {
		this.activeIndex = this.$route.path;
	}
}
</script>

<style>
    /* .el-menu--horizontal {
        border-bottom: none;
        float: right;
        background: rgba(0, 0, 0, 0);
    }
    .el-menu--horizontal>.el-menu-item.is-active {
        border-bottom: 2px solid #1DA47B;
        color: #1DA47B;
    }
    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
        border-bottom: 2px solid #1DA47B;
        color: #1DA47B;
    }
    .el-menu--horizontal>.el-submenu:focus .el-submenu__title {
        color: #fff;
    }
    .el-menu--horizontal .el-menu-item {
        color: #fff;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title {
        color: #fff;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
        color: #1DA47B;
        background: transparent;
    }
    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
        outline: 0;
        color: #1DA47B;
        background: transparent;
    }
    .el-menu--popup-bottom-start {
        background: #222;
    }
    .el-menu--horizontal .el-menu .el-menu-item {
        background: #222;
    }
    .el-menu--horizontal .el-menu .el-menu-item.is-active {
        background: #1DA47B;
        color: #fff;
    }
    .el-menu--horizontal .el-menu .el-menu-item {
        color: #fff;
    }
    .el-menu--popup {
        min-width: 150px;
    } */

    /* .el-menu-item {
        padding: 0;
    }
    .el-menu-item a {
        padding: 0 20px;
        display: inline-block;
        color: #fff;
        -moz-box-sizing: border-box;  
        -webkit-box-sizing: border-box; 
        -o-box-sizing: border-box; 
        -ms-box-sizing: border-box; 
        box-sizing: border-box;
        width: 100%;
    }
    .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
        padding: 0;
    } */
    
    #nav {
        width: 100%;
    }
    .nav-fixed {
        position: fixed;
        z-index: 99;
        border-bottom: 1px solid #fff;
    }
    .nav-absolute {
        position: absolute;
        z-index: 99;
    }
    #nav::after {
        content: '';
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
    }
    .nav-box {
        width: 1100px;
        margin: 0 auto;
    }
    .nav-icon {
        float: left;
    }
    .nav-icon>img {
        width: 212px;
    }
</style>
