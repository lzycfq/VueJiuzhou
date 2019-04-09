<template>
    <div id="special">
        <div>
            <img src="../assets/images/service.jpg" alt="头图">
        </div>
        <div class="special-main-top">
            <p class="special-main-top-title">服务特色</p>
            <div class="special-main-top-list">
                <div class="special-main-top-item">
                    <div class="special-main-top-box special-main-top-box-1">
                        <p class="special-main-top-box-title">用户体验</p>
                        <div class="special-main-top-box-icon special-main-top-box-icon-1"></div>
                        <p class="special-main-top-box-info">（沟通及时透明、充分知情与选择权、促进好评）</p>
                    </div>
                </div>
                <div class="special-main-top-item">
                    <div class="special-main-top-box special-main-top-box-2">
                        <p class="special-main-top-box-title">价格公开</p>
                        <div class="special-main-top-box-icon special-main-top-box-icon-2"></div>
                        <p class="special-main-top-box-info">（材料费、附加人工费全国统一）</p>
                    </div>
                </div>
                <div class="special-main-top-item">
                    <div class="special-main-top-box special-main-top-box-3">
                        <p class="special-main-top-box-title">职业道德</p>
                        <div class="special-main-top-box-icon special-main-top-box-icon-3"></div>
                        <p class="special-main-top-box-info">（服务分管理、管理红线）</p>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="special-main-center">
            <p class="special-main-center-title">九州实力</p>
            <ul class="special-main-center-ul">
                <li :class="[showBg == 1?'clicked':'def']" @click="showChart(1)">专业能力</li>
                <li :class="[showBg == 2?'clicked':'def']" @click="showChart(2)">考核上岗</li>
                <li :class="[showBg == 3?'clicked':'def']" @click="showChart(3)">证书与资质</li>
                <li :class="[showBg == 4?'clicked':'def']" @click="showChart(4)">作业规范</li>
                <li :class="[showBg == 5?'clicked':'def']" @click="showChart(5)">获奖照片</li>
            </ul>
        </div>
        <div class="special-main-other">
            <p>专业能力（配多张网点学习、作业、获奖照片）；</p>
            <p>考核上岗、一线作业师傅每月参加当地培训，经过实操考核后上岗；（配图）</p>
            <p>证书与资质、大区级合作网点拥有国家规定的各种岗位证书：如电工证、高空作业证、燃气资格证等。</p>
            <p>作业规范、着装持证上岗、不在用户喝水、吸烟，（配图）</p>
            <p>获奖照片（配图）专业售后管理经验，从锦旗到好评；</p>
        </div>
        <div class="kong"></div>
        <div class="special-main-bottom">
            <ul class="special-main-bottom-ul">
                <li>
                    <div class="special-main-bottom-img">
                        <img src="../assets/images/dot.png" alt="5万多家网点">
                    </div>
                    <p class="special-main-bottom-title">5万多家网点</p>
                    <p class="special-main-bottom-num">50000</p>
                </li>
                <li>
                    <div class="special-main-bottom-img">
                        <img src="../assets/images/worker.png" alt="20万一线师傅">
                    </div>
                    <p class="special-main-bottom-title">20万一线师傅</p>
                    <p class="special-main-bottom-num">200000</p>
                </li>
                <li>
                    <div class="special-main-bottom-img">
                        <img src="../assets/images/area.png" alt="90%地区可以进村">
                    </div>
                    <p class="special-main-bottom-title">90%地区可以进村</p>
                    <p class="special-main-bottom-num">90%</p>
                </li>
                <li>
                    <div class="special-main-bottom-img">
                        <img src="../assets/images/coverage.png" alt="99%国内覆盖率">
                    </div>
                    <p class="special-main-bottom-title">99%国内覆盖率</p>
                    <p class="special-main-bottom-num">99%</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo: {
        meta: [
            {
                name: 'keywords',
                content: '九州联保,九州,联保'
            },
            {
                name: 'description',
                content: '九州联保'
            }
        ]
    },
    data() {
        return {
            showBg: 0,
            specialData: []
        }
    },
    methods: {
        showChart(val) {
            this.showBg = val;
        },
        getData() {
            this.$axios.get('/api/special').then(res=>{
                this.specialData = res.data.data
            })
            .catch(res=>{
                alert('请求失败')
            })
        }
    },
    created() {
        this.getData();
    }
}
</script>

