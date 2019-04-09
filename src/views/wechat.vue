<template>
    <div id="wechat">
        <div>
            <img src="../assets/images/join_in.jpg" alt="头图">
        </div>
        <div class="wechat-main">
            使用微信小程序接单方法（王建补充截图）
        </div>
    </div>
</template>

<script>
export default {
    metaInfo: {
        meta: [
            {
                name: 'keywords',
                content: '九州联保,九州,联保,微信小程序'
            },
            {
                name: 'description',
                content: '九州联保'
            }
        ]
    },
    data() {
        return {
            wechatData: []
        }
    },
    methods: {
        getData() {
            this.$axios.get('/api/wechat').then(res=>{
                this.wechatData = res.data.data
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
    #wechat img {
        width: 100%;
    }
    .wechat-main {
        width: 1100px;
        height: 500px;
        margin: 0 auto;
        padding: 50px 0 100px;
        font-size: 0.8rem;
    }
</style>
