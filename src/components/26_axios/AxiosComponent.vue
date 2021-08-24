<template>
    <div>
        <nav class="nav">
            <ul>
                <li v-for="each in liList"
                    :key="each.id"
                    @click="clickIndex(each)"
                    :class="{ activeHover: beforeIndex===each.id }"
                >{{each.title}}</li>
            </ul>
        </nav>
        <div class="news-box" v-for="(each, index) in newsList"
             :key="index"
        >
            <div class="left-img-box">
                <img :src="each.title_image" alt="无法显示">
            </div>
            <a :href="each.href">
                <div class="right-content-box">
                    <div class="content-title">
                        <h3>{{each.title}}</h3>
                    </div>
                    <div class="content-shortContent">
                        <p>{{each.shortContent}}</p>
                    </div>
                    <div class="content-date">
                        <p style="float: left">类型 : {{each.cate}}</p>
                        <p style="float: right">时间 : {{each.date}}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AxiosComponent",
        data() {
            return {
                newsList: [],
                // hoverActive
                liList: [
                    {id: 1, title: '活动'},
                    {id: 2, title: '绯闻'},
                    {id: 3, title: '图片'}
                ],
                beforeIndex: 1
            }
        },
        created() {
            // beforeIndex
            let session = window.sessionStorage;
            if (session.getItem('axiosIndex')) {
                this.beforeIndex = Number(session.getItem('axiosIndex'))
            }
            // 请求cate种类
            let cate;
            console.log(this.liList.length)
            for (let i=0; i< this.liList.length; i++) {

                if (this.liList[i]["id"] === this.beforeIndex) {
                    cate = this.liList[i]["title"];
                    console.log(cate)
                }
            }

            this.$axios.get('/newsData',{
                params: {
                    cate: cate
                }
            })
            .then((response) => {
                this.newsList = response.data.result;
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })

        },
        methods: {
            clickIndex(eachObject) {
                let session = window.sessionStorage;
                this.beforeIndex = eachObject.id;
                session.setItem('axiosIndex', eachObject.id)

                this.$axios.get('/newsData', {
                    params: {
                        cate: eachObject.title
                    }
                })
                .then((response) => {
                    this.newsList = response.data.result;
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        }

    }
</script>

<style scoped lang="scss">
    @import "@/static/scss/26_AxiosComponent.scss";

</style>