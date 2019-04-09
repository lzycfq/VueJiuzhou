<template>
    <div id="join-in">
        <div>
            <img src="../assets/images/about.jpg" alt="头图">
        </div>
        <div class="join-in-main">
            <div class="join-in-main-top">
                <div class="join-in-main-top-box" style="margin-right: 20px;">
                    <div class="join-in-main-top-img">
                        <img src="../assets/images/master_worker.png" alt="网点师傅">
                    </div>
                    <p class="join-in-main-top-title">网点师傅入口</p>
                </div>
                <div class="join-in-main-top-box">
                    <div class="join-in-main-top-img">
                        <img src="../assets/images/elites.png" alt="奋斗精英">
                    </div>
                    <p class="join-in-main-top-title">奋斗精英</p>
                    <p class="join-in-main-top-mag">销售精英/客服/主管</p>
                </div>
            </div>
            <div class="join-in-main-bottom">
                <p>热门职位</p>
                <div class="join-in-main-table">
                    <el-table :data="joinInData" style="width: 100%;text-align: center;">
                        <el-table-column prop="occupation" label="职业名称"></el-table-column>
                        <el-table-column prop="category" label="类别"></el-table-column>
                        <el-table-column prop="place" label="地点"></el-table-column>
                        <el-table-column prop="number" label="人数"></el-table-column>
                        <el-table-column prop="time" label="发布时间" min-width="100"></el-table-column>
                    </el-table>
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
            joinInData: []
        }
    },
    methods: {
        getData() {
            this.$axios.get('/api/joinIn').then(res=>{
                this.joinInData = res.data.data
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

<style>
    #join-in img {
        width: 100%;
    }
    .join-in-main {
        width: 1100px;
        margin: 0 auto;
        padding: 30px 0 60px;
    }
    .join-in-main-top {
        width: 850px;
        margin: 0 auto 50px;
    }
    .join-in-main-top::after {
        content: '';
        clear: both;
        display: block;
        visibility: hidden;
        height: 0;
    }
    .join-in-main-top-box {
        width: 415px;
        height: 220px;
        background: #EBEBEB;
        float: left;
        text-align: center;
    }
    .join-in-main-top-img {
        width: 100px;
        height: 100px;
        margin: 10px auto 0;
    }
    .join-in-main-top-title {
        margin: 20px 0;
    }
    .join-in-main-top-mag {
        font-size: 0.7rem;
    }
    .join-in-main-bottom {
        width: 100%;
        background: #EBEBEB;
        padding: 40px 40px 60px;
        box-sizing: border-box;
    }
    .join-in-main-bottom>p {
        font-size: 0.8rem;
        margin-bottom: 20px;
    }
    .join-in-main-table {
        padding-bottom: 100px;
        background: #fff;
    }
    .join-in-main-table th {
        text-align: center;
    }
</style>
