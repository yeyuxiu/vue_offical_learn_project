<template>
    <div>
        <h3b>1.beforeUpdate 和 updated</h3b>
        <el-button @click="updateBoolean=!updateBoolean" type="primary" plain>meB状态:{{ updateBoolean }}</el-button>
        <h3b>2.beforeDestroy 和 destroyed</h3b>
        <el-button type="primary" @click="clear" plain>烧毁</el-button>
        <h5b>观察beforeDestroy 和 destroyed</h5b>
        <br>
        <div class="img">
            <img src="@/static/image/LifeCycle.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "LifeCycle",
        data () {
            return {
                updateBoolean: true,
            }
        },
        methods: {
          clear () {
              // 实例烧毁 通常做清除setTimeout
              this.$destroy();
              
          },
        },
        beforeCreate: function() {
            console.group('------beforeCreate创建前状态------');
            console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
            console.log("%c%s", "color:red","data   : " + this.$data); //undefined
            console.log("%c%s", "color:red","updateBoolean: " + this.updateBoolean) // undefined
        },
        created: function() {
            console.group('------created创建完毕状态------');
            console.log("%c%s", "color:red","el     : " + this.$el); //undefined
            console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
            console.log("%c%s", "color:red","updateBoolean: " + this.updateBoolean); //已被初始化 true
        },
        beforeMount: function() {
            console.group('------beforeMount挂载前状态------');
            console.log("%c%s", "color:red","el     : " + (this.$el)); //undefined
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
            console.log("%c%s", "color:red","updateBoolean: " + this.updateBoolean); //已被初始化
        },
        mounted: function() {
            console.group('------mounted 挂载结束状态------');
            console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
            console.log("%c%s", "color:red","updateBoolean: " + this.updateBoolean); //已被初始化
        },
        beforeUpdate: function () {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data);
            console.log("%c%s", "color:red","updateBoolean: " + this.updateBoolean);
        },
        updated: function () {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data);
            console.log("%c%s", "color:red","updateBoolean: " + this.updateBoolean);
        },
        beforeDestroy: function () {
            console.group('beforeDestroy 销毁前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data);
            console.log("%c%s", "color:red","updateBoolean: " + this.updateBoolean);
        },
        destroyed: function () {
            console.group('destroyed 销毁完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data);
            console.log("%c%s", "color:red","updateBoolean: " + this.updateBoolean)
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/static/scss/1_LifeCycle.scss'

</style>