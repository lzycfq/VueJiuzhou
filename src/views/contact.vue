<template>
    <div id="contact">
        <div>
            <img src="../assets/images/about.jpg" style="width: 100%;" alt="头图">
        </div>
        <div class="contact-main">
            <div id="allmap" ref="allmap"></div>
            <ul class="contact-main-ul">
                <li>
                    <div class="contact-main-img">
                        <img src="../assets/images/telephone.png" alt="">
                    </div>
                    <p class="contact-main-text">{{contactData.phone}}</p>
                </li>
                <li>
                    <div class="contact-main-img">
                        <img src="../assets/images/mailbox.png" alt="">
                    </div>
                    <p class="contact-main-text">邮箱/电话</p>
                </li>
                <li>
                    <div class="contact-main-img">
                        <img src="../assets/images/address.png" alt="">
                    </div>
                    <p class="contact-main-text">联系人 地址</p>
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
            contactData: []
        }
    },
    methods:{
        //百度地图
        map(){
            let map = new BMap.Map("allmap");
            let point = new BMap.Point(113.331, 23.112);
            map.centerAndZoom(point, 16);
            let marker = new BMap.Marker(new BMap.Point(113.331, 23.112));  // 创建标注
            map.addOverlay(marker);               // 将标注添加到地图中
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        },

        //接口请求
        getData() {
            this.$axios.get('/api/contact').then(res=>{
                this.contactData = res.data.data
            })
            .catch(res=>{
                alert('请求失败')
            })
        }
    },
    mounted(){
        this.getData();
        this.$nextTick(function() {
            this.map()
        })
    }
}
</script>

<style>
    .contact-main {
        width: 1100px;
        margin: 0 auto;
        padding: 50px 0;
    }
    #allmap{
        height: 500px;
        overflow: hidden;
    }
    .anchorBL {
        display:none
    }
    .contact-main-ul {
        width: 100%;
        padding: 80px 100px;
        box-sizing: border-box;
    }
    .contact-main-ul::after {
        content: '';
        clear: both;
        display: block;
        visibility: hidden;
        height: 0;
    }
    .contact-main-ul li {
        float: left;
        width: 33%;
        text-align: center;
    }
    .contact-main-img {
        width: 80px;
        height: 80px;
        margin: 10px auto 25px;
    }
    .contact-main-img img {
        width: 100%;
    }
    .contact-main-text {
        font-size: 0.8rem;
    }
</style>
