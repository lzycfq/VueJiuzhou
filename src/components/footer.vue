<template>
    <div id="footer">
        <div class="footer-box">
            <div class="footer-nav">
                <ul>
                    <li>关于九州</li>
                    <li>
                        <router-link to="/introduce">平台介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/join-in">加入我们</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">联系方式</router-link>
                    </li>
                </ul>
                <ul>
                    <li>服务保障</li>
                    <li>
                        <router-link to="/seven-star">七星标准</router-link>
                    </li>
                    <li>
                        <router-link to="/order">订单管理</router-link>
                    </li>
                    <li>
                        <router-link to="/special">服务特色</router-link>
                    </li>
                </ul>
                <ul>
                    <li>师傅加盟</li>
                    <li>
                        <router-link to="/admission">入驻条件</router-link>
                    </li>
                    <li>
                        <router-link to="/information">准备资料</router-link>
                    </li>
                    <li>
                        <router-link to="/red-lines">管理红线</router-link>
                    </li>
                    <li>
                        <router-link to="/wechat">微信接单</router-link>
                    </li>
                </ul>
            </div>
            <div class="phone-num">
                <img src="../assets/images/icon.png" alt="icon">
                <p style="font-size:20px;margin:24px 0 10px 0;">全国统一服务热线</p>
                <p style="font-size:26px;">0757-29292111</p>
            </div>
            <div class="wechat">
                <img src="../assets/images/wechat.png" alt="wechat">
            </div>
        </div>
        <div class="footer-bottom">
            &copy;2013-2018 www.lb-dj.com &nbsp; 九州联合报修服务有限公司版权所有 &nbsp;&nbsp; 粤ICP备16071335号-1 广东顺德容桂xxxx
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        go(val) {
            this.$router.push(val);
        }
    }
}
</script>

<style>
    #footer {
        width: 100%;
        background: #252525;
        color: #fff;
    }
    .footer-box {
        width: 1100px;
        margin: 0 auto;
        padding-bottom: 40px;
    }
    .footer-box:after {
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0;
    }
    .footer-box>div {
        float: left;
    }
    .footer-nav>ul {
        float: left;
        margin: 0 50px;
    }
    .footer-nav>ul>li {
        font-size: 12px;
        text-align: center;
        margin: 30px 0;
        cursor: pointer;
    }
    .footer-nav>ul>li:first-child {
        font-size: 16px;
        margin: 50px 0;
    }
    .footer-nav>ul>li a {
        color: #fff;
    }
    .phone-num {
        text-align: center;
        margin: 70px 0 0 160px;
    }
    .phone-num>img {
        width: 230px;
    }
    .wechat {
        float: right !important; 
        margin-top: 70px;
        margin-right: 40px;
    }
    .footer-bottom {
        text-align: center;
        font-size: 12px;
        background: #1C1C1C;
        padding: 30px 0;
    }
</style>