<style scoped>
    #special img {
        width: 100%;
    }
    .special-main-top {
        width: 1100px;
        margin: 0 auto;
        text-align: center;
        padding: 50px 0 70px;
    }
    .special-main-top-title {
        font-size: 1.4rem;
        font-weight: 700;
        letter-spacing:4px;
        padding-bottom: 50px;
    }
    .special-main-top-list::after {
        content: '';
        clear: both;
        display: block;
        visibility: hidden;
        height: 0;
    }
    .special-main-top-item {
        width: 33.3%;
        box-sizing: border-box;
        padding: 0 50px;
        float: left;
    }
    .special-main-top-box {
        width: 100%;
        border: 1px solid #666;
        border-radius: 3px;
        padding: 30px 0 60px;
        box-sizing: border-box;
    }
    .special-main-top-box-title {
        font-weight: 700;
        font-size: 0.8rem;
    }
    .special-main-top-box-icon {
        width: 80px;
        height: 80px;
        margin: 50px auto;
    }
    .special-main-top-box-icon-1 {
        background: url('../assets/images/user_test_1.png') center/cover no-repeat;
    }
    .special-main-top-box-icon-2 {
        background: url('../assets/images/open_price_1.png') center/cover no-repeat;
    }
    .special-main-top-box-icon-3 {
        background: url('../assets/images/professional_ethics_1.png') center/cover no-repeat;
    }
    .special-main-top-box-info {
        font-size: 0.4rem;
    }
    .special-main-top-box:hover {
        color: #fff;
        background: #1DA47B;
        border: 1px solid #1DA47B;
    }
    .special-main-top-box-1:hover .special-main-top-box-icon-1{
        background: url('../assets/images/user_test_2.png') center/cover no-repeat;
    }
    .special-main-top-box-2:hover .special-main-top-box-icon-2{
        background: url('../assets/images/open_price_2.png') center/cover no-repeat;
    }
    .special-main-top-box-3:hover .special-main-top-box-icon-3{
        background: url('../assets/images/professional_ethics_2.png') center/cover no-repeat;
    }

/***** 中部 *****/
    .special-main-center {
        width: 1100px;
        margin: 0 auto;
        text-align: center;
        padding: 60px 0 20px;
    }
    .special-main-center-title {
        font-size: 1.4rem;
        font-weight: 700;
        letter-spacing:4px;
        padding-bottom: 50px;
    }
    .special-main-center-ul::after {
        content: '';
        clear: both;
        display: block;
        visibility: hidden;
        height: 0;
    }
    .special-main-center-ul li {
        width: 120px;
        height: 120px;
        float: left;
        border-radius: 50%;
        line-height: 120px;
        font-size: 0.4rem;
        margin-right: 120px;
        cursor: pointer;
    }
    .special-main-center-ul li:last-child {
        margin-right: 0;
    }
    .def {
        background: #F2F2F2;
    }
    .clicked {
        background: #1DA47B;
        color: #fff;
    }
    .special-main-other {
        background: #F2F2F2;
        padding: 80px 0 160px;
        text-align: center;
        line-height: 4;
    }

    .special-main-other p {
        font-size: 0.4rem;
    }
    .kong {
        width: 100%;
        height: 100px;
    }

/***** 靠近底部 *****/
    .special-main-bottom {
        background: #1DA47B;
    }
    .special-main-bottom-ul {
        width: 1100px;
        margin: 0 auto;
        text-align: center;
        padding: 60px 0 80px;
        color: #fff;
        display:-webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content:space-between;
        justify-content:space-between;
        -moz-box-pack:space-between;
        -webkit--moz-box-pack:space-between;
        box-pack:space-between;
    }
    .special-main-bottom-img {
        width: 80px;
        height: 80px;
        margin: 20px auto;
    }
    .special-main-bottom-title {
        font-size: 0.8rem;
        margin-bottom: 60px;
    }
    .special-main-bottom-num {
        font-weight: 700;
        font-size: 2rem;
    }
</style>
