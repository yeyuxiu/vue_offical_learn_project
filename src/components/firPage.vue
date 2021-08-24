<template>
    <div>
        <div class="show-product">
            <div class="product" v-for="(item, index) in dataList"
                    :key="index"
            >
                <h3>{{item.zh}}</h3>
                <el-carousel :interval="5000" arrow="always" type="card"
                        height="640px"
                             indicator-position="none"
                >
                    <el-carousel-item v-for="(product, index) in item.detailProductList"

                                      :key="index"
                    >
                        <div class="detail-product">
                            <div class="image-box">
                                <img :src="product.mainImage" alt="">
                            </div>
                            <div class="introduce-box">
                                <div class="top-box">
                                    <p>{{product.name}}</p>
                                </div>
                                <div class="bottom-box">
                                    <span>￥ : {{product.price}}</span>
                                    <span>已售 : {{product.saleQuantity}}</span>
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "firPage",
        data() {
            return {
                dataList: []

            }
        },
        created() {
            this.$axios.get('/home')
            .then((response) => {
                this.dataList = response.data.result
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
</script>

<style scoped lang="scss">
    .product {
        width: 1590px;
        background: white;
        height: 680px;
        margin: 0 auto;
        margin-top: 20px;
        h3 {
            text-align: center;
            font-size: 30px;
            color: #595959;
        }
        .el-carousel {

            .detail-product {
                margin: 0 auto;
                height: 660px;
                width: 600px;
                box-sizing: border-box;
                padding: 10px;
                background: white;
                .image-box {
                    height: 500px;
                    width: 550px;
                    margin: 0 auto;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .introduce-box {
                    margin-top: 20px;
                    width: 550px;
                    height: 140px;
                    .top-box {
                        height: 90px;
                    }
                    .bottom-box {
                        height: 50px;
                        & span:nth-child(1) {
                            color: red;
                            float: left;
                        }
                        & span:nth-child(2) {
                            color: grey;
                            float: right;
                        }
                    }
                }
            }
        }

    }
</style>