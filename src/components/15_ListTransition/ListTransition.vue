<template>

    <div>
        <h3b>1. 概述</h3b>
        <p>Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。</p>
        <ul>
            <li>在 CSS 过渡和动画中自动应用 class</li>
            <li>可以配合使用第三方 CSS 动画库，如 Animate.css</li>
            <li>在过渡钩子函数中使用 JavaScript 直接操作 DOM</li>
            <li>可以配合使用第三方 JavaScript 动画库，如 Velocity.js</li>
        </ul>

        <h3b>2. 单元素/组件的过渡</h3b>
        <div id="demo">
            <el-button @click="show = !show" type="primary">Toggle</el-button>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
        </div>

        <h5b>过渡的类名</h5b>
        <p>进入/离开过渡会有 6个class切换</p>
        <ul>
            <li>v-enter : 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。</li>
            <li>v-enter-active: 定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。</li>
            <li>v-enter-to: 2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。</li>
            <li>v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。</li>
            <li>v-leave-active: 定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。</li>
            <li>v-leave-to: 2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。</li>
        </ul>
        <p>如果在 transition 标签中表明name 那么 v-enter 会替换为 my-name-enter</p>

        <h5b>css 过渡</h5b>
        <div id="example-1">
            <el-button @click="show=!show" type="primary">Toogle render</el-button>
            <transition name="slide-fade">
                <p v-if="show">hell</p>
            </transition>
        </div>

        <h5b>css动画</h5b>
        <div id="example-2">
            <el-button @click="show = !show" type="primary">Toggle show</el-button>
            <transition name="bounce">
                <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
            </transition>
        </div>

        <h5b>自定义过渡的类名</h5b>
<p>我们可以通过以下 attribute 来自定义过渡类名：</p>
        <ul>
            <li>enter-class</li>
            <li>enter-active-class</li>
            <li>enter-to-class</li>
            <li>leave-class</li>
            <li>leave-active-class</li>
            <li>leave-to-class</li>
        </ul>
        <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">

        <div id="example-3">
            <el-button @click="show = !show" type="primary">
                Toggle render
            </el-button>
            <transition
                    name="custom-classes-transition"
                    enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight"
            >
                <p v-if="show">hello</p>
            </transition>
        </div>

        <h5b>同时使用过渡和动画</h5b>
        <p>Vue 为了知道过渡的完成，必须设置相应的事件监听器。它可以是 transitionend 或 animationend，这取决于给元素应用的 CSS 规则。如果你使用其中任何一种，Vue 能自动识别类型并设置监听。</p>
        <p>但是，在一些场景中，你需要给同一个元素同时设置两种过渡动效，比如 animation 很快的被触发并完成了，而 transition 效果还没结束。在这种情况中，你就需要使用 type attribute 并设置 animation 或 transition 来明确声明你需要 Vue 监听的类型。</p>

        <h5b>显性的过渡持续时间</h5b>
<!--        <transition :duration="1000">...</transition>   -->
<!--       <transition :duration="{ enter: 500, leave: 800 }">...</transition>  -->

        <h5b>JS钩子</h5b>

        <h3b>3. 初始渲染的过渡</h3b>

        <h3b>4. 多个元素的过渡</h3b>

        <h3b>5. 多个组件的过渡</h3b>
        <div id="example-5">
            <el-radio v-model="view" label="v-a">Component A</el-radio>
            <el-radio v-model="view" label="v-b">Component B</el-radio>

            <transition name="component-fade" mode="out-in">
                <component v-bind:is="view"></component>
            </transition>
        </div>

        <h3b>6. 列表过渡 transition-group 组件</h3b>
        <div id="list-complete-demo" class="demo">
            <el-button v-on:click="shuffle"  type="warning">Shuffle</el-button>
            <el-button v-on:click="add" type="success">Add</el-button>
            <el-button v-on:click="remove" type="danger">Remove</el-button>
            <transition-group :name="listmode" tag="p">
                <span
                        v-for="item in items"
                        v-bind:key="item"
                        class="list-complete-item"
                >
                  {{ item }}
                </span>
            </transition-group>
        </div>


        <h5b>列表的交错过渡</h5b>


    </div>
</template>

<script>
    import vA from './5_vA'
    import vB from './5_vB'

    export default {
        name: "ListTransition",
        data() {
            return {
                show: true,
                view: 'v-a',
                items: [1,2,3,4,5,6,7,8,9],
                nextNum: 10,
                listmode: 'list-completeu'
            }
        },
        components: {
            vA,
            vB
        },
        methods: {
            // 6.1 列表1
            randomIndex: function () {
                let randomNum = Math.floor(Math.random() * 10);
                if (randomNum >= 5){
                    this.listmode = 'list-completeu'
                } else {
                    this.listmode = 'list-completed'
                }
                return Math.floor(Math.random() * this.items.length)
            },
            add: function () {
                this.items.splice(this.randomIndex(), 0, this.nextNum++)
            },
            remove: function () {
                this.items.splice(this.randomIndex(), 1)
            },
            shuffle: function () {
                this.items = this._.shuffle(this.items)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '@/static/scss/15_ListTransition.scss';

</style>