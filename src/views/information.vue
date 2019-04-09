<template>
    <div id="information">
        <div>
            <img src="../assets/images/join_in.jpg" alt="头图">
        </div>
        <div class="information-main">
            <div class="information-main-img">
                <img src="../assets/images/information.png" alt="准备资料">
            </div>
            <div class="information-main-info">
                <p class="information-main-title">准备资料：</p>
                <div class="information-main-step">
                    <ul class="information-main-circle">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="information-main-text">
                    <ul class="information-main-item">
                        <li style="top: 1rem;left: 0;">个人近照</li>
                        <li style="top: -2rem;left: 160px;">办公场景</li>
                        <li style="top: 1rem;left: 341px;">门头</li>
                        <li style="top: -2rem;left: 453px;">身份证正反照片</li>
                        <li style="top: 1rem;left: 634px;">资格证照片</li>
                    </ul>
                </div>
            </div>
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
            informationData: []
        }
    },
    methods: {
        getData() {
            this.$axios.get('/api/information').then(res=>{
                this.informationData = res.data.data
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
    #information img {
        width: 100%;
    }
    .information-main {
        width: 1100px;
        margin: 0 auto;
        padding: 50px 0 180px;
    }
    .information-main-img {
        width: 140px;
        height: 140px;
        margin: 0 auto;
    }
    .information-main-info {
        width: 67%;
        margin: 60px auto;
    }
    .information-main-title {
        margin-bottom: 100px;
    }
    .information-main-step {
        padding: 0 41px 0 25px;
    }
    .information-main-circle {
        border-top: 1px solid #000;
    }
    .information-main-circle li {
        width: 1rem;
        height: 1rem;
        border: 1px solid #000;
        border-radius: 50%;
        float: left;
        margin-top: -0.5rem;
        margin-right: 135px;
        background: #fff;
    }
    .information-main-circle li:last-child {
        margin-right: 0;
    }
    .information-main-item {
        position: relative;
    }
    .information-main-item li {
        /* width: 20%; */
        /* float: left;
        text-align: center;
        font-size: 0.8rem;
        box-sizing: border-box; */
        font-size: 0.8rem;
        position: absolute;
    }
</style>
