<template>
    <div id="introduce">
        <div>
            <img src="../assets/images/about.jpg" alt="头图">
        </div>
        <div class="introduce-main">
            <p class="introduce-main-title">{{introduceData.title}}</p>
            <p class="introduce-main-text">{{introduceData.text1}}</p>
            <p class="introduce-main-text">{{introduceData.text2}}</p>
            <ul class="introduce-main-ul">
                <li>
                    <div class="introduce-main-img">
                        <img src="../assets/images/location.png" alt="平台定位">
                    </div>
                    <p class="introduce-main-info">平台定位</p>
                    <p class="introduce-main-msg">为优秀服务商提供更多支持</p>
                </li>
                <li>
                    <div class="introduce-main-img">
                        <img src="../assets/images/mission.png" alt="平台使命">
                    </div>
                    <p class="introduce-main-info">平台使命</p>
                    <p class="introduce-main-msg">提升售后服务行业水平</p>
                    <p class="introduce-main-msg">让优秀从业者得到更多回报</p>
                </li>
                <li>
                    <div class="introduce-main-img">
                        <img src="../assets/images/worth.png" alt="价值观">
                    </div>
                    <p class="introduce-main-info">价值观</p>
                    <p class="introduce-main-msg">多劳多得 优胜劣汰</p>
                    <p class="introduce-main-msg">共赢发展 振兴行业</p>
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
            introduceData: []
        }
    },
    methods: {
        getData() {
            this.$axios.get('/api/introduce').then(res=>{
                this.introduceData = res.data.data
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
    #introduce img {
        width: 100%;
    }
    .introduce-main {
        width: 1100px;
        margin: 0 auto;
        padding: 60px 0 200px;
    }
    .introduce-main-title {
        margin-bottom: 20px;
    }
    .introduce-main-text {
        font-size: 0.6rem;
        line-height: 1.6;
    }
    .introduce-main-ul {
        margin-top: 120px;
        text-align: center;
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
    .introduce-main-ul li {
        padding: 0 50px;
    }
    .introduce-main-img {
        width: 100px;
        height: 100px;
        margin: 0 auto;
    }
    .introduce-main-info {
        margin: 30px 0 20px;
    }
    .introduce-main-msg {
        font-size: 0.6rem;
    }
</style>
