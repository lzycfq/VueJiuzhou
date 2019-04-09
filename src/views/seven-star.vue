<template>
    <div id="seven-star">
        <div>
            <img src="../assets/images/service.jpg" style="width: 100%;" alt="头图">
        </div>
        <div class="seven-star-main">
            <p class="seven-star-main-title">七星级标准</p>
            <div class="seven-star-top">
                <div>
                    <img src="../assets/images/reply.png" alt="快速回复">
                    <p>快速回复</p>
                </div>
                <div>
                    <img src="../assets/images/major.png" alt="专业性强">
                    <p>专业性强</p>
                </div>
                <div>
                    <img src="../assets/images/consider.png" alt="为客着想">
                    <p>为客着想</p>
                </div>
            </div>
            <div class="seven-star-bottom">
                <div>
                    <img src="../assets/images/handle.png" alt="及时处理">
                    <p>及时处理</p>
                </div>
                <div>
                    <img src="../assets/images/variable.png" alt="灵活变通应对特殊情况">
                    <p>灵活变通应对特殊情况</p>
                </div>
                <div>
                    <img src="../assets/images/experience.png" alt="客人极致体验">
                    <p>客人极致体验</p>
                </div>
                <div>
                    <img src="../assets/images/thumbs.png" alt="促进每单好评">
                    <p>促进每单好评</p>
                </div>
            </div>
        </div>
        <div class="order-main">
            <div class="order-main-box">
                <p class="order-main-title">订单节点管理</p>
                <ul class="order-ul">
                    <li class="order-li">
                        <div class="order-div order-div-first-div">
                            <div class="order-div-img two-p">
                                <img src="../assets/images/order.png" alt="订单">
                            </div>
                            <p>录入订单发出短信</p>
                            <p>并做电话预约倒流</p>
                        </div>
                    </li>
                    <li class="order-li">
                        <div class="order-div">
                            <div class="order-div-img">
                                <img src="../assets/images/phone.png" alt="订单">
                            </div>
                            <p>全部订单电话回访</p>
                        </div>
                    </li>
                    <li class="order-li">
                        <div class="order-div">
                            <div class="order-div-img">
                                <img src="../assets/images/sms.png" alt="订单">
                            </div>
                            <p>商家信息1分钟内回复</p>
                        </div>
                    </li>
                    <li class="order-li">
                        <div class="order-div">
                            <div class="order-div-img">
                                <img src="../assets/images/feedback.png" alt="订单">
                            </div>
                            <p>商家需求10分钟内反馈解决</p>
                        </div>
                    </li>
                    <li class="order-li">
                        <div class="order-div">
                            <div class="order-div-img">
                                <img src="../assets/images/time.png" alt="订单">
                            </div>
                            <p>事件订单24小时内解决</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="kong"></div>
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
            sevenStarData: []
        }
    },
    methods: {
        getData() {
            this.$axios.get('/api/sevenStar').then(res=>{
                this.sevenStarData = res.data.data
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
    .seven-star-main {
        width: 1100px;
        margin: 0 auto;
        text-align: center;
        padding: 50px 0;
    }
    .seven-star-main-title {
        font-size: 1.4rem;
        font-weight: 700;
        letter-spacing:4px;
        padding-bottom: 30px;
    }
    .seven-star-main img {
        width: 4rem;
        margin: 0 auto;
    }
    .seven-star-top>div {
        width: 33%;
        float: left;
        padding: 50px 0;
        box-sizing: border-box;
    }
    .seven-star-top::after {
        content: '';
        clear: both;
        display: block;
        visibility: hidden;
        height: 0;
    }
    .seven-star-top p {
        margin-top: 20px;
    }
    .seven-star-bottom {
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
    .seven-star-bottom>div {
        padding: 50px 0;
    }
    .seven-star-bottom p {
        margin-top: 20px;
    }

    .order-main {
        background: #F0F0F0;
    }
    .order-main-box {
        width: 1100px;
        margin: 0 auto;
        text-align: center;
        padding-bottom: 130px;
    }
    .order-main-title {
        font-size: 1.4rem;
        font-weight: 700;
        letter-spacing:4px;
        padding: 50px 0 70px;
    }
    .order-ul::after {
        content: '';
        clear: both;
        display: block;
        visibility: hidden;
        height: 0;
    }
    .order-ul li {
        float: left;
        width: 20%;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .order-div {
        width: 100%;
        background: #fff;
        padding: 40px 4px 60px 4px;
        box-sizing: border-box;
        -webkit-transition: all .3s ease .1s;
        -moz-transition: all .3s ease .1s;
        -o-transition: all .3s ease .1s;
        transition: all .3s ease .1s;
    }
    .order-div:hover {
        transform: translateY(-6px);
        box-shadow: 0px 3px 10px 2px #ccc;
    }
    .order-div-first-div {
        padding: 40px 4px 51px 4px;
    }
    .order-div-img {
        padding: 60px;
        box-sizing: border-box;
    }
    .two-p {
        padding: 60px 60px 50px 60px;
    }
    .order-div p {
        font-size: 0.6rem;
    }
    .kong {
        width: 100%;
        height: 100px;
    }
</style>
