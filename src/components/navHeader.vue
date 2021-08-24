<template>
    <div>
        <div class="login-box">
            <ul>
                <li>登录</li>
                <li>注册</li>
                <li>
                    购物车(0)
                </li>
            </ul>
        </div>

        <nav>
            <div class="nav-box">
                <div class="logo">
                    <img src="@/static/image/part-00556-3606.jpg" alt="">
                </div>
                <div class="shop-nav-list">
                    <ul>
                        <li @click="changeStyle">
                        <router-link :to="{name: 'firPage'}" :class="{active: beforePage === -1}">首页</router-link>
                        </li>
                        <li v-for="(eachLi, index) in lilist"
                            :key="index"
                            @click="jump(eachLi.title, index)"
                            :class="{active: beforePage === index}"
                        >

                            {{eachLi.title}}
<!--<router-link :to="eachLi.routerPath"></router-link>-->
                        </li>
                    </ul>
                </div>
                <div class="search">
                    <svg t="1625536181291" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2421" width="200" height="200"><path d="M930.769497 961.536028l-174.917739-225.140261a373.75983 373.75983 0 0 0 26.205079-24.15708 415.976538 415.976538 0 0 0 122.274854-295.004957c0-56.273429-11.077813-110.964313-32.814531-162.350471a417.233265 417.233265 0 0 0-89.460323-132.654485A415.976538 415.976538 0 0 0 487.05188 0.000465C430.778451 0.000465 376.087567 11.031733 324.701409 32.814996a417.233265 417.233265 0 0 0-132.654485 89.460323A415.976538 415.976538 0 0 0 69.818616 417.23373c0 56.319974 11.031268 111.010859 32.81453 162.397017a417.233265 417.233265 0 0 0 89.460323 132.654486 415.976538 415.976538 0 0 0 294.958411 122.228308 414.300903 414.300903 0 0 0 205.451543-53.992703l177.338102 228.305351c12.93963 16.756356 36.770892 20.200718 52.829067 7.54036l2.047999-1.489454a38.027619 38.027619 0 0 0 6.050906-53.341067z m-443.57798-197.678455c-191.069004 0-346.484206-155.508293-346.484206-346.716934a346.763479 346.763479 0 0 1 346.484206-346.484206c191.069004 0 346.484206 155.415202 346.484206 346.484206 0 191.301731-155.415202 346.763479-346.484206 346.763479z" p-id="2422"></path></svg>
                </div>

            </div>

        </nav>

    </div>
</template>

<script>
    var session = window.sessionStorage;

    export default {
        name: "navHeader",
        data() {
            return {
                lilist: [
                    {product: 'television',title: '电视'},
                    {product: 'laser',title: '激光'},
                    {product: 'airConditioner',title: '空调'},
                    {product: 'refrigerator',title: '冰箱'},
                    {product: 'washer',title: '洗衣机'},
                    {product: 'freezer',title: '冷柜'},
                    {product: 'kitchen',title: '厨卫'},
                    {product: 'purify',title: '空净'},
                    {product: 'phone',title: '手机'},
                    {product: 'doorLock',title: '门锁'}
                ],

                beforePage: -1
            }
        },
        methods: {
            jump(productName, index) {
                this.$router.push({name: 'shop', params: {product: productName}}).catch(() => {console.log('重复直接linkto解决')})
                this.beforePage = index;
                session.setItem('navHeaderIndex', index)
            },
            changeStyle() {
                session.setItem('navHeaderIndex', -1)
                this.beforePage = -1

            }
        },
        created() {

            if (session.getItem('navHeaderIndex')) {
                this.beforePage = Number(session.getItem('navHeaderIndex'))
            }
        }
    }

</script>

<style scoped lang="scss">
    $nav-height: 90px;
    $nav-logo-width: 180px;
    $nav-search-width: 90px;
    $nav-shop-nav-list-width: 1320px;

    .login-box {
        width: 100%;
        height: 45px;
        background: #444444;
        ul {
            float: right;
            margin-right: 70px;
            list-style: none;
            li {
                display: inline-block;
                width: 80px;
                color: white;
                height: 45px;
                line-height: 45px;
                margin-left: 20px;
                &:hover {
                    cursor: pointer;
                    color: #00abaf;
                }
            }
        }
    }
    nav {
        width: 100%;
        background: #fff;
        box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);
        height: $nav-height;

        .nav-box{
            margin: 0 auto;
            width: $nav-search-width + $nav-logo-width + $nav-shop-nav-list-width;
            .logo {
                height:  $nav-height;
                width: $nav-logo-width;
                float: left;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .shop-nav-list{
                float: left;
                width: $nav-shop-nav-list-width;
                height: $nav-height;
                ul {
                    list-style: none;
                    li {
                        display: inline-block;
                        width: 120px;
                        height: $nav-height;
                        line-height: 90px;
                        text-align: center;
                        background: white;
                        transition: all .3s;
                        &.active {
                            color: white;
                            background: #0b97a4;
                        }
                        &:hover {
                            cursor: pointer;
                            color: white;
                            background: #0b97a4;
                        }
                        a {
                            width: 100%;
                            height: 100%;
                            display: inline-block;
                            transition: all .3s;
                            &:hover {
                                cursor: pointer;
                                color: white;
                                background: #0b97a4;
                            }
                            &.active {
                                color: white;
                                background: #0b97a4;
                            }
                        }
                    }
                }
            }
            .search {
                float: left;
                width: $nav-search-width;
                height: $nav-height;
                text-align: center;
                position: relative;
                svg {
                    position: absolute;
                    top: calc(50% - 25px);
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }

</style>