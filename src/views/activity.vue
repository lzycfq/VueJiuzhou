<template>
    <div id="activity">
        <div>
            <img src="../assets/images/activity.jpg" alt="">
        </div>
        <div class="activity-main">
            <div class="activity-info" v-for="item in activityData" :key="item.id">
                <p class="activity-info-title">{{item.title}}</p>
                <p class="activity-info-text">{{item.text1}}</p>
                <p class="activity-info-text">{{item.text2}}</p>
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
            activityData: []
        }
    },
    methods: {
        getData() {
            this.$axios.get('/api/activity').then(res=>{
                this.activityData = res.data.data
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
    #activity img {
        width: 100%;
    }
    .activity-main {
        width: 1100px;
        margin: 0 auto;
        padding: 50px;
        box-sizing: border-box;
    }
    .activity-info {
        padding: 80px 50px;
        line-height: 1.8;
    }
    .activity-info-title {
        font-size: 1.2rem;
        margin-bottom: 0.6rem;
    }
    .activity-info-text {
        font-size: 0.78rem;
    }
</style>
