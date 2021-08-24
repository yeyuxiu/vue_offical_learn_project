<template>
    <div>
        <h3 style="color: red" ref="getMe">404错误或者登录失败</h3>
        <br>
        <h3b>项目总结</h3b>
        <h5b>电器商城</h5b>
        <el-link href="http://101.37.152.149:81" type="primary">电器商城链接</el-link>
        <ul>
            <li>技术栈: flask vue element-ui 爬虫</li>
            <li>知识点: 1. 刷新后导航栏变化 2. 升降序 3. 页码前后进退 </li>
            <li style="color: red">登录还没做</li>
            <li>首页很卡 加载太多</li>
        </ul>
        <h5b>DIY电脑商城</h5b>
        <el-link href="http://101.37.152.149:82" type="primary">DIY电脑链接</el-link>
        <ul>
            <li>技术栈: flask vue element-ui 爬虫</li>
            <li style="color: red">选择没做 分数统计没做</li>
            <li>首页很卡 加载太多</li>
        </ul>
        <br>
        <el-button @click="getDom" type="primary">获取dom</el-button>
    </div>
</template>

<script>
    export default {
        name: "testComponent",
        methods: {
            getDom() {
                console.log(this.$refs.getMe)
            }
        }
    }
</script>

<style scoped>

</style>