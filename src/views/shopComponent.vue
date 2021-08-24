<template>
    <div class="main">
        <nav class="sale-price-nav">
            <div class="left-introduce">
                <p>{{product}}</p>
            </div>
            <div class="right-sale-price">
                <ul>
                    <li @click="changeSort('sale')" :class="saleClass">销量</li>
                    <li @click="changeSort('price')" :class="priceClass">价格</li>
                </ul>
            </div>
        </nav>

<!--中间展示-->

        <div class="show-shop">
            <div class="product-box"
                 v-for="(item, index) in productList"
                 :key="index"
            >
                <div class="top-image">
                    <img :src="item.mainImage" alt="">
                </div>
                <div class="bot-intro">
                    <div class="name">
                        <p>{{item.name}}</p>
                    </div>
                    <div class="detail">
                        <span>￥ : {{item.price}}</span>
                        <span>已售 : {{item.saleQuantity}}</span>
                    </div>
                </div>
            </div>
        </div>
<!--        最下面的页数导航-->
        <div class="bot-page">
            <div class="page-nav">
                <ul>
                    <li
                        @click="preNextPage('pre')"
                    >
                      &#60;
                    </li>
                    <li class="page" v-for="i in allPage"
                        :key="i"
                        @click="preNextPage(i)"
                        :class="{active: currentPage === i }"
                    >
                        {{i}}
                    </li>
                    <li
                        @click="preNextPage('next')"
                    >
                        &#62;
                    </li>
                </ul>
                <div class="all-page">
                    <p>共{{count}}条 : </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var session = window.sessionStorage;

    export default {
        name: "shopComponent",
        props: ['product'],

        data() {
            return {
                productList: [],
                count: '',
                allPage: '',
                // 下面导航栏
                currentPage: 1,
                // 销量 售价
                saleClass: 'saleClass',
                priceClass: 'priceClass',
            }
        },

        created() {
            // 每次切换路由都重置这些信息
            session.removeItem('price');
            session.removeItem('sale');
            // 对于页码的session
            session.setItem('currentPage', '1');
            this.notAllow = true;

            // 请求产品列表
            this.$axios.get('/shop', {
                params: {
                    'product': this.product
                }
            })
                .then((response) => {
                    this.productList = response.data.result.productList;
                    this.count = Number(response.data.result.count);
                    this.allPage = Number(response.data.result.allPage);
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        methods: {
            // 销量 价格
            changeSort(type) {
                let session = window.sessionStorage;
                let priceType = session.getItem('price');
                let saleType = session.getItem('sale');

                if (type === 'price') {
                    session.removeItem('sale')


                    if (priceType === 'down') {
                        session.setItem('price', 'up');

                        this.saleClass = '';
                        this.priceClass = 'priceClass-up';

                        this.$axios.get('/shop', {
                            params: {
                                product: this.product,
                                price: 'up',
                            }
                        })
                        .then((response) => {
                            this.productList = response.data.result.productList;
                        })
                        // 使得index返回 1
                        this.currentPage = 1;
                        session.setItem('currentPage', this.currentPage);

                    } else {
                        session.setItem('price', 'down');
                        this.saleClass = '';
                        this.priceClass = 'priceClass-down';

                        this.$axios.get('/shop', {
                            params: {
                                product: this.product,
                                price: 'down',
                            }
                        }).then((response) => {
                                this.productList = response.data.result.productList;
                            })
                        // 使得index返回 1
                        this.currentPage = 1;
                        session.setItem('currentPage', this.currentPage);
                    }

                    // 设置页码的index


                } else {
                    session.removeItem('price')
                    if (saleType === 'down') {
                        session.setItem('sale', 'up')
                        this.priceClass = '';
                        this.saleClass = 'saleClass-up';

                        this.$axios.get('/shop', {
                            params: {
                                product: this.product,
                                sale: 'up',
                            }
                        }).then((response) => {
                            this.productList = response.data.result.productList;
                        })

                        // 使得index返回 1
                        this.currentPage = 1;
                        session.setItem('currentPage', this.currentPage);

                    } else {
                        session.setItem('sale', 'down')
                        this.priceClass = '';
                        this.saleClass = 'saleClass-down';

                        this.$axios.get('/shop', {
                            params: {
                                product: this.product,
                                sale: 'down',
                            }
                        }).then((response) => {
                            this.productList = response.data.result.productList;
                        })

                        // 使得index返回 1
                        this.currentPage = 1;
                        session.setItem('currentPage', this.currentPage);

                    }
                }
                // 设置页码的index


            },
            // 页码
            preNextPage(type) {
                let currentPage = Number(session.getItem('currentPage'));
                let priceType = session.getItem('price');
                let saleType = session.getItem('sale');

                if (type === 'next') {
                    if (currentPage === this.allPage) {
                        this.$notify({
                            title: '警告',
                            message: '最后一页',
                            type: 'warning'
                        })
                        
                    } else {
                        this.$axios.get('/shop', {
                            params: {
                                product: this.product,
                                page: ++currentPage,
                                price: priceType,
                                sale: saleType
                            }
                        }).then((response) => {
                            this.productList = response.data.result.productList;
                        })
                        session.setItem('currentPage', currentPage)

                        // 设置页码 class
                        this.currentPage = currentPage
                    }
                } else if (type === 'pre') {
                    if (currentPage === 1) {
                        this.$notify({
                            title: '警告',
                            message: '最前一页',
                            type: 'warning'
                        })
                    } else {
                        this.$axios.get('/shop', {
                            params: {
                                product: this.product,
                                page: --currentPage,
                                price: priceType,
                                sale: saleType
                            }
                        }).then((response) => {
                            this.productList = response.data.result.productList;
                        })
                        session.setItem('currentPage', currentPage)

                        // 设置页码 class
                        this.currentPage = currentPage
                    }
                } else {
                    this.$axios.get('/shop', {
                        params: {
                            product: this.product,
                            page: Number(type),
                            price: priceType,
                            sale: saleType
                        }
                    })
                        .then((response) => {
                            this.productList = response.data.result.productList;
                        })
                        .catch((err) => {
                            console.log(err)
                        })

                    session.setItem('currentPage', type)

                    // 设置页码 class
                    this.currentPage = type
                }
            }
        },
        watch: {
            // 监听路由变化，不然同页面切换路由 created 只会执行一次

            $route() {
                // 每次切换路由都重置这些信息
                session.removeItem('price');
                session.removeItem('sale');
                // 对于页码的session
                session.setItem('currentPage', 1);
                // 初始化销量和价格属性
                this.priceClass = '';
                this.saleClass = '';

                this.currentPage = 1;


                this.$axios.get('/shop', {
                    params: {
                        'product': this.product
                    }
                })
                    .then((response) => {
                        this.productList = response.data.result.productList;
                        this.count = Number(response.data.result.count);
                        this.allPage = Number(response.data.result.allPage);

                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },

        }
    }
</script>

<style scoped lang="scss">

    .main {
        width: 1400px;
        margin: 0 auto;
    }
    .sale-price-nav {
        height: 50px;
        line-height: 50px;

        .left-introduce {
            float: left;
            height: 50px;
            p {
                font-size: 22px;
            }
        }
        .right-sale-price {
            float: right;
            height: 50px;
            ul {
                list-style: none;
                li {
                    display: inline-block;
                    font-size: 19px;
                    transition: all .3s;
                    margin-left: 25px;
                    width: 60px;
                    &:hover {
                        cursor: pointer;
                        color: #00abaf;
                    }
                    &.saleClass-up , &.priceClass-up {
                        color:  #00abaf;
                        &::after {
                           content: '↑';
                            color:  #00abaf;
                        }
                    }
                    &.saleClass-down , &.priceClass-down {
                        color:  #00abaf;
                        &::after {
                            content: '↓';
                            color:  #00abaf;
                        }
                    }
                }
            }
        }
    }

    .show-shop {
        height: 1600px;
        .product-box {
            box-sizing: border-box;
            padding: 5px;
            float: left;
            width: 270px;
            height: 400px;
            margin-left: 10px;
            background: #fff;
            transition: all .3s;
            margin-top: 10px;
            &:hover {
                box-shadow: 0 0 20px 1px rgba(0,0,0,0.2);
            }
            .top-image {
                width: 260px;
                height: 240px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .bot-intro{
                height: 160px;
                .name {
                    height: 120px;
                }
                .detail {

                    span:nth-child(1) {
                        color: red;
                        float: left;
                    }
                    span:nth-child(2) {
                        color: grey;
                        float: right;
                    }
                }
            }
        }
    }

    .bot-page {
        margin-top: 70px;
        height: 30px;
        .page-nav {
            float: right;
            height: 30px;

            .all-page {
                float: right;
                font-size: 18px;
                line-height: 30px;
            }
            ul{
                margin-left: 20px;
                float: right;
                list-style: none;
                border: 1px solid #a6a6a6;
                li {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    color: #4d4d4d;
                    transition: all .2s;
                    &:hover {
                        cursor: pointer;
                        color: white;
                        background: #00abaf;
                    }
                    &.active {
                        color: white;
                        background: #00abaf;
                    }
                }
                li:nth-child(n+2) {
                    border-left: 1px solid #a6a6a6;
                }
                li:first-child, li:last-child{
                    cursor: pointer;
                    width: 35px;

                    &:hover {
                        background: transparent;
                        color: black;
                    }

                }

            }
        }
    }

</style>