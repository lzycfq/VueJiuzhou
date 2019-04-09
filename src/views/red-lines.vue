<template>
    <div id="red-lines">
        <div>
            <img src="../assets/images/join_in.jpg" alt="头图">
        </div>
        <div class="red-lines-main">
            <div class="red-lines-main-img">
                <img src="../assets/images/red_lines.png" alt="管理红线">
            </div>
            <div class="red-lines-main-info">
                <p class="red-lines-main-title">{{redLinesData[0].title}}</p>
                <p class="red-lines-main-text">{{redLinesData[0].text1}}</p>
                <p class="red-lines-main-text">{{redLinesData[0].text2}}</p>
                <p class="red-lines-main-text">{{redLinesData[0].text3}}</p>
            </div>
        </div>
        <hr>
        <div class="red-lines-main" style="padding: 90px 0 150px;">
            <div class="red-lines-main-info">
                <p class="red-lines-main-title">{{redLinesData[1].title}}</p>
                <p class="red-lines-main-text">{{redLinesData[1].text1}}</p>
                <p class="red-lines-main-text">{{redLinesData[1].text2}}</p>
                <p class="red-lines-main-text">{{redLinesData[1].text3}}</p>
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
            redLinesData: []
        }
    },
    methods: {
        getData() {
            this.$axios.get('/api/redLines').then(res=>{
                this.redLinesData = res.data.data
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
    #red-lines img {
        width: 100%;
    }
    .red-lines-main {
        width: 1100px;
        margin: 0 auto;
        padding: 50px 0 100px;
    }
    .red-lines-main-img {
        width: 140px;
        height: 140px;
        margin: 0 auto 80px;
    }
    .red-lines-main-info {
        line-height: 2.6;
        padding: 0 100px;
    }
    .red-lines-main-title {
        margin-bottom: 20px;
    }
    .red-lines-main-text {
        font-size: 0.8rem;
    }
</style>
