<template>
    <div id="express">
        <div>
            <img src="../assets/images/express.jpg" alt="头图">
        </div>
        <div class="express-main">
            （文图物流提供）
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
            expressData: []
        }
    },
    methods: {
        getData() {
            this.$axios.get('/api/express').then(res=>{
                this.expressData = res.data.data
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
    #express img {
        width: 100%;
    }
    .express-main {
        width: 1100px;
        height: 500px;
        margin: 0 auto;
        padding: 150px 0 100px;
        text-align: center;
        font-size: 0.8rem;
    }
</style>
