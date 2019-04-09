<template>
    <div id="home">
        <div class="home_nav_bg" v-show="isNavBg != 0"></div>
        <section class="section-wrap">
            <div class="section section-1">
                <el-carousel class="text-banner" height="250px" trigger="click" indicator-position="none" arrow="never">
                    <el-carousel-item v-for="item in textBanner" :key="item.id">
                        <p class="banner-title">{{item.title}}</p>
                        <div class="banner-line"></div>
                        <p class="banner-text">{{item.text}}</p>
                    </el-carousel-item>
                    <a href="" class="invoice-btn">我要发单</a>
                </el-carousel>
            </div>
            <div class="section section-2">
                <div class="praise">
                    <div class="praise-info">
                        <p class="info-1">核心竞争力</p>
                        <p class="info-2">为卖家赚好评</p>
                        <p class="info-3">EARNING PRAISE FOR SELLERS</p>
                    </div>
                    <div class="praise-img">
                        <img src="../assets/images/praise.png" alt="">
                    </div>
                </div>
            </div>
            <div class="section section-3">
                <div class="seven-star">
                    <div class="seven-star-info">
                        <p class="info-1">创造七星级服务体验</p>
                        <p class="info-2">CREATE SEVEN STAR SERVICE EXPERIENCE</p>
                    </div>
                    <div class="seven-star-img">
                        <img src="../assets/images/seven_star.png" alt="">
                    </div>
                </div>
            </div>
            <div class="section section-4">
                <div class="promote">
                    <div class="promote-img">
                        <img src="../assets/images/promote.png" alt="">
                    </div>
                    <div class="promote-info">
                        <p class="info-1">促进每一单好评点赞</p>
                        <p class="info-2">PROMOTE EACH ORDER TO POSITIVE THUMB UP</p>
                    </div>
                </div>
            </div>
            <div class="section section-5">
                <div class="both-box"></div>
                <Footer></Footer>
            </div>
        </section>
        <ul class="section-btn">
            <li class="on"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
    import $ from 'jquery'
    import '../assets/js/mousewheel.min.js'
    import Footer from "../components/footer";
    export default {
        //用于SEO,每个页面都需要写
        metaInfo: {
            meta: [
                {
                    name: 'keywords',
                    content: '九州联保,九州,首页,联保'
                },
                {
                    name: 'description',
                    content: '九州联保'
                }
            ]
        },
        components: {
            Footer
        },
        data() {
            return {
                isNavBg: 0,

                //文字轮播
                textBanner: [
                    {title: '为卖家赚好评', text: 'EARNING PRAISE FOR SELLERS'},
                    {title: '创造七星级服务体验', text: 'CREATE SEVEN STAR SERVICE EXPERIENCE'},
                    {title: '促进每一单好评点赞', text: 'PROMOTE EACH ONE'}
                ]
            }
        },
        created() {
            this.$nextTick(function() {
                //滚屏效果
                var _this = this;
                $(function(){
                    var that = _this;
                    var i = 0;
                    var $btn = $('.section-btn li');
                    var $wrap = $('.section-wrap');
                    var $arrow = $('.arrow');

                    /*当前页面赋值*/
                    function up() {
                        i++;
                        if(i == $btn.length) {
                            i = $btn.length-1;
                        };
                    };
                    function down() {
                        i--;
                        if(i < 0) {
                            i = 0;
                        };
                    };

                    /*页面滑动*/
                    function run(){
                        //保存index判断是否展示nav背景
                        that.isNavBg = i;

                        $btn.eq(i).addClass('on').siblings().removeClass('on');
                        $wrap.attr("class","section-wrap").addClass(function() { return "put-section-"+i; }).find('.section').eq(i).find('.title').addClass('active');
                    };

                    /*右侧按钮点击*/
                    $btn.each(function(index) {
                        $(this).click(function(){
                            i = index;
                            run();
                        })
                    });

                    /*响应鼠标*/
                    $wrap.one('mousewheel',mouse_);
                    function mouse_(event) {
                        if(event.deltaY < 0) {
                            up();
                        } else {
                            down();
                        };
                        run();
                        setTimeout(function(){
                            $wrap.one('mousewheel',mouse_);
                        },1000)
                    };

                    /*响应键盘上下键*/
                    $(document).one('keydown',k);
                    function k(event) {
                        var e=event||window.event;
                        var key=e.keyCode||e.which||e.charCode;
                        switch(key)	{
                            case 38: down();run();	
                            break;
                            case 40: up();run();	
                            break;
                        };
                        setTimeout(function() {
                            $(document).one('keydown',k);
                        },1000);
                    }
                });
            })
        }
    };
</script>

