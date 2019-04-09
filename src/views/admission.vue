<template>
    <div id="admission">
        <div>
            <img src="../assets/images/join_in.jpg" alt="头图">
        </div>
        <div class="admission-main">
            <div class="admission-main-img">
                <img src="../assets/images/admission.png" alt="入驻条件">
            </div>
            <div class="admission-main-info">
                <p class="admission-main-title">{{admissionData.title}}</p>
                <p class="admission-main-text">{{admissionData.text1}}</p>
                <p class="admission-main-text">{{admissionData.text2}}</p>
                <p class="admission-main-text">{{admissionData.text3}}</p>
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
            admissionData: []
        }
    },
    methods: {
        getData() {
            this.$axios.get('/api/admission').then(res=>{
                this.admissionData = res.data.data
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
    #admission img {
        width: 100%;
    }
    .admission-main {
        width: 1100px;
        margin: 0 auto;
        padding: 50px 0 180px;
    }
    .admission-main-img {
        width: 140px;
        height: 140px;
        margin: 0 auto;
    }
    .admission-main-info {
        line-height: 1.8;
        margin-top: 80px;
        padding: 0 240px;
    }
    .admission-main-title {
        margin-bottom: 20px;
    }
    .admission-main-text {
        font-size: 0.8rem;
    }
</style>
