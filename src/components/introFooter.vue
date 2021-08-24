<template>
    <div class="footer">
        <div class="footer-main">
<!--            图片-->
            <div class="top-intro-img-max">
                    <!--居中-->
                <div class="top-intro-img-mid">
                    <div class="image">
                        <img src="@/static/image/footer/footer-4.png" alt="">
                    </div>
                    <div class="image">
                        <img src="@/static/image/footer/footer-2.png" alt="">
                    </div>
                    <div class="image">
                        <img src="@/static/image/footer/footer-1.png" alt="">
                    </div>
                    <div class="image">
                        <img src="@/static/image/footer/footer-3.png" alt="">
                    </div>
                </div>
            </div>
<!--            文字-->
            <div class="bot-intro-content-max">
                <div class="bot-intro-content-mid">
                    <div class="detail" v-for="(each_detail, index) in detailList"
                        :key="index"
                    >
                        <div class="detail-title">{{each_detail.title}}</div>
                        <div class="detail-content" v-for="(each_content, index) in each_detail.content"
                            :key="index"
                        >
                            {{each_content}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-out">

        </div>
    </div>
</template>

<script>
    export default {
        name: "introFooter",
        data() {
            return {
                detailList: [
                    {title: '企业简介', content: ['企业简介', '企业历史', '企业荣誉', '全球布局']},
                    {title: '人才招聘', content: ['社会招聘', '校园招聘', '培训发展']},
                    {title: '商城服务', content: ['售后政策', '价格保护', '退款说明', '退换货说明']},
                    {title: '购物指南', content: ['购物流程', '常见问题', '在线支付', '找人代付']},
                    {title: '物流配送', content: ['送货范围', '送装一体']},
                    {title: '友情链接', content: ['腾讯视频', 'TV官网']},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .footer {
        width: 100%;
        height: 440px;
        background: white;
        .footer-main {
            width: 1600px;
            margin: 0 auto;
            .top-intro-img-max {
                width: 100%;
                height: 120px;
                .top-intro-img-mid {
                    width: 1400px;
                    margin: 0 auto;
                    div {
                        float: left;
                        height: 120px;
                        width: 349px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .bot-intro-content-max {
                box-sizing: border-box;
                padding-top: 40px;
                width: 100%;
                height: 320px;
                .bot-intro-content-mid {
                    width: 1650px;
                    margin: 0 auto;
                    .detail {
                        width: 275px;
                        float: left;
                        text-align: center;
                        .detail-title {
                            font-size: 21px;
                            color: black;
                        }
                        .detail-content {
                            margin-top: 10px;
                            font-size: 16px;
                            color: hsl(0, 0%, 55%);
                            transition: all .3s;
                            &:hover {
                                cursor: pointer;
                                color: #0b97a4;
                            }
                        }
                    }
                }
            }
        }
        .footer-out {
            background: #3f3f3f;
            width: 100%;
            height: 90px;
        }
    }
</style>