<style scoped>
    #home{ 
        width:100%; 
        height:100vh; 
        overflow:hidden;
    }
    #home img {
        width: 100%;
    }
    .section-wrap{
        width:100%;
        height:100%;
        overflow:visible;
        transition:transform 1s cubic-bezier(0.86,0,0.03,1);
        -webkit-transition:-webkit-transform 1s cubic-bezier(0.86,0,0.03,1);
    }
    .section-wrap .section{ 
        position:relative; 
        width:100%; 
        height:100%; 
        background-position:center center; 
        background-repeat:no-repeat;
    }
    .section-wrap .section .title{
        width:100%;
        position:absolute;
        top:10%;
        color:#fff;
        font-size:2.4em;
        text-align:center;
    }
    .section-wrap .section .title p{ 
        padding:0 4%;
        opacity:0
    }
    .section-wrap .section .title.active .tit{ 
        opacity:1;
        transform:translateY(-25px);
        -webkit-transform:translateY(-25px);
        transition:all 2s cubic-bezier(0.86,0,0.8,1);
        -webkit-transition:all 2s cubic-bezier(0.86,0,0.8,1);
    }
    .section-wrap .section-1{ 
        width: 100%;
        height: 100%;
        background: url('../assets/images/home_1.jpg') center/cover no-repeat;
    }
    .section-wrap .section-2{ 
        width: 100%;
        height: 100%;
        background: url('../assets/images/home_2.jpg') center/cover no-repeat;
        padding-top: 60px;
        box-sizing: border-box;
    }
    .section-wrap .section-3{ 
        width: 100%;
        height: 100%;
        background: url('../assets/images/home_2.jpg') center/cover no-repeat;
        padding-top: 60px;
        box-sizing: border-box;
    }
    .section-wrap .section-4{ 
        width: 100%;
        height: 100%;
        background: url('../assets/images/home_2.jpg') center/cover no-repeat;
        padding-top: 60px;
        box-sizing: border-box;
    }
    .section-wrap .section-5{
        background: #1C1C1C;
    }
    .put-section-0{ 
        transform:translateY(0);
        -webkit-transform:translateY(0);
    }
    .put-section-1{ 
        transform:translateY(-100%);
        -webkit-transform:translateY(-100%);
    }
    .put-section-2{ 
        transform:translateY(-200%);
        -webkit-transform:translateY(-200%);
    }
    .put-section-3{ 
        transform:translateY(-300%);
        -webkit-transform:translateY(-300%);
    }
    .put-section-4{ 
        transform:translateY(-400%);
        -webkit-transform:translateY(-400%);
    }
    .section-btn{ 
        width:14px;
        position:fixed;
        right:4%;
        top:50%;
    }
    .section-btn li{ 
        width:14px;
        height:14px;
        cursor:pointer;
        text-indent:-9999px;
        border-radius:50%;
        -webkit-border-radius:50%;
        margin-bottom:12px; 
        background:#9ECDBD;
        text-align:center; 
        color:#fff; 
    }
    .section-btn li.on{ 
        background:#1EA57A;
    }
    .both-box {
        width: 100%;
        height: 150px;
        background: #1C1C1C;
    }
    .home_nav_bg {
        width: 100%;
        height: 60px;
        background: #000;
        position: fixed;
        z-index: 10;
    }
    .text-banner {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        color: #fff;
    }
    .banner-title {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    .banner-line {
        width: 8rem;
        height: 2px;
        background: #1EA57A;
        margin: 0 auto;
    }
    .banner-text {
        font-size: 0.7rem;
        margin: 1rem 0;
    }
    .invoice-btn {
        position: relative;
        top: 200px;
        background: #1DA47B;
        padding: 10px 24px;
        border-radius: 8px;
        font-size: .8rem;
        cursor: pointer;
        z-index: 9;
        color: #fff;
    }
    .praise {
        width: 1100px;
        height: 100%;
        position: relative;
        margin: 0 auto;
    }
    .praise-info {
        position: absolute;
        top: 50%;
        left: 160px;
        transform: translateY(-70%);
    }
    .praise-info .info-1 {
        font-size: 1rem;
        margin-bottom: 20px;
    }
    .praise-info .info-2 {
        font-size: 2rem;
    }
    .praise-info .info-3 {
        font-size: .8rem;
        margin-top: .8rem;
    }
    .praise-img {
        width: 440px;
        position: absolute;
        top: 50%;
        right: 100px;
        transform: translateY(-50%);
    }
    .seven-star {
        width: 1100px;
        padding: 0 50px;
        text-align: center;
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    .seven-star-info .info-1 {
        font-size: 2rem;
    }
    .seven-star-info .info-2 {
        font-size: .8rem;
        margin-top: .5rem;
    }
    .seven-star-img {
        padding: 0 100px;
        margin-top: 40px;
    }
    .promote {
        width: 1100px;
        height: 100%;
        margin: 0 auto;
        position: relative;
    }
    .promote-img {
        width: 400px;
        position: absolute;
        left: 100px;
        bottom: 0;
    }
    .promote-info {
        position: absolute;
        left: 500px;
        top: 50%;
        transform: translateY(-50%);
    }
    .promote-info .info-1 {
        font-size: 2rem;
    }
    .promote-info .info-2 {
        font-size: .8rem;
        margin-top: .5rem;
    }
    @keyframes arrow{ 
        0%,100%{
            bottom:10px; 
            opacity:1;
        } 
        50%{
            bottom:50px; 
            opacity:.5;
        } 
    }
    @-webkit-keyframes arrow{ 
        0%,100%{
            bottom:10px; 
            opacity:1;
        } 
        50%{
            bottom:50px; 
            opacity:.5;
        } 
    }
</style>
