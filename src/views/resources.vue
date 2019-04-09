<template>
    <div id="resources">
        <div>
            <img src="../assets/images/resources.jpg" alt="头图">
        </div>
        <div class="resources-main">
            人力资源（九州联保招聘、其他友商招聘岗位、人力资源输出、合作商家客服培养）
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
            resourcesData: []
        }
    },
    methods: {
        getData() {
            this.$axios.get('/api/resources').then(res=>{
                this.resourcesData = res.data.data
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
    #resources img {
        width: 100%;
    }
    .resources-main {
        width: 1100px;
        height: 500px;
        margin: 0 auto;
        padding: 150px 0 100px;
        text-align: center;
        font-size: 0.8rem;
    }
</style>
