<template>
    <div>
        <h3b>1. 对象语法</h3b>
<!--        -->
        <h5b>可以与普通class共存且动态</h5b>
        <div class="static"
            :class="{ active: isActive, 'text-danger':hasError }"
        >属性 static active </div>
        <div class="static" :class="classobject">
            属性 static text-danger
        </div>

        <h3b>2. 数组语法</h3b>
        <div class="static" :class="[activeClass, errorClass]">
        属性 activeArr errorArr
        </div>

        <h3b>3. 在一个自定义组件上使用 class property</h3b>
<!--        -->
        <h5b>下面的属性是叠加的</h5b>
        <addup class="bar">1</addup>

        <h3b>4. 内联样式</h3b>
        <p :style="{ color: activeColor, fontSize: fontSize + 'px' }">activeColor fontSize</p>
        <p>在styleObject中不能使用 this.值</p>
        <p :style="styleObject">styleobject</p>
    </div>
</template>

<script>
    import addup from './3_addup'
    export default {
        name: "ClassAndStyle",
        data() {
            return {
                isActive: true,
                hasError: false,
                activeClass: 'activeArr',
                errorClass: 'errorArr',
                activeColor: 'red',
                fontSize: 15,
                styleObject: {
                    color: 'red',
                    fontSize: '20px'
                }
            }
        },
        computed: {
            classobject() {
                return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === 'fatal'
                }
            }
        },
        components: {
            addup
        }

    }
</script>

<style lang="scss" scoped>
    @import '@/static/scss/4_ClassAndStyle.scss'
</style>