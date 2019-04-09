<template>
    <div id="share">
        <div>
            <img src="../assets/images/share.jpg" alt="头图">
        </div>
        <div class="share-main">
            不断更新促进好评方法案例（使用公司微信发布内容）、更新处置中差评案例、小众化产品按维注意事项、
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
            shareData: []
        }
    },
    methods: {
        getData() {
            this.$axios.get('/api/share').then(res=>{
                this.shareData = res.data.data
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
    #share img {
        width: 100%;
    }
    .share-main {
        width: 1100px;
        height: 500px;
        margin: 0 auto;
        padding: 150px 0 100px;
        text-align: center;
        font-size: 0.8rem;
    }
</style>
